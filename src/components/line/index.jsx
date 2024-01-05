import React from "react";
import line from "../../assets/img/line.svg";

const Line = () => {
  return (
    <div className="line bg-black py-[50px]">
      <div className="container">
        <img src={line} className="w-full" alt="" />
      </div>
    </div>
  );
};

export default Line;
