import * as React from 'react';
import {
  Container,
  Box,
} from '@mui/material';
import PictureBox from 'components/profile-picture/picture-box';
import AboutMe from 'components/about-me/about-me';
import ContactMeInputs from 'components/contact-me/contact-me-inputs';
import StickyFooter from 'components/footer/footer';
import SeparatorComponent from 'components/separator';
import SwiperComponent from 'components/swiper';
import SectionComponent from 'components/skills/my-skills';
import {
  skillJS,
  skillReact,
  skillNode,
  skillMongo,
  skillCSharp,
  skillTS,
  } from 'modules/skills';
import AppsIveBuiltSection from 'components/my-apps/apps-ive-build-section';
import CertificatesComponent from 'components/certificates/certificates';
import ResponsiveAppBar from '../components/app-bar/app-bar';

const MainPage: React.FC = () => (
  <Container>
    <ResponsiveAppBar />
    <Box sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignContent: 'center',
      justifyContent: 'space-evenly',
      alignItems: { xs: 'center', md: 'center' },
      mt: '3vh',
      bgcolor: '#202020',
      fontFamily: 'MyFont',
      height: '50vh',
      width: '100%',
    }}
    >
      <PictureBox />
      <AboutMe />
    </Box>
    <SeparatorComponent />
    <Box sx={{ mt: '2vh', bgcolor: '#202020' }}>
      <SectionComponent
        title="Skills"
        description="Here are some of my skills:"
      />
      <SwiperComponent
        skillJS={skillJS}
        skillReact={skillReact}
        skillNode={skillNode}
        skillMongo={skillMongo}
        skillCSharp={skillCSharp}
        skillTS={skillTS}
      />
    </Box>
    <SeparatorComponent />
    <Box sx={{
    mt: '2vh',
    display: 'flex',
    flexDirection: 'column',
    bgcolor: '#202020',
   }}
    >
      <SectionComponent
        title="My projects"
        description="Here are some of my projects:"
      />
      <AppsIveBuiltSection />
      <SeparatorComponent />
      <SectionComponent
        title="My Certificates"
        description="Some of my certificates:"
      />
      <CertificatesComponent />
      <SeparatorComponent />
      <SectionComponent
        title="Contact me"
        description="Contact me here:"
      />
      <ContactMeInputs />
    </Box>
    <StickyFooter />
  </Container>
);
export default MainPage;
