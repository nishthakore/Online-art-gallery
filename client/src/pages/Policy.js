import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Privacy Policy
We value your privacy and are committed to protecting your personal information. We collect personal data such as name, email, phone number, and address when you register, place an order, or fill out a form.
1.
Use of Information We use your information to personalize your experience, improve our website, process transactions, and send updates..
.Sharing of Information We do not sell or trade your personal information. We may share it with trusted third parties who assist us in operating our website, provided they keep this information confidential.
3.Cookies We use cookies to enhance your experience. You can choose to disable cookies through your browser settings.
4.Data Security We implement security measures to protect your personal information.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
