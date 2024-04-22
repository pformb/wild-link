import React from 'react';
import { Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';


const PrivacyPolicy = () => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
         Wild Link's Privacy Policy
      </Typography>
      <Typography variant="body1" gutterBottom>
        This Privacy Policy describes how we at Wild Link collect, use, and disclose information when you use our website and services.
      </Typography>

      <Typography variant="h6" gutterBottom>
        1. Information We Collect
      </Typography>
      <Typography variant="body1" gutterBottom>
        a. Personal Information: When you register as a wildlife rehab organization or donor on our website, we may collect personal information such as your name, email address, phone number, and mailing address.
      </Typography>
      <Typography variant="body1" gutterBottom>
        b. Patient Information: Wildlife rehab organizations may input and update information about their patients, including medical history, treatment progress, and photographs. This information is considered confidential and is used solely for the purpose of patient care.
      </Typography>
      <Typography variant="body1" gutterBottom>
        c. Donation Information: When donors contribute funds towards the care of wildlife patients, we collect information such as the donation amount, donor name, and contact details. This information is used to process donations and provide donation receipts.
      </Typography>

      <Typography variant="h6" gutterBottom>
        2. Use of Information
      </Typography>
      <Typography variant="body1" gutterBottom>
        a. Patient Information: Patient information entered by wildlife rehab organizations is used to track and manage the care of wildlife patients. This information is accessible only to authorized personnel involved in wildlife rehabilitation.
      </Typography>
      <Typography variant="body1" gutterBottom>
        b. Donation Information: Donor information is used to process donations, issue donation receipts, and acknowledge donors for their contributions. Donors may also have the option to receive updates on the progress of patients they have supported.
      </Typography>

      <Typography variant="h6" gutterBottom>
        3. Sharing of Information
      </Typography>
      <Typography variant="body1" gutterBottom>
        a. Authorized Parties: Patient information is shared only with authorized personnel within wildlife rehab organizations for the purpose of patient care and management.
      </Typography>
      <Typography variant="body1" gutterBottom>
        b. Donor Recognition: With donor consent, we may publicly recognize and acknowledge donors on our website or through other communication channels.
      </Typography>
      <Typography variant="body1" gutterBottom>
        c. Legal Compliance: We may disclose information when required by law or in response to valid legal requests, such as court orders or government inquiries.
      </Typography>

      <Typography variant="h6" gutterBottom>
        4. Data Security
      </Typography>
      <Typography variant="body1" gutterBottom>
        a. We implement industry-standard security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
      </Typography>

      <Typography variant="h6" gutterBottom>
        5. Your Choices
      </Typography>
      <Typography variant="body1" gutterBottom>
        a. Account Settings: You can update your account information and communication preferences by logging into your account on our website.
      </Typography>
      <Typography variant="body1" gutterBottom>
        b. Opt-Out: You may choose to opt out of certain communications or request the deletion of your information by contacting us through the contact information provided below.
      </Typography>

      <Typography variant="h6" gutterBottom>
        6. Updates to Privacy Policy
      </Typography>
      <Typography variant="body1" gutterBottom>
        a.  We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review this Privacy Policy periodically.
      </Typography>

      <Typography variant="h6" gutterBottom>
        7. Contact Us
      </Typography>
      <Typography variant="body1" gutterBottom>
        a.  If you have any questions, concerns, or requests regarding this Privacy Policy or our practices, please contact us at:
      </Typography>
      <RouterLink to="/contactus" style={{ textDecoration: 'none', color: 'black', padding: '5px' }}>Contact Us</RouterLink>
    </div>
  );
};

export default PrivacyPolicy;