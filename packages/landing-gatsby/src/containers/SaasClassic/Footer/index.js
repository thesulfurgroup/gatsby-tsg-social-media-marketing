import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Logo from 'reusecore/src/elements/UI/Logo';
import Container from 'common/src/components/UI/Container';
import FooterWrapper, { List, ListItem } from './footer.style';

import LogoImage from 'common/src/assets/image/saasClassic/tsg-logo.svg';

const Footer = ({
  row,
  col,
  colOne,
  colTwo,
  titleStyle,
  logoStyle,
  textStyle,
  linkStyle
}) => {
  const Data = useStaticQuery(graphql`
    query {
      saasClassicJson {
        FOOTER_WIDGET {
          title
          menuItems {
            text
            url
          }
        }
      }
    }
  `);

  return (
    <FooterWrapper>
      <Container className="footer_container">
        <Box className="row" {...row}>
          <Box {...colOne}>
            <Logo
              logoSrc={LogoImage}
              title="Hosting"
              logoStyle={logoStyle}
            />
            <p>
              <span style={linkStyle}>
                824 Wilshire Blvd<br />
                Los Angeles, CA 90017
              </span>
            </p>
            <p>
              <a href="mailto:hello@thesulfurgroup.com" style={linkStyle} title="Email us at Hello@TheSulfurGroup.com">Hello@TheSulfurGroup.com</a><br />
            </p>
            <p>
              <a href="tel:+12135452744" style={linkStyle} title="Call us at +1 (213) 545-2744">+1 (213) 545-2744</a>
            </p>
          </Box>
          {/* End of footer logo column */}
          <Box {...colTwo}>
            {Data.saasClassicJson.FOOTER_WIDGET.map((widget, index) => (
              <Box className="col" {...col} key={`footer-widget-${index}`}>
                <Heading content={widget.title} {...titleStyle} />
                <List>
                  {widget.menuItems.map((item, index) => (
                    <ListItem key={`footer-list-item-${index}`}>
                      <a href={item.url} className="ListItem">
                        {item.text}
                      </a>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
          {/* End of footer List column */}
        </Box>
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  linkStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    mt: '0'
  },
  // Footer col one style
  colOne: {
    width: [1, '35%', '35%', '23%'],
    mt: [0],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0],
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '65%', '65%', '77%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '50%', '25%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
  // widget title default style
  titleStyle: {
    color: '#343d48',
    fontSize: '16px',
    fontWeight: '700',
    mb: '30px',
  },
  // Default logo size
  logoStyle: {
    width: '150px',
    mb: '15px',
    mt: '0'
  },
  // widget text default style
  textStyle: {
    color: '#0f2137',
    fontSize: '16px',
    mb: '10px',
  },
  linkStyle: {
    color: '#666',
    fontSize: '14px'
  }
};

export default Footer;
