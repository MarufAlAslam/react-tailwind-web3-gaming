import React from "react";
import binance from "../../assets/img/binance.png";
import unreal from "../../assets/img/unreal.png";
import unity from "../../assets/img/unity.png";
import cosos from "../../assets/img/cocos.png";
import gamemaker from "../../assets/img/gamemaker.png";
import construct from "../../assets/img/construct.png";

const Logos = () => {
  return (
    <div
      className="logos overflow-hidden relative py-[90px] bg-transparent"
      id="logos"
    >
      <div className="container relative z-20">
        <div className="flex justify-center items-center gap-[70px]">
          <img src={binance} className="logo-img" alt="" />
          <img src={unreal} className="logo-img" alt="" />
          <img src={unity} className="logo-img" alt="" />
          <img src={cosos} className="logo-img" alt="" />
          <img src={gamemaker} className="logo-img" alt="" />
          <img src={construct} className="logo-img" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Logos;
