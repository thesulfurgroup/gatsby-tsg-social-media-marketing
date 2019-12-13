import styled from 'styled-components';

const BoxIcon = styled.div`
  width: 50px;
  height: 50px;
  flex-basis: 50px;
  display: block;
  overflow: hidden;
  margin: 0 auto;
  
`

const SectionWrapper = styled.section`
  padding: 75px 0 0 0;

  .service_item {
    position: relative;
    text-align: center;
    .service_icon {
      width: 110px;
      height: 110px;
      border-radius: 35px;
      background-color: #fafafa;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      margin: 0 auto 28px auto;
      color: #000;
      @media (max-width: 990px) {
        width: 90px;
        height: 90px;
        border-radius: 25px;
        font-size: 36px;
        margin-bottom: 20px;
      }
    }

    h3 {
      color: #000;
    }
  }

  .service_item_col {
    flex: 0 0 50%;

    @media (min-width: 576px) {
      flex: 0 0 33.33%;
    }

    @media (min-width: 992px) {
      flex: 0 0 16%;
    }

    &:nth-child(1) {
      .service_item {
        .service_icon {
          font-size: 56px;
          @media (max-width: 990px) {
            font-size: 48px;
          }
        }
      }
    }

    &:nth-child(2) {
      .service_item {
        .service_icon {
          background-color: #fafafa;
          // color: #45b1e1;
          font-size: 46px;
          @media (max-width: 990px) {
            font-size: 40px;
          }
        }
        h3 {
          // color: #45b1e1;
        }
      }
    }

    &:nth-child(3) {
      .service_item {
        .service_icon {
          background-color: #fafafa;
          // color: #d6ab00;
          font-size: 46px;
          @media (max-width: 990px) {
            font-size: 40px;
          }
        }
        h3 {
          // color: #d6ab00;
        }
      }
    }

    &:nth-child(4) {
      .service_item {
        .service_icon {
          background-color: #fafafa;
          // color: #40975f;
          font-size: 46px;
          @media (max-width: 990px) {
            font-size: 40px;
          }
          i {
            height: 36px;
          }
        }
        h3 {
          // color: #40975f;
        }
      }
    }

    &:nth-child(5) {
      .service_item {
        .service_icon {
          background-color: #fafafa;
          // color: #ea7a2f;
          font-size: 32px;
          @media (max-width: 990px) {
            font-size: 28px;
          }
        }
        h3 {
          // color: #ea7a2f;
        }
      }
    }

    &:nth-child(6) {
      .service_item {
        .service_icon {
          background-color: #fafafa;
          // color: #5856d6;
          font-size: 32px;
          @media (max-width: 990px) {
            font-size: 28px;
          }
        }
        h3 {
          // color: #5856d6;
        }
      }
    }
  }
`;



export {BoxIcon}

export default SectionWrapper;