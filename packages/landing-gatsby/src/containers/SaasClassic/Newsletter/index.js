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
          </Box>
          <Box {...buttonArea}>
            {/* <ContactFormWrapper>
              <Input inputType="email" label="Email address" iconPosition="right" isMaterial={true} className="email_input" arial-label="email" />
              <Button {...buttonStyle} title="GET ACCESS" />
            </ContactFormWrapper> */}

            <form className="NetlifyForm" name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <div className="NetlifyForm__field field-1-1">
                <label className="NetlifyForm__toplabel">First name</label>
                <input type="text" name="first_name" required placeholder="Your first name" />
              </div>
              <div className="NetlifyForm__field field-1-2">
                <label className="NetlifyForm__toplabel">Last name</label>
                <input type="text" name="last_name" required placeholder="Your last name" />
              </div>
              <div className="NetlifyForm__field field-1-3">
                <label className="NetlifyForm__toplabel">Company</label>
                <input type="text" name="company" placeholder="Your company" />
              </div>
              <div className="NetlifyForm__field field-1-4">
                <label className="NetlifyForm__toplabel">Email address</label>
                <input type="email" name="email" required placeholder="Best email to contact you" />
              </div>
              <div className="NetlifyForm__field field-1-5">
                <label className="NetlifyForm__toplabel">Phone number</label>
                <input type="text" name="phone" required placeholder="Your phone number" />
              </div>
              <div className="NetlifyForm__field field-1-6">
                <label className="NetlifyForm__toplabel">Website</label>
                <input type="url" name="website" placeholder="Do you have website?"/>
              </div>
              <div className="NetlifyForm__field field-1-7">
                <label className="NetlifyForm__toplabel">Instagram URL</label>
                <input type="url" name="instagram_url" placeholder="Do you have Instagram?" />
              </div>
              <div className="NetlifyForm__field">
                <button type="submit" class="reusecore__button buttonstyle__ButtonStyle-leGlkG cYyrzA">Submit</button> 
              </div>
            </form>

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
    mb: ["40px", "40px", "40px", "0", "0"],
    pr: ["0", "0", "0", "80px", "100px"]
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
    mb: 0,
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
