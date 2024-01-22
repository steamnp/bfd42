import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import { QUERIES } from '../../helpers/media-query'

export const FooterUpperSection = styled.div`

`
export const FooterLowerSection = styled.div`

`
export const FooterContainer = styled.footer`
  max-width: 100%;
  min-height: 0rem;
  padding: 0rem 1rem;
  position: relative;
  z-index: 1000;
  background-color: var(--color-pry-200);

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
    background-color: transparent;
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
    transition: 0.5s ease-in-out;
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
`

export const AddressDiv = styled.div`
display: flex;
flex-direction: column;

`

export const AddressDivHeaderv= styled.h4`
display: flex;
flex-direction: column;
`