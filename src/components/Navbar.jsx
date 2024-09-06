import './Navbar.css'
import React,{useState} from "react";
import { NavbarContainer,
        LeftContainer, 
        RightContainer, 
        NavbarInnerContainer,   
        NavbarExtendedContainer,
        NavbarLinkContainer, 
        NavbarLink,
       Logo,
        NavbarLinkExtended,
       OpenLinksButton} 
  from '/src/styles/Navbar.style.jsx';
import LogoImg from '/src/assets/Logo.png';


export default function Navbar() {
      const [extendNavbar, setExtendNavbar] = useState(false);
  
  return(
    <NavbarContainer extendNavbar = {extendNavbar}>
      <NavbarInnerContainer>
    <LeftContainer>
    <NavbarLinkContainer>
      <NavbarLink to = "/HomePage" activeClassName="active">Home </NavbarLink>
       <NavbarLink to = "/AudioLog">Audio Log </NavbarLink>
       <NavbarLink to = "/MeditationRoom">Meditation Room </NavbarLink>
       <NavbarLink to = "/Care">Care </NavbarLink>
      <OpenLinksButton
        onClick = {() => {
          setExtendNavbar((curr) => !curr);
        }}
        >{extendNavbar ? <> &#10005;</> : <>&#8801;</> }</OpenLinksButton>
    </NavbarLinkContainer>
    </LeftContainer>
    <RightContainer>
      <Logo src={LogoImg}></Logo>
    </RightContainer>
        </NavbarInnerContainer>
      {extendNavbar && (
      <NavbarExtendedContainer>
        <NavbarLinkExtended to = "/HomePage">Home </NavbarLinkExtended>
         <NavbarLinkExtended to = "/AudioLog">Audio Log </NavbarLinkExtended>
         <NavbarLinkExtended to = "/MeditationRoom">Meditation Room </NavbarLinkExtended>
         <NavbarLinkExtended to = "/Care">Care </NavbarLinkExtended>
      </NavbarExtendedContainer>
      )}
    </NavbarContainer>

    
  )
  

}