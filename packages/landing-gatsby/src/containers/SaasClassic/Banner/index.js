import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import Fade from 'react-reveal/Fade';
import { openModal, closeModal } from '@redq/reuse-modal';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';
import TiltShape from '../TiltShape';
import {
  BannerWrapper,
  DiscountWrapper,
  DiscountLabel,
  VideoModal,
  PlayButton,
  VideoWrapper,
} from './banner.style';
import BannerImage from 'common/src/assets/image/saasClassic/video-placeholder.png';
import { ic_play_circle_filled } from 'react-icons-kit/md/ic_play_circle_filled';
import { play } from 'react-icons-kit/entypo/play';

// close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const ModalContent = () => (
  <VideoWrapper>
    <iframe
      title="Video"
      src="https://www.youtube.com/embed/8ME-QAlW6Ww"
      frameBorder="0"
    />
  </VideoWrapper>
);

const BannerSection = ({
  row,
  contentWrapper,
  discountAmount,
  discountText,
  title,
  description,
  videoModalText,
  videoModalTitle,
  imageWrapper,
  buttonWrapper,
  button,
  fillButton,
}) => {
  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: 'video-modal',
        disableDragging: true,
        width: '100%',
        height: '100%',
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  return (
    <BannerWrapper id="banner_section">
      <TiltShape className="banner-shape" />
      <Container>
        <Box {...row}>
          <Box {...contentWrapper}>
            <DiscountWrapper>
              <DiscountLabel>
                <Text {...discountAmount} content="25% Save" />
                <Text
                  {...discountText}
                  content="for first month trail version"
                />
              </DiscountLabel>
            </DiscountWrapper>
            <Heading
              {...title}
              content="White-Glove Social Media Management by The Sulfur Group" />
            <Text
              {...description}
              content="For Enhanced performance we use LiteSpeed Web Server, HTTP/2, PHP7. We make your website faster, which will help you to increase search ranking!"
            />
            {/* <Box {...buttonWrapper}>
              <a href="#1">
                <Button {...fillButton} title="FREE TRIAL" />
              </a>
              <a href="#1">
                <Button
                  {...button}
                  title="WATCH VIDEO"
                  icon={<Icon icon={ic_play_circle_filled} size={30} />}
                  iconPosition="left"
                />
              </a>
            </Box> */}
          </Box>
          <Box {...imageWrapper}>
            <Fade bottom>
              <VideoModal>
                <div className="text-content">
                  <Heading
                    {...videoModalTitle}
                    content="White-Glove Social Media Management by The Sulfur Group" />
                  <Text {...videoModalText}
                    content="For Enhanced performance we use LiteSpeed Web Server, HTTP/2, PHP7. We make your website faster, which will help you to increase search ranking!"
                  />
                  <a href="#1">
                  <Button {...fillButton} title="FREE TRIAL" />
                </a>
                </div>
                <Image src={BannerImage} alt="banner image" />
                {/* <PlayButton tabIndex="0" onClick={handleVideoModal}>
                  <Icon icon={play} size={40} />
                </PlayButton> */}
              </VideoModal>
            </Fade>
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  contentWrapper: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  videoModalText: PropTypes.object,
  videoModalTitle: PropTypes.object,
  imageWrapper: PropTypes.object,
  buttonWrapper: PropTypes.object,
  button: PropTypes.object,
  fillButton: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    width: ['100%', '100%', '80%', '55%', '50%'],
    mb: '40px',
  },
  title: {
    fontSize: ['24px', '32px', '40px', '42px', '46px'],
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px', '25px', '25px', '25px'],
    lineHeight: '1.2',
    textAlign: 'center',
  },
  description: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#fff',
    lineHeight: '1.75',
    mb: '0',
    textAlign: 'center',
  },
  videoModalTitle: {
    fontSize: ['24px'],
    fontWeight: '700',
    color: '#000',
    letterSpacing: '-0.025em',
    mb: ['15px'],
    lineHeight: '1.2',
  },
  videoModalText: {
    fontSize: '14px',
    color: '#000',
    lineHeight: '1.75',
    mb: ['30px'],
  },
  discountAmount: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '700',
    color: '#fff',
    mb: 0,
    as: 'span',
    mr: '0.4em',
  },
  discountText: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '400',
    color: '#fff',
    mb: 0,
    as: 'span',
  },
  fillButton: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    colors: 'secondaryWithBg',
    minWidth: ['auto', '150px'],
    height: ['40px', '46px'],
    minHeight: 'auto',
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
    mt: '35px',
  },
  button: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    color: '#fff',
    colors: 'secondary',
    height: ['40px', '46px'],
    minHeight: 'auto',
  },
};

export default BannerSection;
