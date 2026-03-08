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

type NavItem = 'hero' | 'buttons' | 'labels' | 'text' | 'table' | 'dropdown' | 'radio' | 'images' | 'cards';

/* ── Global ── */
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #0d0d14;
    color: #e2e8f0;
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    min-height: 100vh;
  }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #0d0d14; }
  ::-webkit-scrollbar-thumb { background: #7c3aed; border-radius: 3px; }
`;

/* ── Shell ── */
const AppShell = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 56px 1fr;
  min-height: 100vh;
`;

/* ── Top Nav ── */
const TopNav = styled.header`
  grid-column: 1 / -1;
  background: #13131f;
  border-bottom: 1px solid #1e1e30;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 800;
  font-size: 1.1rem;
  letter-spacing: -0.02em;
  color: #fff;
  span { color: #7c3aed; }
`;

const LogoIcon = styled.div`
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, #7c3aed, #06b6d4);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 900;
  color: #fff;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.8rem;
  color: #64748b;
`;

const StatusDot = styled.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  background: #22c55e;
  border-radius: 50%;
  margin-right: 0.3rem;
  box-shadow: 0 0 6px #22c55e;
`;

/* ── Sidebar ── */
const Sidebar = styled.aside`
  background: #13131f;
  border-right: 1px solid #1e1e30;
  padding: 1.5rem 0;
  overflow-y: auto;
`;

const SideSection = styled.div`
  margin-bottom: 1.5rem;
`;

const SideSectionTitle = styled.p`
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #334155;
  padding: 0 1.25rem;
  margin-bottom: 0.4rem;
`;

const NavBtn = styled.button<{ active?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.55rem 1.25rem;
  background: ${({ active }) => active ? 'rgba(124,58,237,0.15)' : 'transparent'};
  border: none;
  border-left: 3px solid ${({ active }) => active ? '#7c3aed' : 'transparent'};
  color: ${({ active }) => active ? '#a78bfa' : '#64748b'};
  font-size: 0.82rem;
  font-weight: ${({ active }) => active ? '600' : '400'};
  cursor: pointer;
  text-align: left;
  transition: all 0.15s;
  &:hover {
    background: rgba(124,58,237,0.08);
    color: #a78bfa;
    border-left-color: #7c3aed66;
  }
`;

const NavIcon = styled.span`
  font-size: 0.9rem;
  width: 16px;
  text-align: center;
`;

/* ── Main content ── */
const Main = styled.main`
  padding: 2rem 2.5rem;
  overflow-y: auto;
  max-height: calc(100vh - 56px);
`;

const PageTitle = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #1e1e30;
`;

const Breadcrumb = styled.p`
  font-size: 0.72rem;
  color: #334155;
  letter-spacing: 0.05em;
  margin-bottom: 0.4rem;
  text-transform: uppercase;
`;

const H1 = styled.h1`
  font-size: 1.6rem;
  font-weight: 800;
  color: #f1f5f9;
  letter-spacing: -0.02em;
`;

const GradientText = styled.span`
  background: linear-gradient(90deg, #7c3aed, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

/* ── Component section card ── */
const Section = styled.div`
  background: #13131f;
  border: 1px solid #1e1e30;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  overflow: hidden;
`;

const SectionHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #1e1e30;
`;

const SectionTitle = styled.h2`
  font-size: 0.85rem;
  font-weight: 700;
  color: #f1f5f9;
  letter-spacing: 0.03em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ComponentBadge = styled.span`
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: rgba(124,58,237,0.2);
  color: #a78bfa;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  border: 1px solid rgba(124,58,237,0.3);
`;

const SectionBody = styled.div`
  padding: 1.5rem;
`;

const SubLabel = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #334155;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  &::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 2px;
    background: #7c3aed;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: flex-start;
`;

const Divider = styled.div`
  height: 1px;
  background: #1e1e30;
  margin: 1.25rem 0;
`;

const StatsBar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const StatCard = styled.div`
  background: #13131f;
  border: 1px solid #1e1e30;
  border-radius: 10px;
  padding: 1.1rem 1.25rem;
`;

const StatValue = styled.div`
  font-size: 1.6rem;
  font-weight: 800;
  background: linear-gradient(90deg, #7c3aed, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 0.3rem;
`;

const StatLabel = styled.div`
  font-size: 0.72rem;
  color: #334155;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export default function App() {
  const [active, setActive] = useState<NavItem>('hero');
  const [server, setServer] = useState('na-east');

  const navItems: { id: NavItem; icon: string; label: string }[] = [
    { id: 'hero',     icon: '🖼',  label: 'Hero Image' },
    { id: 'buttons',  icon: '🎮',  label: 'Buttons' },
    { id: 'labels',   icon: '🏷',  label: 'Labels' },
    { id: 'text',     icon: '📝',  label: 'Text' },
    { id: 'table',    icon: '📊',  label: 'Table' },
    { id: 'dropdown', icon: '⬇️',  label: 'Dropdown' },
    { id: 'radio',    icon: '🔘',  label: 'Radio Button' },
    { id: 'images',   icon: '🖼️',  label: 'Images' },
    { id: 'cards',    icon: '🃏',  label: 'Cards' },
  ];

  return (
    <>
      <GlobalStyle />
      <AppShell>

        {/* Top Nav */}
        <TopNav>
          <Logo>
            <LogoIcon>N</LogoIcon>
            Nexus<span>UI</span>
          </Logo>
          <NavRight>
            <span><StatusDot />All systems online</span>
            <span>Arshpreet Singh · WEBD-3012</span>
          </NavRight>
        </TopNav>

        {/* Sidebar */}
        <Sidebar>
          <SideSection>
            <SideSectionTitle>Components</SideSectionTitle>
            {navItems.map(item => (
              <NavBtn
                key={item.id}
                active={active === item.id}
                onClick={() => setActive(item.id)}
              >
                <NavIcon>{item.icon}</NavIcon>
                {item.label}
              </NavBtn>
            ))}
          </SideSection>
          <SideSection>
            <SideSectionTitle>Info</SideSectionTitle>
            <NavBtn><NavIcon>📦</NavIcon>Assignment 12</NavBtn>
            <NavBtn><NavIcon>⚡</NavIcon>Storybook 8</NavBtn>
            <NavBtn><NavIcon>🧪</NavIcon>Jest + RTL</NavBtn>
          </SideSection>
        </Sidebar>

        {/* Main */}
        <Main>
          <PageTitle>
            <Breadcrumb>NexusUI › Component Library</Breadcrumb>
            <H1><GradientText>Gaming</GradientText> Component System</H1>
          </PageTitle>

          {/* Stats row */}
          <StatsBar>
            <StatCard><StatValue>9</StatValue><StatLabel>Components</StatLabel></StatCard>
            <StatCard><StatValue>27+</StatValue><StatLabel>Test Cases</StatLabel></StatCard>
            <StatCard><StatValue>100%</StatValue><StatLabel>TypeScript</StatLabel></StatCard>
            <StatCard><StatValue>v8</StatValue><StatLabel>Storybook</StatLabel></StatCard>
          </StatsBar>

          {/* ── Hero Image ── */}
          {active === 'hero' && (
            <Section>
              <SectionHead>
                <SectionTitle>🖼 Hero Image <ComponentBadge>HeroImage</ComponentBadge></SectionTitle>
              </SectionHead>
              <SectionBody>
                <SubLabel>Active state</SubLabel>
                <HeroImage
                  src="https://placehold.co/1200x380/0d0d14/7c3aed"
                  title="Season 5 — Battle Royale"
                  subtitle="Drop in. Gear up. Be the last one standing."
                  backgroundColor="#0d0d14"
                  color="#a78bfa"
                  height="340px"
                />
                <Divider />
                <SubLabel>Disabled state</SubLabel>
                <HeroImage
                  title="Event Ended"
                  subtitle="This limited-time event is no longer available."
                  height="180px"
                  disabled
                />
              </SectionBody>
            </Section>
          )}

          {/* ── Buttons ── */}
          {active === 'buttons' && (
            <Section>
              <SectionHead>
                <SectionTitle>🎮 Buttons <ComponentBadge>Button</ComponentBadge></SectionTitle>
              </SectionHead>
              <SectionBody>
                <SubLabel>Small / Medium / Large</SubLabel>
                <Row>
                  <Button label="Play Now"      backgroundColor="#7c3aed" color="#fff"     size="small"  />
                  <Button label="Join Match"     backgroundColor="#06b6d4" color="#0d0d14"  size="medium" />
                  <Button label="View Leaderboard" backgroundColor="#f59e0b" color="#0d0d14" size="large" />
                </Row>
                <Divider />
                <SubLabel>Outlined / Accent</SubLabel>
                <Row>
                  <Button label="Spectate"      backgroundColor="#1e1e30" color="#a78bfa"  size="medium" />
                  <Button label="Buy Skins"     backgroundColor="#dc2626" color="#fff"     size="medium" />
                  <Button label="Invite Friend" backgroundColor="#16a34a" color="#fff"     size="medium" />
                </Row>
                <Divider />
                <SubLabel>Disabled state</SubLabel>
                <Row>
                  <Button label="Server Full"  disabled size="medium" />
                  <Button label="Maintenance"  disabled size="large"  />
                </Row>
              </SectionBody>
            </Section>
          )}

          {/* ── Labels ── */}
          {active === 'labels' && (
            <Section>
              <SectionHead>
                <SectionTitle>🏷 Labels <ComponentBadge>Label</ComponentBadge></SectionTitle>
              </SectionHead>
              <SectionBody>
                <SubLabel>Active state</SubLabel>
                <Row>
                  <Label text="LIVE"        backgroundColor="#dc2626" color="#fff"    />
                  <Label text="NEW PATCH"   backgroundColor="#7c3aed" color="#fff"    />
                  <Label text="HOT"         backgroundColor="#f59e0b" color="#0d0d14" />
                  <Label text="PRO"         backgroundColor="#06b6d4" color="#0d0d14" />
                  <Label text="FREE"        backgroundColor="#16a34a" color="#fff"    />
                  <Label text="BETA"        backgroundColor="#1e1e30" color="#a78bfa" />
                </Row>
                <Divider />
                <SubLabel>Disabled state</SubLabel>
                <Row>
                  <Label text="OFFLINE" disabled />
                  <Label text="UNAVAILABLE" disabled />
                </Row>
              </SectionBody>
            </Section>
          )}

          {/* ── Text ── */}
          {active === 'text' && (
            <Section>
              <SectionHead>
                <SectionTitle>📝 Text <ComponentBadge>Text</ComponentBadge></SectionTitle>
              </SectionHead>
              <SectionBody>
                <SubLabel>Heading</SubLabel>
                <Text as="h2" content="Welcome to NexusUI Season 5" fontWeight="700" fontSize="1.5rem" color="#f1f5f9" />
                <Divider />
                <SubLabel>Body</SubLabel>
                <Text content="Dominate the arena with the latest roster of heroes. Season 5 brings 3 new maps, a revamped ranking system, and weekly challenges with exclusive cosmetic rewards." color="#94a3b8" />
                <Divider />
                <SubLabel>Highlighted</SubLabel>
                <Text content="⚠ Ranked matches are only available to players who have completed 10 placement games." backgroundColor="#1e1e30" color="#f59e0b" />
                <Divider />
                <SubLabel>Disabled state</SubLabel>
                <Text content="This game mode is currently under maintenance. Please check back later." disabled />
              </SectionBody>
            </Section>
          )}

          {/* ── Table ── */}
          {active === 'table' && (
            <Section>
              <SectionHead>
                <SectionTitle>📊 Table <ComponentBadge>Table</ComponentBadge></SectionTitle>
              </SectionHead>
              <SectionBody>
                <SubLabel>Active — Leaderboard</SubLabel>
                <Table backgroundColor="#0d0d14" color="#e2e8f0">
                  <TableHeader backgroundColor="#1a0a3a" color="#a78bfa">
                    <TableRow>
                      <TableCell isHeader>Rank</TableCell>
                      <TableCell isHeader>Player</TableCell>
                      <TableCell isHeader>Wins</TableCell>
                      <TableCell isHeader>K/D Ratio</TableCell>
                      <TableCell isHeader>Status</TableCell>
                    </TableRow>
                  </TableHeader>
                  <tbody>
                    <TableRow>
                      <TableCell>#1</TableCell><TableCell>ShadowX99</TableCell>
                      <TableCell>342</TableCell><TableCell>4.8</TableCell><TableCell>🟢 Online</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>#2</TableCell><TableCell>NightBlaze</TableCell>
                      <TableCell>289</TableCell><TableCell>3.9</TableCell><TableCell>🟢 In Match</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>#3</TableCell><TableCell>VoidRunner</TableCell>
                      <TableCell>251</TableCell><TableCell>3.5</TableCell><TableCell>🔴 Offline</TableCell>
                    </TableRow>
                  </tbody>
                  <TableFooter backgroundColor="#0d0d14" color="#7c3aed">
                    <TableRow>
                      <TableCell>Top 3</TableCell><TableCell>All Regions</TableCell>
                      <TableCell>882 total</TableCell><TableCell>Avg: 4.1</TableCell><TableCell>—</TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
                <Divider />
                <SubLabel>Disabled state</SubLabel>
                <Table disabled>
                  <TableHeader disabled>
                    <TableRow disabled>
                      <TableCell isHeader disabled>Rank</TableCell>
                      <TableCell isHeader disabled>Player</TableCell>
                      <TableCell isHeader disabled>Status</TableCell>
                    </TableRow>
                  </TableHeader>
                  <tbody>
                    <TableRow disabled>
                      <TableCell disabled>—</TableCell>
                      <TableCell disabled>Data unavailable</TableCell>
                      <TableCell disabled>⚫ N/A</TableCell>
                    </TableRow>
                  </tbody>
                  <TableFooter disabled>
                    <TableRow disabled>
                      <TableCell disabled>Leaderboard offline</TableCell>
                      <TableCell disabled>—</TableCell>
                      <TableCell disabled>—</TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </SectionBody>
            </Section>
          )}

          {/* ── Dropdown ── */}
          {active === 'dropdown' && (
            <Section>
              <SectionHead>
                <SectionTitle>⬇️ Dropdown <ComponentBadge>Dropdown</ComponentBadge></SectionTitle>
              </SectionHead>
              <SectionBody>
                <SubLabel>Active state</SubLabel>
                <Row>
                  <Dropdown
                    placeholder="Select region"
                    options={[
                      { value: 'na-east',  label: 'NA East' },
                      { value: 'na-west',  label: 'NA West' },
                      { value: 'eu',       label: 'Europe' },
                      { value: 'asia',     label: 'Asia Pacific' },
                    ]}
                  />
                  <Dropdown
                    placeholder="Select game mode"
                    options={[
                      { value: 'solo',   label: 'Solo' },
                      { value: 'duo',    label: 'Duo' },
                      { value: 'squad',  label: 'Squad (4v4)' },
                      { value: 'ranked', label: 'Ranked' },
                    ]}
                  />
                </Row>
                <Divider />
                <SubLabel>Disabled state</SubLabel>
                <Dropdown placeholder="No servers available" disabled options={[{ value: 'x', label: 'N/A' }]} />
              </SectionBody>
            </Section>
          )}

          {/* ── Radio ── */}
          {active === 'radio' && (
            <Section>
              <SectionHead>
                <SectionTitle>🔘 Radio Button <ComponentBadge>RadioButton</ComponentBadge></SectionTitle>
              </SectionHead>
              <SectionBody>
                <SubLabel>Select server region</SubLabel>
                <Row>
                  <RadioButton label="NA East"     name="server" value="na-east"  checked={server === 'na-east'}  onSelect={setServer} />
                  <RadioButton label="NA West"     name="server" value="na-west"  checked={server === 'na-west'}  onSelect={setServer} />
                  <RadioButton label="Europe"      name="server" value="eu"       checked={server === 'eu'}       onSelect={setServer} />
                  <RadioButton label="Asia Pacific" name="server" value="asia"    checked={server === 'asia'}     onSelect={setServer} />
                </Row>
                <Divider />
                <SubLabel>Disabled state</SubLabel>
                <Row>
                  <RadioButton label="South America (Coming Soon)" name="server" value="sa" disabled />
                </Row>
              </SectionBody>
            </Section>
          )}

          {/* ── Images ── */}
          {active === 'images' && (
            <Section>
              <SectionHead>
                <SectionTitle>🖼️ Images <ComponentBadge>Img</ComponentBadge></SectionTitle>
              </SectionHead>
              <SectionBody>
                <SubLabel>Active state</SubLabel>
                <Row>
                  <Img src="https://placehold.co/300x200/1a0a3a/7c3aed" alt="Hero character" width="300px" height="200px" />
                  <Img src="https://placehold.co/300x200/06b6d4/0d0d14" alt="Game map"       width="300px" height="200px" />
                  <Img src="https://placehold.co/300x200/f59e0b/0d0d14" alt="Weapon skin"    width="300px" height="200px" />
                </Row>
                <Divider />
                <SubLabel>Disabled state</SubLabel>
                <Row>
                  <Img src="https://placehold.co/300x200/555/888" alt="Locked content" width="300px" height="200px" disabled />
                </Row>
              </SectionBody>
            </Section>
          )}

          {/* ── Cards ── */}
          {active === 'cards' && (
            <Section>
              <SectionHead>
                <SectionTitle>🃏 Cards <ComponentBadge>Card</ComponentBadge></SectionTitle>
              </SectionHead>
              <SectionBody>
                <SubLabel>Active state</SubLabel>
                <Row>
                  <Card
                    title="Shadow Reaper"
                    description="Legendary assassin with invisibility and burst damage. Dominate solo matches."
                    imageSrc="https://placehold.co/320x170/1a0a3a/7c3aed"
                    backgroundColor="#13131f"
                    color="#e2e8f0"
                    footerText="Assassin · S-Tier · Unlocked"
                  />
                  <Card
                    title="Storm Bringer"
                    description="Area control mage. Devastating in squad wipes with chain lightning abilities."
                    imageSrc="https://placehold.co/320x170/06b6d4/0d0d14"
                    backgroundColor="#13131f"
                    color="#e2e8f0"
                    footerText="Mage · A-Tier · Unlocked"
                  />
                  <Card
                    title="Iron Shield"
                    description="Tank bruiser. Nearly unkillable in close range. Perfect for objective control."
                    imageSrc="https://placehold.co/320x170/f59e0b/0d0d14"
                    backgroundColor="#13131f"
                    color="#e2e8f0"
                    footerText="Tank · A-Tier · Unlocked"
                  />
                </Row>
                <Divider />
                <SubLabel>Disabled / locked state</SubLabel>
                <Row>
                  <Card
                    title="Void Walker"
                    description="Unreleased hero. Coming in Season 6 with a new game-changing ability set."
                    imageSrc="https://placehold.co/320x170/222/444"
                    backgroundColor="#13131f"
                    color="#e2e8f0"
                    footerText="??? · Locked · Season 6"
                    disabled
                  />
                </Row>
              </SectionBody>
            </Section>
          )}

        </Main>
      </AppShell>
    </>
  );
}
