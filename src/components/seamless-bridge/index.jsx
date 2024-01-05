import React from "react";
import game1 from "../../assets/img/game1.png";
import game2 from "../../assets/img/game2.png";
import game3 from "../../assets/img/game3.png";
import game4 from "../../assets/img/game4.png";

const SeamlessBridge = () => {
  return (
    <div className="seamlessBridge bg-transparent pt-5 pb-[100px]">
      <div className="container">
        <div className="flex justify-between items-start gap-[25px]">
          <div className="left w-1/2">
            <h2 className="font-semibold text-[42px] text-white">
              The seamless Bridge from Beloved Web2 Games to the Web3 Era.
            </h2>
          </div>
          <div className="left w-1/2">
            <div className="slider">
              <div className="slide p-[32px] pb-0">
                <h3 className="text-[30px] font-semibold text-white">
                  For Game Developers
                </h3>
                <p className="mt-5 text-[#8A8F97] text-xl">
                  0$ Costs for installation
                </p>
                <p className="mt-2 text-[#8A8F97] text-xl">
                  Integrates Games Without Any Code modifications{" "}
                </p>
                <p className="mt-2 text-[#8A8F97] text-xl">
                  Unlock a New Revenue Stream effortlessly
                </p>

                <div className="mt-[60px] grid grid-cols-4 gap-[24px]">
                  <img src={game1} alt="" />
                  <img src={game2} alt="" />
                  <img src={game3} alt="" />
                  <img src={game4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeamlessBridge;
