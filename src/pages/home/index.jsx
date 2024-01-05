import React from "react";
import Header from "../../components/header";
import Hero from "../../components/hero";
import Logos from "../../components/logos";
import SeamlessBridge from "../../components/seamless-bridge";
import gradCircle from "../../assets/img/gradient-ellipse.png";
import Line from "../../components/line";
import Phone from "../../components/phone";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div className="relative bg-black overflow-hidden">
        <img
          src={gradCircle}
          className="absolute top-0 left-0 block shadow-gradient mx-auto z-20"
          alt=""
        />
        <div className="relative z-20">
          <Logos />
          <SeamlessBridge />
        </div>
      </div>
      <Line />
      <Phone />
    </div>
  );
};

export default HomePage;
