import styled from 'styled-components';

const Container = styled.div`

  flex-basis: 60%;

  @media screen and (min-width: 80em) {
    display: block;
  }
`;

const Heading = styled.h2`
  font-family: var(--chakra-fonts-heading);
  font-weight: 400;
  font-size: 30px;
  line-height: 30px;
  color: black;

  @media screen and (min-width: 30em) {
    font-size: 25px;
  }

  @media screen and (min-width: 48em) {
    font-size: 30px;
    line-height: 34px;
  }

  @media screen and (min-width: 62em) {
    font-size: 40px;
    line-height: 40px;
  }

  @media screen and (min-width: 80em) {
    font-size: 65px;
    line-height: 65px;
  }

  @media screen and (min-width: 96em) {
    font-size: 70px;
    line-height: 70px;
  }
`;

const AdditionalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 54px;

  @media screen and (min-width: 48em) {
    flex-direction: row;
  }
`;

const AdditionalInfoColumn = styled.div`
  font-size: 14px;
  line-height: 20px;
  
  transform: translateY(-100px) translateZ(0);
  color: black;

  @media screen and (min-width: 30em) {
    padding-top: 20px;
  }

  @media screen and (min-width: 48em) {
    padding-top: 80px;
  }
`;

const Abt = () => {
  return (
    <Container>
      <Heading>I</Heading>
      <Heading>create</Heading>
      <Heading>visually</Heading>
      <Heading>enthralling</Heading>
      <Heading>web</Heading>
      <Heading>interfaces</Heading>
      <AdditionalInfoWrapper>
        <AdditionalInfoColumn>
          Abdullah Abdulfatah is a UI Engineer and Frontend Developer from Lagos, Nigeria. With 2 years of experience in the field, developing and creating products on the web. Over the course of my experience, I have been able to work, intern, and learn at companies like CreatorH and Mbox.
        </AdditionalInfoColumn>
        <AdditionalInfoColumn>
          I have also worked as an Instructor for a Non-Profit United Kingdom Organization (UK Nigeria TechHub) teaching JavaScript to people with non-technical backgrounds.
        </AdditionalInfoColumn>
        <AdditionalInfoColumn>
          I am a big lover of art and anime, and this reflects in how I pay attention to detail in creating visually enthralling web interfaces. With a critical depth of reason, I am able to write logic that not only works but addresses usability, scalability, and comprehension.
        </AdditionalInfoColumn>
        <AdditionalInfoColumn>
          I am passionate about learning new tech and working on projects that move society forward. I am great at communicating my thoughts and fun to be around.
        </AdditionalInfoColumn>
      </AdditionalInfoWrapper>
    </Container>
  );
};

export default Abt;
