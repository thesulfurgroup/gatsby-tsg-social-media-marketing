import styled from 'styled-components';

const NewsletterWrapper = styled.div`
max-width: 800px;
margin: 0 auto;
  position: relative;
  background: linear-gradient(
    -139deg,
    rgb(255, 65, 108) 0%,
    rgb(255, 75, 43) 100%
  );
  padding: 45px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -105px;
  @media (max-width: 1220px) {
    padding: 30px;
  }
  @media (max-width: 990px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  .NetlifyForm {
    // max-width: 600px;
    margin: 0 auto;

    input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]) {
      border: 1px solid #eaeaea;
      border-radius: 2px;
      color: #000000;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5em;
      width: 100%;
      padding: 8px 12px;
      transition: all 450ms cubic-bezier(0.77, 0, 0.175, 1);

      &::placeholder  {
        color: transparent;
        transition: all 450ms cubic-bezier(0.77, 0, 0.175, 1);
      }

      &:focus::placeholder {
        color: #aaa;
      }

    }

    &__fieldgroup {
      display: flex;
      margin-right: -8px;
      margin-left: -8px;
    }

    &__field {
      flex: 1;
      margin-bottom: 15px;
      padding-right: 8px;
      padding-left: 8px;
    }

    &__toplabel {
      color: #ffffff;
      display: inline-block;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 4px;
    }
  }
`;

export const ContactFormWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 470px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1220px) {
    width: 420px;
  }
  @media (max-width: 575px) {
    width: 100%;
  }
  @media (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    button {
      width: 100%;
    }
  }

  .email_input {
    flex-grow: 1;
    margin-right: 20px;

    @media (max-width: 575px) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 20px;
    }
    &.is-material {
      &.is-focus {
        label {
          font-size: 14px;
          color: #fff;
        }
        .highlight {
          background: #fff;
          height: 1px;
        }
      }
    }

    .highlight {
      background: rgba(255, 255, 255, 0.4);
    }

    input {
      background: transparent;
      font-size: 16px;
      font-weight: 400;
      color: #fff;
      padding: 10px 15px;
      border-color: #dadada;
      @media (max-width: 575px) {
        height: 48px;
      }
    }

    label {
      font-size: 17px;
      color: #fff;
      font-weight: 400;
      padding-left: 10px;
      top: 5px;
      pointer-events: none;
    }
  }
`;

export default NewsletterWrapper;
