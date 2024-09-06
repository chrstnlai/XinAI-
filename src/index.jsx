import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage.jsx';
import App from './App.jsx';
import BreatherPage from './BreatherPage.jsx';
import HomePage from './HomePage.jsx';
import AudioLog from './AudioLog.jsx';
import MeditationRoom from './MeditationRoom.jsx';
import Care from './Care.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/App" element={<App />} />
				<Route path="/BreatherPage" element={<BreatherPage />} />
				<Route path="/HomePage" element={<HomePage />} />
				<Route path="/AudioLog" element={<AudioLog />} />
				<Route path="/MeditationRoom" element={<MeditationRoom />} />
				<Route path="/Care" element={<Care/>} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
