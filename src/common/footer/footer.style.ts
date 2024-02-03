import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { QUERIES } from '../../helpers/media-query'

export const FooterDisplayBoard = styled.div`
max-width: var(--max-container);
min-height: 30vh;
display: flex;
margin-left: auto;
margin-right: auto;
background-color: var(--color-pry-100);
z-index: 1;
margin-top: -200px;
position:relative;
justify-content: space-between;
border-radius: 16px;

`
export const FooterDisplayHeader = styled.h1`
margin: 5%;
color: white;
`
export const SectionLeftDisplyBoard = styled.section`
margin: 25px;
`

export const SectionRightDisplyBoard = styled.section`

`
export const FooterUpperSection = styled.div`
padding-top: 60px;
padding-bottom: 10px;
`
export const FooterContainer = styled.footer`
  max-width: 100%;
  min-height: 0rem;
  padding: 0rem 1rem;
  position: relative;
  z-index: 1000;
  background-color: var(--color-pry-200);
  margin-top: 800px;

  @media ${QUERIES.mobile} {
    padding-top: 1rem;
  }
`

export const FooterWrap = styled.div`
  max-width: var(--max-container);
  min-height: 4rem;
  margin: var(--center-container);
  display: flex;
  align-items: center;

  & > * {
    flex: 1;
  }
`

export const FooterLogoWrap = styled.div``

export const FooterLogoLink = styled(Link)``

export const FooterLogo = styled.img`
  max-width: 12.25rem;
  height: auto;
  @media screen and (max-width: 686px) {
    max-width: 10.25rem;
  }
`

export const FooterMenu = styled.nav`
  flex: 5;
`

export const FooterMobileNav = styled.div`
  display: none;

  @media screen and (max-width: 686px) {
    display: flex;
    justify-content: flex-end;
  }
`

export const MobileNav = styled.button`
  border: none;
  background-color: transparent;

  i {
    font-size: 1.25rem;
  }
  &:hover {
    /* background-color: transparent; */
  }
`

export const FooterMenuItems = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 686px) {
    background-color: var(--color-pry-300);
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    margin-top: 4rem;
    padding: 1.5rem 1rem;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    min-height: 14.6875rem;
    pointer-events: none;
    opacity: 0;
    transform: translateY(-1rem);
  }
`

export const FooterMenuItem = styled(Link)`
  text-transform: uppercase;
  margin-left: 2.6875rem;
  color:   white;

  @media screen and (max-width: 686px) {
    margin-left: 0rem;
    color: var(--color-pry-300);
    font-size: 1.5rem;

    &:hover {
      transition: var(--transition);
      color: var(--color-pry-300);
      border-color: var(--color-pry-300);
    }
  }
`
export const HorizontalLine = styled.hr`
color: white;
max-width: var(--max-container);
margin: var(--center-container);
`
export const FooterLowerSection = styled.div`
max-width: var(--max-container);
display: flex;
flex-direction: row;
justify-content: space-between;
padding-top: 80px;
padding-bottom: 80px;
margin: var(--center-container);


`

export const AddressDiv = styled.div`
display: flex;
flex-direction: column;

`

export const AddressDivHeader= styled.h4`
color: white;

`
export const AddressPara = styled.p`
color: white;
`

export const SocialMediaLogo = styled.div`
display: flex;
gap: 20px;
margin-top: 44px;
`

