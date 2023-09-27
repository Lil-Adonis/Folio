// components/ToolList.js
import styled from 'styled-components';

const Container = styled.div`
background:black;
`;

const Heading = styled.h2`
  font-family: var(--chakra-fonts-heading);
  font-weight: var(--chakra-fontWeights-bold);
  font-size: 40px;
  line-height: 40px;

  @media screen and (min-width: 30em) {
    font-size: 35px;
  }

  @media screen and (min-width: 48em) {
    font-size: 35px;
    line-height: 35px;
  }

  @media screen and (min-width: 62em) {
    font-size: 40px;
    line-height: 40px;
  }

  @media screen and (min-width: 80em) {
    font-size: 70px;
    line-height: 65px;
  }

  @media screen and (min-width: 96em) {
    font-size: 70px;
    line-height: 70px;
  }
`;

const ToolGrid = styled.div`
  display: grid;
  grid-gap: var(--chakra-space-10);
  grid-template-columns: repeat(1, 1fr);
  font-size: 14px;
  width: 100%;
  align-items: flex-start;

  @media screen and (min-width: 30em) {
    grid-gap: 20px;
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: 48em) {
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 62em) {
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 80em) {
    grid-gap: var(--chakra-space-6);
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 96em) {
    grid-gap: var(--chakra-space-6);
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ToolItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 115px;

  @media screen and (min-width: 80em) {
    justify-content: unset;
    height: 135px;
  }

  @media screen and (min-width: 96em) {
    justify-content: unset;
    height: 145px;
  }
`;

const ToolImage = styled.img`
  height: 120px;

  @media screen and (min-width: 48em) {
    height: unset;
  }
`;

const ToolNumber = styled.p`
  font-size: 14px;
  margin-top: 16px;
`;

const ToolName = styled.p`
  font-size: 14px;
`;

const Stacks = () => {
  return (
    <Container className='bg-black'>
      <Heading>Tools I Work With</Heading>
      <ToolGrid>
        <ToolItem>
          <ToolImage
            alt="Next.js Logo"
            src="https://i.ibb.co/jwstpNW/Page-1l.png"
          />
        </ToolItem>
        <ToolNumber>001</ToolNumber>
        <ToolName>Next.js</ToolName>
      </ToolGrid>
      <ToolGrid>
        <ToolItem>
          <ToolImage
            alt="React.js Logo"
            src="https://i.ibb.co/YjF2BW5/Group-22l.png"
          />
        </ToolItem>
        <ToolNumber>002</ToolNumber>
        <ToolName>React.js</ToolName>
      </ToolGrid>
      <ToolGrid>
        <ToolItem>
          <ToolImage
            alt="Framer Motion Logo"
            src="https://i.ibb.co/ChZ5KBr/Groupl.png"
          />
        </ToolItem>
        <ToolNumber>003</ToolNumber>
        <ToolName>Framer</ToolName>
      </ToolGrid>
      <ToolGrid>
        <ToolItem>
          <ToolImage
            alt="Chakra UI Logo"
            src="https://i.ibb.co/8Md6HBK/logol.png"
          />
        </ToolItem>
        <ToolNumber>004</ToolNumber>
        <ToolName>Chakra UI</ToolName>
      </ToolGrid>
    </Container>
  );
};

export default Stacks;
