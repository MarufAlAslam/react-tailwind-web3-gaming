import React from "react";
import radial from "../../assets/img/radial.png";

import icon1 from "../../assets/img/phone.svg";
import icon2 from "../../assets/img/pc.svg";
import icon3 from "../../assets/img/tv.svg";
import radialBg from "../../assets/img/radial-bg.png";
import radialShadow from "../../assets/img/radial-shadow.png";
import happy from "../../assets/img/happy.png";

const CrossPlatform = () => {
  return (
    <div className="cross-platform overflow-hidden bg-black py-[50px]">
      <div className="container">
        <div className="holder relative">
          <img
            src={radialBg}
            className="absolute w-full bottom-[-100px] h-[550px] scale-105"
            alt=""
          />
          <img src={radial} className="block mx-auto relative z-10" alt="" />
          <div className="content z-20 absolute left-[50%] top-[10%] translate-x-[-50%] w-1/2">
            <div className="text-center">
              <h2 className="text-[42px] text-white font-semibold">
                <span className="text-grad">One App</span> cross platform
              </h2>
              <div className="text-center mt-4 flex justify-center items-start gap-[32px]">
                <div className="item w-[130px]">
                  <img src={icon1} className="block mx-auto mb-3" alt="" />
                  <p className="text-white font-semibold text-[22px]">Phone</p>
                </div>
                <div className="item w-[130px]">
                  <img src={icon2} className="block mx-auto mb-3" alt="" />
                  <p className="text-white font-semibold text-[22px]">PC</p>
                </div>
                <div className="item w-[130px]">
                  <img src={icon3} className="block mx-auto mb-3" alt="" />
                  <p className="text-white font-semibold text-[22px]">TV</p>
                </div>
              </div>

              <p className="mt-[20px] text-[#8A8F97]">
                Play wherever you want <br />
                from any device with a <br />
                single account
              </p>
            </div>
          </div>
        </div>
        <img
          src={radialShadow}
          className="w-full relative mt-[-20px] mb-[-20px] z-20 mx-auto block"
          alt=""
        />

        <div className="text-center">
          <h2 className="text-[42px] text-white font-semibold">
            Weekly <br />
            <span className="text-grad">Sweepstake</span>
          </h2>

          <img src={happy} className="mt-[45px] block mx-auto" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CrossPlatform;
