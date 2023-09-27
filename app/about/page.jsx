"use client"

import styled from 'styled-components';
import Skills from "./Skills"
import Marquee from "./Marquee"
import Stacks from "./Stacks"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const Heading = styled.h2`
  font-family: var(--chakra-fonts-heading);
  font-weight: 700;
  font-size: 46px;
  line-height: 55px;

  @media screen and (min-width: 30em) {
    font-size: 40px;
    line-height: 35px;
  }

  @media screen and (min-width: 48em) {
    font-size: 68px;
    line-height: 70px;
  }

  @media screen and (min-width: 62em) {
    font-size: 90px;
    line-height: 85px;
  }

  @media screen and (min-width: 80em) {
    font-size: 127px;
    line-height: 120px;
  }

  @media screen and (min-width: 96em) {
    font-size: 170px;
    line-height: 150px;
  }
`;

export const Stack = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 20px;
  transform: translateY(50%);
  margin-top: 19px;

  > *:not(style) ~ *:not(style) {
    margin-top: 0;
    margin-inline-end: 0;
    margin-bottom: 0;
    margin-inline-start: 0;
  }

  @media screen and (min-width: 30em) {
    > *:not(style) ~ *:not(style) {
      margin-inline-start: 0;
    }
  }

  @media screen and (min-width: 48em) {
    display: flex;
    font-size: 14px;
    margin-top: 14px;
  }

  @media screen and (min-width: 62em) {
    font-size: 20px;
    margin-top: 19px;
  }

  @media screen and (min-width: 80em) {
    font-size: 24px;
    margin-top: 19px;
  }

  @media screen and (min-width: 96em) {
    font-size: 24px;
    margin-top: 19px;
  }
`;

export const ContactInfo = styled.div`
  text-align: ${props => props.align};

  a {
    text-decoration: none;
  }
`;

export const Footer = styled.div`
  display: block;
  margin-top: 16px;
  width: 100%;

  @media screen and (min-width: 30em) {
    display: block;
  }

  @media screen and (min-width: 48em) {
    display: none;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const FooterText = styled.p`
  font-size: 14px;
`;


const Page = () => {
  return (
    <>
    <Container className=''>
      <Heading>HELLO WORLD <br/> I AM<br/> ADENUGA <br/> IBRAHEEM</Heading>

      <Stack>
        <ContactInfo align="left">
          <a href="/#">+234 811 303 1188</a>
          <p>Lil-Adonis™</p>
        </ContactInfo>

        <ContactInfo align="center">
          <p>available for projects</p>
          <p>based in lagos, nigeria</p>
        </ContactInfo>

        <ContactInfo align="right">
          <a href="/#">+234 701 914 7965</a>
          <p>©2023</p>
        </ContactInfo>
      </Stack>

      <Footer>
        <FooterContent>
          <FooterText>+234 811 303 1188</FooterText>
          <FooterText>+234 701 914 7965</FooterText>
        </FooterContent>
        <FooterText>Available for projects</FooterText>
        <FooterContent>
          <FooterText>dråQ™</FooterText>
          <FooterText>Based in lagos, Nigeria</FooterText>
          <FooterText>©2022</FooterText>
        </FooterContent>
      </Footer>

   
    </Container>
    
    
    <Skills/>
    <Marquee/>
    <Stacks/>

    </>
    
    
  );
}

export default Page;
