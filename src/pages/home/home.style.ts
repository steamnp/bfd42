import styled from "styled-components";


export const Container = styled.div`
max-height: 100%;
margin-top: 50px;
position: relative;
margin-bottom: 400px;
`
export const Box = styled.div`
height: fit-content;
display: flex;
flex-direction: row;
margin: auto;
border-radius: 16px;
max-width: var(--max-container);
background-color: hsl(11, 73%, 66%);

`
export const SectionLeft = styled.div`
width: 60%;
margin: 25px;
text-align: left;
`

export const SectionLeftHeader = styled.h2`
margin: 5%;
color: white;
`

export const Paragraph = styled.p`
color: white;
margin: 5%;

`

export const SectionRight = styled.div`
width: 40%;
margin-top: 25px;
margin-right: 25px;

`

export const Image = styled.img`

`

export const Button = styled.a`
background-color: white;
margin: 5%;
padding: 15px;
font-size: 12px;
border-radius: 8px;

`
export const MidSection = styled.section`

margin: auto;
display: flex;
flex-direction: row;
margin-top: 150px;
max-width: var(--max-container);
justify-content: space-between;



`
export const MidRightBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;



`
export const MidLeftBox = styled.div`
margin-right: 16px;

`
export const ImageWebDesign = styled.img`
width: auto;
border-radius: 16px;


`

export const ImageAppDesign = styled.img`
width: auto;
height: auto;
border-radius: 16px;


`

export const ImageGraphicDesign = styled.img`
width: auto;
border-radius: 16px;

`
export const LowerMidSection = styled.section`


max-width: var(--max-container);
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
margin: var(--center-container);
margin-top: 100px;
margin-bottom: -500px;
gap: 24px;



`
export const Cards = styled.div`
display: flex;
flex-direction: column;
max-width: fit-content;
align-items: center;
text-align: center;
margin: auto;
`

export const CardSectionTop = styled.div`

background-color: #F4EEEE;
border-radius: 50%
`

export const CardSectionBottom = styled.div`

`
export const HeaderCard = styled.h3`
padding: 16px;

`
export const ParagraphCard = styled.p`

`