import React from 'react'
import { FooterContainer, FooterLinks, FooterLogo, FooterLogoMobile, FooterContainerMobile } from '../Style/Footer'

const Footer = () => {
  return (
    <FooterContainerMobile>
      <FooterLogoMobile src='/images/logo.svg' alt='footer-logo' />
      <FooterContainer>
          <FooterLinks>New Disney +</FooterLinks>
          <FooterLinks>Terms of Us</FooterLinks>
          <FooterLogo src='/images/logo.svg' alt='footer-logo' />
          <FooterLinks>Privacy Policy</FooterLinks>
          <FooterLinks>Contact Us</FooterLinks>
      </FooterContainer>
    </FooterContainerMobile>
  )
}

export default Footer