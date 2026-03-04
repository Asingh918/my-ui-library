import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Button from './components/Button';
import Label from './components/Label';
import Text from './components/Text';
import { Table, TableHeader, TableRow, TableCell, TableFooter } from './components/Table';
import Dropdown from './components/Dropdown';
import RadioButton from './components/RadioButton';
import Img from './components/Img';
import HeroImage from './components/HeroImage';
import Card from './components/Card';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:wght@400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; background-color: #0a0a0a; color: #f0ebe0; }
`;

const Page = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 3rem 2rem 6rem;
  font-family: 'DM Mono', monospace;
  background-color: #0a0a0a;
`;

const HeaderBlock = styled.div`
  border-left: 4px solid #ff6b35;
  padding-left: 1.25rem;
  margin-bottom: 4rem;
`;

const PageTitle = styled.h1`
  font-family: 'Syne', sans-serif;
  font-size: 2.6rem;
  font-weight: 800;
  color: #f0ebe0;
  margin: 0 0 0.3rem;
  letter-spacing: -0.02em;
  text-transform: uppercase;
`;

const PageSub = styled.p`
  color: #ff6b35;
  margin: 0;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-family: 'DM Mono', monospace;
`;

const Section = styled.section`
  margin-bottom: 4.5rem;
`;

const STitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.75rem;
`;

const STag = styled.span`
  font-family: 'DM Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #0a0a0a;
  background-color: #ff6b35;
  padding: 0.15rem 0.5rem;
  font-weight: 500;
`;

const STitle = styled.h2`
  font-family: 'Syne', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #f0ebe0;
  margin: 0;
  letter-spacing: -0.01em;
  text-transform: uppercase;
`;

const STitleLine = styled.div`
  flex: 1;
  height: 1px;
  background: #2a2a2a;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-start;
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(to right, #ff6b35 20px, #2a2a2a 20px);
  margin: 1.5rem 0;
`;

const DisabledNote = styled.p`
  color: #555;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0 0 0.75rem;
`;

export default function App() {
  const [radio, setRadio] = useState('opt1');

  return (
    <>
      <GlobalStyle />
      <Page>
        <HeaderBlock>
          <PageSub>React · TypeScript · Vite · Styled-Components · Storybook</PageSub>
          <PageTitle>UI Component Garden</PageTitle>
        </HeaderBlock>

        <Section>
          <STitleRow><STag>01</STag><STitle>Hero Image</STitle><STitleLine /></STitleRow>
          <HeroImage src="https://placehold.co/1200x420/ff6b35/0a0a0a" title="Welcome to UI Garden" subtitle="Run npm run storybook for interactive controls" />
          <Divider />
          <HeroImage title="Disabled Hero" subtitle="Greyed out and non-interactive" disabled />
        </Section>

        <Section>
          <STitleRow><STag>02</STag><STitle>Button</STitle><STitleLine /></STitleRow>
          <Row>
            <Button label="Primary" backgroundColor="#ff6b35" />
            <Button label="Success" backgroundColor="#00d4aa" />
            <Button label="Small" size="small" backgroundColor="#f0ebe0" color="#0a0a0a" />
            <Button label="Large" size="large" backgroundColor="#ff6b35" />
            <Button label="Disabled" disabled />
          </Row>
        </Section>

        <Section>
          <STitleRow><STag>03</STag><STitle>Label</STitle><STitleLine /></STitleRow>
          <Row>
            <Label text="Default Label" />
            <Label text="Styled Label" backgroundColor="#ff6b35" color="#0a0a0a" />
            <Label text="Teal Label" backgroundColor="#00d4aa" color="#0a0a0a" />
            <Label text="Disabled Label" disabled />
          </Row>
        </Section>

        <Section>
          <STitleRow><STag>04</STag><STitle>Text</STitle><STitleLine /></STitleRow>
          <Text content="This is a default paragraph text component." />
          <br />
          <Text as="h3" content="Heading variant (h3)" fontWeight="700" fontSize="1.4rem" />
          <br />
          <Text content="This text is disabled — greyed out." disabled />
        </Section>

        <Section>
          <STitleRow><STag>05</STag><STitle>Table</STitle><STitleLine /></STitleRow>
          <Table>
            <TableHeader>
              <TableRow><TableCell isHeader>Name</TableCell><TableCell isHeader>Role</TableCell><TableCell isHeader>Status</TableCell></TableRow>
            </TableHeader>
            <tbody>
              <TableRow><TableCell>Alice Johnson</TableCell><TableCell>Developer</TableCell><TableCell>Active</TableCell></TableRow>
              <TableRow><TableCell>Bob Smith</TableCell><TableCell>Designer</TableCell><TableCell>Active</TableCell></TableRow>
            </tbody>
            <TableFooter>
              <TableRow><TableCell isHeader>Total</TableCell><TableCell>2 members</TableCell><TableCell>All active</TableCell></TableRow>
            </TableFooter>
          </Table>
          <Divider />
          <DisabledNote>// Disabled state</DisabledNote>
          <Table disabled>
            <TableHeader disabled><TableRow disabled><TableCell isHeader disabled>Name</TableCell><TableCell isHeader disabled>Role</TableCell></TableRow></TableHeader>
            <tbody><TableRow disabled><TableCell disabled>Alice</TableCell><TableCell disabled>Developer</TableCell></TableRow></tbody>
            <TableFooter disabled><TableRow disabled><TableCell disabled>Total</TableCell><TableCell disabled>1</TableCell></TableRow></TableFooter>
          </Table>
        </Section>

        <Section>
          <STitleRow><STag>06</STag><STitle>Dropdown</STitle><STitleLine /></STitleRow>
          <Row>
            <Dropdown placeholder="Choose a framework" options={[{value:'react',label:'React'},{value:'vue',label:'Vue'},{value:'angular',label:'Angular'}]} />
            <Dropdown placeholder="Disabled dropdown" disabled options={[{value:'a',label:'A'}]} />
          </Row>
        </Section>

        <Section>
          <STitleRow><STag>07</STag><STitle>Radio Button</STitle><STitleLine /></STitleRow>
          <Row>
            <RadioButton label="Option 1" name="demo" value="opt1" checked={radio==='opt1'} onSelect={setRadio} />
            <RadioButton label="Option 2" name="demo" value="opt2" checked={radio==='opt2'} onSelect={setRadio} />
            <RadioButton label="Option 3" name="demo" value="opt3" checked={radio==='opt3'} onSelect={setRadio} />
            <RadioButton label="Disabled" name="demo" value="opt4" disabled />
          </Row>
        </Section>

        <Section>
          <STitleRow><STag>08</STag><STitle>Img</STitle><STitleLine /></STitleRow>
          <Row>
            <Img src="https://placehold.co/300x200/ff6b35/0a0a0a" alt="Active image" width="300px" height="200px" />
            <Img src="https://placehold.co/300x200" alt="Disabled image" width="300px" height="200px" disabled />
          </Row>
        </Section>

        <Section>
          <STitleRow><STag>09</STag><STitle>Card</STitle><STitleLine /></STitleRow>
          <Row>
            <Card title="React Library" description="Build reusable components with React & TypeScript." imageSrc="https://placehold.co/340x180/ff6b35/0a0a0a" footerText="Engineering · Jan 2025" />
            <Card title="Storybook Docs" description="Document your components with interactive stories." imageSrc="https://placehold.co/340x180/00d4aa/0a0a0a" footerText="Design Ops · Feb 2025" />
            <Card title="Disabled Card" description="This card is disabled and greyed out." imageSrc="https://placehold.co/340x180" footerText="Unavailable" disabled />
          </Row>
        </Section>
      </Page>
    </>
  );
}
