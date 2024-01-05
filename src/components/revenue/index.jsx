import React from "react";
import rev from "../../assets/img/rev.png";
import gree from "../../assets/img/gree.png";
import gamer from "../../assets/img/gamer.png";

const Revenue = () => {
  return (
    <div className="py-[50px] overflow-hidden relative revenue bg-black">
      <img
        src={rev}
        className="absolute rev-img left-0 top-[50%] w-[400px] translate-y-[-50%]"
        alt=""
      />
      <img
        src={gree}
        className="absolute rev-img right-0 top-[50%] w-[400px] translate-y-[-50%]"
        alt=""
      />
      <div className="container w-[1100px] relative z-20">
        <div className="grid grid-cols-2 items-center gap-[32px]">
          <div className="item">
            <h2 className="text-[32px] font-semibold text-white ">
              <span className="text-grad">New Revenue</span> sharing model with
              Game Developers
            </h2>

            <p className="mt-[32px] text-gray">
              Zero costs for installation, integrates Games without any code
              modifications Unlock a new revenue stream effortlessly
            </p>

            <div className="btns gap-[18px] flex mt-[40px]">
              <button className="bg-transparent text-lg border border-[#DD43F2] rounded-[30px] text-white py-[12px] px-[32px]">
                Whitepaper
              </button>
              <button className="grad-btn text-lg rounded-[30px] text-white py-[12px] px-[32px]">
                Partner with us
              </button>
            </div>
          </div>
          <img src={gamer} className="block ml-auto" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Revenue;
