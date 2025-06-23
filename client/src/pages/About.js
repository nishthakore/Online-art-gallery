import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/street-art-8394476_1280.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            This art gallery is a simple and elegant contemporary art gallery showcasing exceptional works by emerging and established artists. Our mission is to foster Creativity,inspire dialogue, and connect art enthusiasts with unique and thought provoking pieces. 
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
