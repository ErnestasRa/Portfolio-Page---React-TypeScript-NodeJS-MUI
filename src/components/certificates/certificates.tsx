import * as React from 'react';
import {
    Box,
} from '@mui/material';
import CertificatesBox from './certificates-box';
import CodeAcademyLogo from '../../images/codeacademy.jpg';
import FreeCodeCampLogo from '../../images/responsivewebdesign.jpg';

const CertificatesComponent:React.FC = () => (
  <Box sx={{
    display: 'flex',
    gap: 3,
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    mt: '2vh',
     }}
  >
    <CertificatesBox
      title="Code Academy"
      description="Full-stack React with Typescript course 1060 hours course. "
      image={CodeAcademyLogo}
    />
    <CertificatesBox
      title="Responsive Web Design"
      description="FreeCodeCamp.org - Responsive Web Design course. "
      image={FreeCodeCampLogo}
    />

  </Box>
  );

export default CertificatesComponent;
