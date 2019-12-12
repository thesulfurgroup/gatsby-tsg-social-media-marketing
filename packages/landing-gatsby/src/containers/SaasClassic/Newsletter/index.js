import React, { useState } from "react";
import $ from 'jquery'
import PropTypes from "prop-types";
import Box from "reusecore/src/elements/Box";
import Text from 'reusecore/src/elements/Text';
import Heading from "reusecore/src/elements/Heading";
import Button from "reusecore/src/elements/Button";
import Input from "reusecore/src/elements/Input";
import Container from "common/src/components/UI/Container";


import NewsletterWrapper, { ContactFormWrapper } from "./newsletter.style";

// const Newsletter = ({
//   sectionWrapper,
//   textArea,
//   buttonArea,
//   buttonStyle,
//   title,
//   description,
// }) => {
//   return (
//     <Box {...sectionWrapper} as="section">
//       <Container>
//         <NewsletterWrapper>
//           <Box {...textArea}>
//             <Heading content="Subscribe our newsletter" {...title} />
//             <Text
//               content="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore"
//               {...description}
//             />
//           </Box>
//           <Box {...buttonArea}>
//             <ContactFormWrapper>
//               <Input
//                 inputType="email"
//                 label="Email address"
//                 iconPosition="right"
//                 isMaterial={true}
//                 className="email_input"
//                 arial-label="email"
//               />
//               <Button {...buttonStyle} title="GET ACCESS    " />
//             </ContactFormWrapper>
//           </Box>
//         </NewsletterWrapper>
//       </Container>
//     </Box>
//   );
// };

function Newsletter({ sectionWrapper, textArea, buttonArea, buttonStyle, title, description }) {
  // const [formData, setFormData] = useState({
  //   email: ""
  // });

  // const validateEmail = email => {
  //   var re = /\S+@\S+\.\S+/;

  //   return re.test(email);
  // };

  // const updateFormData = e => {
  //   setFormData({
  //     ...formData,
  //     email: e
  //   });
  // };

  // const handleSubmit = e => {
  //   if (!formData.email) {
  //     alert("Email field is required.");
  //   } else if (!validateEmail(formData.email)) {
  //     alert("The Email address you entered is invalid.");
  //   } else {
  //   }
  // };

  const handleSubmit = e => {
    e.preventDefault()

    var $form = $(e.target);
    console.log($form.serialize())

    $.post($form.attr("action"), $form.serialize()).then(function() {
      alert("Thank you for contacting us! We will get in touch to you soon.");
      $form.trigger("reset");
    });
  };

  return (
    <Box {...sectionWrapper} as="section"  id="newsletter_section">
      <Container>
        <NewsletterWrapper>
          <Box {...textArea}>
            <Heading content="Subscribe our newsletter" {...title} />
            <Text content="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore" {...description} />

            <form className="NetlifyForm" name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <div className="NetlifyForm__fieldgroup">
                <div className="NetlifyForm__field field-1-1">
                  <label className="NetlifyForm__toplabel">Name</label>
                  <input type="text" name="name" required placeholder="Your full name" />
                </div>
                <div className="NetlifyForm__field field-1-3">
                  <label className="NetlifyForm__toplabel">Company</label>
                  <input type="text" name="company" placeholder="Your company" />
                </div>
              </div>
              <div className="NetlifyForm__fieldgroup">
                <div className="NetlifyForm__field field-1-4">
                  <label className="NetlifyForm__toplabel">Email address</label>
                  <input type="email" name="email" required placeholder="Best email address to contact you" />
                </div>
                <div className="NetlifyForm__field field-1-5">
                  <label className="NetlifyForm__toplabel">Phone number</label>
                  <input type="text" name="phone" required placeholder="Best phone number to contact you" />
                </div>
              </div>
              <div className="NetlifyForm__fieldgroup">
                <div className="NetlifyForm__field field-1-6">
                  <label className="NetlifyForm__toplabel">Website</label>
                  <input type="url" name="website" placeholder="Do you have website?"/>
                </div>
                <div className="NetlifyForm__field field-1-7">
                  <label className="NetlifyForm__toplabel">Instagram URL</label>
                  <input type="url" name="instagram_url" placeholder="Do you have Instagram?" />
                </div>
              </div>
              <div className="NetlifyForm__fieldgroup">
                <div className="NetlifyForm__field">
                  <Button {...buttonStyle} title="Submit" type="submit" />
                </div>
              </div>
            </form>
          </Box>
          <Box {...buttonArea}>
            {/* <ContactFormWrapper>
              <Input inputType="email" label="Email address" iconPosition="right" isMaterial={true} className="email_input" arial-label="email" />
              <Button {...buttonStyle} title="GET ACCESS" />
            </ContactFormWrapper> */}

            
          </Box>
        </NewsletterWrapper>
      </Container>
    </Box>
  );
}

Newsletter.propTypes = {
  sectionWrapper: PropTypes.object,
  textArea: PropTypes.object,
  buttonArea: PropTypes.object,
  buttonStyle: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object
};

Newsletter.defaultProps = {
  sectionWrapper: {},
  textArea: {
    width: "100%"
  },
  title: {
    fontSize: ["18px", "20px", "22px", "24px", "26px"],
    fontWeight: "500",
    color: "#fff",
    lineHeight: "1.34",
    mb: ["14px", "14px", "14px", "14px", "13px"],
    textAlign: ["center", "center", "center", "left", "left"],
    letterSpacing: "-0.025em"
  },
  description: {
    fontSize: ["14px", "14px"],
    fontWeight: "400",
    color: "#fefefe",
    lineHeight: "1.7",
    mb: "30px",
    textAlign: ["center", "center", "center", "left", "left"]
  },
  buttonArea: {
    zIndex: 1
  },
  buttonStyle: {
    type: "button",
    fontSize: "14px",
    fontWeight: "700",
    pl: "30px",
    pr: "30px",
    colors: "secondaryWithBg",
    color: "#03103b"
  }
};

export default Newsletter;
