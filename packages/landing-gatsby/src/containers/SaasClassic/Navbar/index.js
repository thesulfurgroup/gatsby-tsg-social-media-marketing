import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import NavbarWrapper from 'reusecore/src/elements/Navbar';
import Drawer from 'reusecore/src/elements/Drawer';
import Button from 'reusecore/src/elements/Button';
import Logo from 'reusecore/src/elements/UI/Logo';
import Box from 'reusecore/src/elements/Box';
import HamburgMenu from 'common/src/components/HamburgMenu';
import Container from 'common/src/components/UI/Container';
import { DrawerContext } from 'common/src/contexts/DrawerContext';
import ScrollSpyMenu from 'common/src/components/ScrollSpyMenu';

import AnchorLink from 'react-anchor-link-smooth-scroll';

import LogoImage from 'common/src/assets/image/saasClassic/tsg-logo--dark.svg';
import LogoImageAlt from 'common/src/assets/image/saasClassic/tsg-logo.svg';

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
  const Data = useStaticQuery(graphql`
    query {
      saasClassicJson {
        MENU_ITEMS {
          label
          path
          offset
        }
      }
    }
  `);

  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <NavbarWrapper {...navbarStyle} className="saas_navbar">
      <Container>
        <Box {...row}>
          <Logo
            href="/"
            logoSrc={LogoImage}
            title="Portfolio"
            logoStyle={logoStyle}
            className="main-logo"
          />
          <Logo
            href="/"
            logoSrc={LogoImageAlt}
            title="Portfolio"
            logoStyle={logoStyle}
            className="logo-alt"
          />
          <Box {...menuWrapper}>
            <ScrollSpyMenu
              className="main_menu"
              menuItems={Data.saasClassicJson.MENU_ITEMS}
              offset={-70}
            />
            <a className="navbar_button">
            <AnchorLink href="#newsletter_section" offset="0">
              <Button {...button} title="GET STARTED" />
            </AnchorLink>
            </a>
            
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#fff" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={Data.saasClassicJson.MENU_ITEMS}
                drawerClose={true}
                offset={-100}
              />
              <AnchorLink className="navbar_drawer_button" href="#newsletter_section" offset="0">
                <Button {...button} title="GET STARTED" />
              </AnchorLink>
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logoStyle: {
    maxWidth: ['200px'],
    width: ['200px'],
  },
  button: {
    type: 'button',
    fontSize: '13px',
    fontWeight: '700',
    borderRadius: '4px',
    pl: '15px',
    pr: '15px',
    colors: 'secondaryWithBg',
    minHeight: 'auto',
    height: '40px',
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
  },
};

export default Navbar;
