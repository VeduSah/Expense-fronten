import styled from "styled-components";
const Button=styled.button`
background-color:${props=>props.primary ? 'Grey':'Yellow'};
width:49px;
height:20px;
border:3px solid black;
display:${props=>props.display ? props.display:'inline'};
`
export default Button;