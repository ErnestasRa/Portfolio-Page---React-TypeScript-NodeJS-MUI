/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Link,
} from '@mui/material';
import pages from './app-bar-settings';

const ResponsiveAppBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: '#202020' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <EmojiPeopleIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'MyFont',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Portfolio

          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, i) => (
                <Link
                  href={page.to}
                  key={i}
                  sx={{
                  textDecoration: 'none',
                  textAlign: 'center',
                  color: '#DEDEDE',
                  fontSize: '15px',
}}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="left" sx={{ fontFamily: 'MyFont', color: 'gray' }}>{page.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <EmojiPeopleIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'MyFont',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Portfolio
          </Typography>
          <Box sx={{
            flexGrow: 1,
            display: {
            xs: 'none',
            md: 'flex',
            justifyContent: 'right',
            textDecoration: 'none',
            color: '#DEDEDE',
            fontSize: '15px',
},
}}
          >
            {pages.map((page, i) => (
              <Link
                href={page.to}
                key={i}
                sx={{
                textDecoration: 'none',
                fontFamily: 'MyFont',
                fontWeight: 600,
}}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    textDecoration: 'none',
                    color: '#E2F516',
                    fontSize: '15px',
                    fontWeight: 500,
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
