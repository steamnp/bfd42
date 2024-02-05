import styled from "styled-components";


export const Container = styled.div`
max-height: 100%;
margin-top: 50px;
position: relative;
margin-bottom: 400px;
`
export const Box = styled.div`
height: 500px;
display: flex;
flex-direction: row;
margin: auto;
border-radius: 16px;
max-width: var(--max-container);
background-color: hsl(11, 73%, 66%);

`
export const SectionLeft = styled.div`
margin-left: 4%;
margin-top: 100px;
width: 60%;
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



`

export const Image = styled.img`
height: 500px;

border-top-right-radius: 16px;
border-bottom-right-radius: 16px;
`

export const BoxSecond = styled.section`

margin: auto;
display: flex;
flex-direction: row;
margin-top: 150px;
max-width: var(--max-container);

`

export const BoxSecondLeftSection = styled.img`
max-width: auto;
border-bottom-left-radius: 16px;
border-top-left-radius: 16px;

`


export const BoxSecondRightSection = styled.div`
display: flex;
flex-direction: column;
background-color: #FDF2EF;
height: 640px;
width: 100%;
border-top-right-radius: 16px;
border-bottom-right-radius: 16px;
`


export const BoxThird = styled.section`


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

export const CardSectionMid = styled.h3`
margin-top: 16px;
`
export const CardSectionBottom= styled.button`
padding: 16px;
background-color: var(--color-pry-100);
border: none;
border-radius: 10px;
color: white;
font-size: 0.9rem;
margin-top: 16px;
`
