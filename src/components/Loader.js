import React from "react";
import "./style.css";

export const Loader = () => {
  return (
    <div>
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
