const URL = "https://teachablemachine.withgoogle.com/models/_ITwA-vlf/";

let mediaRecorder;
let audioChunks = [];
let recognizer;
let audioContext;
let analyser;
let dataArray;
let canvas;
let canvasCtx;
let animationFrameId;
let audioContainer;


async function createModel() {
    const checkpointURL = URL + "model.json"; // model topology
    const metadataURL = URL + "metadata.json"; // model metadata

    recognizer = speechCommands.create(
        "BROWSER_FFT", // fourier transform type, not useful to change
        undefined, // speech commands vocabulary feature, not useful for your models
        checkpointURL,
        metadataURL
    );

    // check that model and metadata are loaded via HTTPS requests.
    await recognizer.ensureModelLoaded();

    return recognizer;
}

async function startRecording() {
    if (!recognizer) {
        await createModel();
    }
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const audioStream = new AudioContext();
    audioContext = audioStream;
    analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaStreamSource(stream);
    source.connect(analyser);
    analyser.fftSize = 2048;
    dataArray = new Uint8Array(analyser.frequencyBinCount);

    canvas = document.getElementById('visualizer');
    canvasCtx = canvas.getContext('2d');

    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = event => {
        audioChunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
        try {
            // Save the recorded audio and create a URL
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            const audioUrl = window.URL.createObjectURL(audioBlob);

            // Create a new audio player element and add it to the container
            if (!audioContainer) {
                audioContainer = document.getElementById('audio-container');
            }
            const audioElement = document.createElement('audio');
            audioElement.controls = true;
            audioElement.src = audioUrl;
            audioContainer.appendChild(audioElement);

            // Clear the visualization
            if (canvasCtx) {
                canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
            }

            // Reset audioChunks for the next recording
            audioChunks = [];
        } catch (error) {
            console.error('Error creating audio URL:', error);
        }
    };

    mediaRecorder.start();
    console.log('Recording started');

    // Start visualizing audio
    visualize();

    // Start listening to the speech commands
    const classLabels = recognizer.wordLabels(); // get class labels
    const labelContainer = document.getElementById("label-container");
    for (let i = 0; i < classLabels.length; i++) {
        labelContainer.appendChild(document.createElement("div"));
    }

    recognizer.listen(result => {
        const scores = result.scores; // probability of prediction for each class
        // render the probability scores per class
        let maxScore = -1;
        let maxIndex = -1;
        for (let i = 0; i < classLabels.length; i++) {
            const classPrediction = classLabels[i] + ": " + result.scores[i].toFixed(2);
            labelContainer.childNodes[i].innerHTML = classPrediction;
            if (result.scores[i] > maxScore) {
                maxScore = result.scores[i];
                maxIndex = i;
            }
        }
        const classification = classLabels[maxIndex];
        document.getElementById('classification').innerText = `Classification: ${classification}`;
    }, {
        includeSpectrogram: true, // in case listen should return result.spectrogram
        probabilityThreshold: 0.75,
        invokeCallbackOnNoiseAndUnknown: true,
        overlapFactor: 0.50 // probably want between 0.5 and 0.75. More info in README
    });
}

function stopRecording() {
    if (mediaRecorder) {
        mediaRecorder.stop();
        console.log('Recording stopped');

        // Stop listening to the speech commands
        if (recognizer) {
            recognizer.stopListening();
        }

        // Stop visualizing audio and clear the canvas
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        if (canvasCtx) {
            canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
        }
    } else {
        console.log('No recording in progress');
    }
}

function visualize() {
    if (!analyser) return;

    analyser.getByteFrequencyData(dataArray);

    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

    const barWidth = (canvas.width / analyser.frequencyBinCount) * 2.5;
    let barHeight;
    let x = 0;

    for (let i = 0; i < analyser.frequencyBinCount; i++) {
        barHeight = dataArray[i];
        canvasCtx.fillStyle = 'rgb(' + (barHeight + 100) + ',50,50)';
        canvasCtx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);
        x += barWidth + 1;
    }

    // Store the animation frame ID
    animationFrameId = requestAnimationFrame(visualize);
}

document.addEventListener("DOMContentLoaded", function () {
    window.startRecording = startRecording; // Expose the startRecording function to the global scope
    window.stopRecording = stopRecording; // Expose the stopRecording function to the global scope
});