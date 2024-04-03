import React from "react";
import Animate from "../HightOrder/Animate";
import { Outlet } from "react-router";

function Tools() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Animate(Tools);
