import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to GadgetZone – your one-stop destination for the latest and greatest in tech! We’re a passionate team of technology enthusiasts dedicated to bringing you the newest gadgets, in-depth reviews, and the best deals on the market. From cutting-edge smartphones to innovative smart home devices, GadgetZone keeps you informed and equipped with the tools you need to stay ahead in today’s fast-paced digital world.  
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
