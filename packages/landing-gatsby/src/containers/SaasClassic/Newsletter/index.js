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
      alert("Thank you!");
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
              <Input inputType="email" label="Email address" iconPosition="right" isMaterial={true} className="email_input" arial-label="email" onChange={updateFormData} />
              <Button {...buttonStyle} title="GET ACCESS" onClick={handleSubmit} />
            </ContactFormWrapper> */}

            <form id="form-1" name="contact" method="post" data-netlify="true" onSubmit={handleSubmit}>
              <div className="field-1-1">
                <label for="input-1-1">First name</label>
                <input type="text" name="first_name" id="input-1-1" />
              </div>
              <div className="field-1-2">
                <label for="input-1-2">Last name</label>
                <input type="text" name="last_name" id="input-1-2" />
              </div>
              <div className="field-1-3">
                <label for="input-1-3">Company</label>
                <input type="text" name="company" id="input-1-3" />
              </div>
              <div className="field-1-4">
                <label for="input-1-4">Email address</label>
                <input type="email" name="email" id="input-1-4" />
              </div>
              <div className="field-1-5">
                <label for="input-1-5">Phone number</label>
                <input type="text" name="phone" id="input-1-5" />
              </div>
              <div className="field-1-6">
                <label for="input-1-6">Website</label>
                <input type="text" name="website" id="input-1-6" />
              </div>
              <div className="field-1-7">
                <label for="input-1-7">Instagram URL</label>
                <input type="text" name="instagram_url" id="input-1-7" />
              </div>
              <div>
                <button type="submit">Submit</button> 
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
