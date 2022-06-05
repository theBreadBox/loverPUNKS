import styled, { keyframes } from 'styled-components';
import { Link as LinkR } from 'react-router-dom'
import background from "../../images/MINT_BG.png"
import clouds from "../../images/clouds.png"
import ScrollEffect from 'react-scroll';


export const MintPageContainer = styled.div`
z-index: 3;
min-height: 100vh;
min-width: 100%;

background-image: url(${background});
background-size: cover nowrap;
font-family: 'VT323', monospace;
display: flex;
flex-direction: column;
align-items: center;
`;

export const MintPageNavbar = styled.div`
padding: 12px;
padding-bottom: 0;
display: flex;
z-index: 2;
font-family: 'VT323', monospace;
`;

export const NavbarLinkA = styled.a`
padding: 5px;
cursor: pointer;
z-index: 2;
font-family: 'VT323', monospace;
`;

export const NavbarImage = styled.img`
height: 50px;
`;

export const MintPanelImage = styled.img`
max-width: 100%;
`;

export const MintPageMain = styled.div`
display: inline-block;
float: bottom;
justify-content: center;
text-align: center;
margin-top: auto;
font-family: 'VT323', monospace;
`;

export const MintLabel = styled.label`
z-index: 2;
margin-bottom: 10px;
font-size: 28px;
color: white;
text-shadow: 0 0 15px #64cae5;
font-family: 'VT323', monospace;
`;

export const InputWrapper = styled.div`
display: flex;
flex-direction: row;
`;

export const MintInput = styled.input`
color: white;
border-radius: 25px;
justify-content: center;
justify-self: center;
background: none;
border: none;
text-align: center;
font-family: 'VT323', monospace;
font-size: 28px;
margin-bottom: 10px;
z-index: 3;
::-webkit-inner-spin-button{
  -webkit-appearance: none; 
  margin: 0; 
}
::-webkit-outer-spin-button{
  -webkit-appearance: none; 
  margin: 0; 
}   
`;

export const InputArrows = styled.label`
text-align: center;
font-size: 28px;
padding: 0 10px;
color: white;
cursor: pointer;
z-index: 3;
font-family: 'VT323', monospace;
`

export const MintButton = styled.button`
z-index: 3;
border-radius: 50px;
background: #FFF;
white-space: nowrap;
text-decoration: none;
cursor: pointer;
&:hover {
  text-shadow: 0 0 50px #FFF;
}
color: #64cae5;
border: none;
padding: 10px 22px;
font-family: 'VT323', monospace;
font-size: auto;
font-weight: 700;
margin-top: 10px;
margin-bottom: 10px;
text-align: center;

width: 100px;
`;

export const DescriptionPanel = styled.div`
display: inline-block;
float: top;
align-items: center;
text-align: center;
justify-content: center;
font-family: 'VT323', monospace;
`;

export const AmountMinted = styled.h1`
color: white;
text-shadow: 2px 2px rgba(0, 0, 0, 0.9);
margin-bottom: 5px;
margin-top: 10px;
padding: 2px;
font-size: 50px;
font-family: 'VT323', monospace;

}
`;

export const MintPanel = styled.div`
display: flex;
flex-direction: column-reverse;
text-align: center;
margin: 40px 0;
margin-bottom: 0;
min-height: 30vh;
z-index: 3;
font-family: 'VT323', monospace;
`;

export const GridCol = styled.div`
display: flex;
align-items: center;
justify-self: center;
justify-content: center;
flex-direction: column;
margin-left: 10px;
margin-right: 10px;
`;

export const TextWrapper = styled.div`
color: #64cae5;
text-shadow: 2px 2px rgba(0, 0, 0, 0.9);
padding: 10px;
max-width: 800px;
justify-content: center;
font-family: 'VT323', monospace;

`;

export const Title = styled.h1`
margin: 10px 0;
color: white;
text-align: left;
text-shadow: 0 0 15px blue;
font-size: 50px;
z-index: 3;
font-family: 'VT323', monospace;
`;

export const Connect = styled.h1`
z-index: 2;
margin-bottom: 10px;
color: white;

font-family: 'VT323', monospace;
font-size: 90px;
cursor: pointer;
&:hover {
  text-shadow: 0 0 50px #60c657;
}

`;

export const Subtitle = styled.h3`
margin-bottom: 10px;
font-family: 'VT323', monospace;
color: #fff;
text-shadow: 2px 2px rgba(0, 0, 0, 0.9);
`;

export const Logo = styled.img`
align-self: center;
width: 100%;
max-width: 750px;
margin: 20px 0;
padding: 0 10px;
z-index: 3;
`;

export const FooterLinksWrapper = styled.div`
padding: 10px;
margin: 10px;
display: flex;
justify-content: center;
font-family: 'VT323', monospace;
z-index: 2;
@media screen and (max-width: 539px) {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}
`;

export const FooterLinks = styled.a`
border-radius: 50px;
background: #FFF;
white-space: nowrap;
text-decoration: none;
font-family: 'VT323', monospace;
cursor: pointer;
color: #000;
padding: 10px 22px;
font-size: auto;
font-weight: 700;
margin: 10px;
z-index: 2;

text-align: center;
box-shadow: 0 2px 2px rgba(0, 0, 0, 0.9);
`;

function scrollEffect() {
  return keyframes`
  100% {
    right: 0px;
  }
  50% {
    right: 20%;
  }
  0% {
    right: 0px;
  }
  `;
}

export const Clouds = styled.img`
position: absolute;
z-index: 1;
height: 100%;
object-fit: cover;
opacity: 0.02:
animation: ${scrollEffect} 20s linear infinite;
`;
