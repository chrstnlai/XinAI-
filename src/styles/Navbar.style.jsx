import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")}; 
  background-color: #fbca41;
  display: flex;
  flex-direction: column;

@media(min-width:700px){
  height:80px;
}

  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
`;

export const NavbarExtendedContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;

  @media(min-width:700px){
    display:none;
  }
`;

export const NavbarLink = styled(Link)`
  color: black;
  font-size: x-large;
  font-family: Arial, Helvitica, sans-serif;
  margin: 20px;
  text-decoration: none;

  @media (max-width:700px){
    display:none;
  }

  &:hover {
    color: #fbca41;
    background-color: white; 
    border-radius: 5px; 
    padding: 5px 10px; 
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: black;
  font-size: x-large;
  font-family: Arial, Helvitica, sans-serif;
  margin: 10px;
  text-decoration: none;

  &:hover {
    color: #fbca41;
    background-color: white; 
    border-radius: 5px; 
    padding: 5px 10px; 
  }
`;

export const Logo = styled.img`
  max-width: 100 px;
  height: 100px;

`;

export const OpenLinksButton = styled.button`
  width:70px;
  height:50px;
  color:white;
  background:none;
  border:none;
  font-size:45px;
  cursor:pointer;

  @media (min-width:700px){
    display:none;
  }

`;