import React from "react";
import phone from "../../assets/img/phone.png";
import phoneBg from "../../assets/img/phone-bg.png";
import phoneGrad from "../../assets/img/phone-grad.png";
import icon1 from "../../assets/img/trophy.svg";
import icon2 from "../../assets/img/battle.svg";
import icon3 from "../../assets/img/gamepad.svg";
import { Link } from "react-router-dom";
const Phone = () => {
  return (
    <div className="phone-section overflow-hidden bg-black py-[50px] relative">
      <img
        src={phoneGrad}
        className="absolute bottom-[330px] w-[150%] h-[500px]"
        alt=""
      />
      <div className="container">
        <div className="phone-holder relative z-20">
          <img
            src={phoneBg}
            className="phone-green-bg absolute bottom-[-100px] w-[800px] left-[50%] translate-x-[-50%]"
            alt=""
          />
          <img src={phone} className="block mx-auto relative z-20" alt="" />
        </div>

        <div className="text-center mt-[64px] flex justify-center items-start gap-[32px]">
          <div className="item w-[130px]">
            <img src={icon1} className="block mx-auto mb-3" alt="" />
            <p className="text-white font-semibold text-[22px]">Tournament</p>
          </div>
          <div className="item w-[130px]">
            <img src={icon2} className="block mx-auto mb-3" alt="" />
            <p className="text-white font-semibold text-[22px]">1VS1</p>
            <p className="text-[#8A8F97] text-sm">
              Simultaneous
              <br />
              Gameplay
            </p>
          </div>
          <div className="item w-[130px]">
            <img src={icon3} className="block mx-auto mb-3" alt="" />
            <p className="text-white font-semibold text-[22px]">Mulitplayers</p>
            <p className="text-[#8A8F97] text-sm">
              Simultaneous
              <br />
              Gameplay
            </p>
          </div>
        </div>

        <div className="text-center mt-[64px] relative z-20">
          <h2 className="text-white font-semibold text-[42px]">
            <span className="text-grad">1st Web3</span> P2E HUB for Infinite{" "}
            <br /> Games in One App
          </h2>

          <p className="my-[32px] text-[#8A8F97] text-xl">
            Diverse Games, updated weekly, for all tastes and skill levels.
            Train, Earn, and <br /> Compete. Where every Game is an opportunity
            to Win and Earn.
          </p>

          <Link to="" className="grad-btn text-white text-lg py-[12px] px-[24px]">
            Join The Beta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Phone;
