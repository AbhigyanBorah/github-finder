import React from "react";
import spinner from "../layout/assets/loading.gif";

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img width={350} className="text-center mx-auto" src={spinner} alt="Loading..." />
    </div>
  );
}

export default Spinner;
