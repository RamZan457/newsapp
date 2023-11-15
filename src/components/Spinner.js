import React from "react";
import loading from "./loading.gif";

export const Spinner = () => {
  return (
    <div className="text-center">
      <img style={{ mixBlendMode: "darken" }} src={loading} alt="" />
    </div>
  );
};

export default Spinner;
