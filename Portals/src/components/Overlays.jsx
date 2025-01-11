import React from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

const mountElement = document.getElementById("overlays");

const Overlays = (props) => {
  return createPortal(<>{props.isOpen && <Modal  controller={props.stateController}/>}</>, mountElement);
};

export default Overlays;
