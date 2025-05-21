import React, { useContext } from "react";
import { IoCloudDoneOutline } from "react-icons/io5";
import { BiUndo } from "react-icons/bi";
import { BiRedo } from "react-icons/bi";
import logoImg from "../assets/logo.png";

export default function Header() {

  return (
    <div className="header">
      <div className="header-left">
        <img src={logoImg}></img>|<span>File</span>
      </div>
      <div className="header-rght">
        <div className="rght">
          <p>Untitled Design</p>
          <IoCloudDoneOutline style={{ fontSize: "x-large", color: "gray" }} />
          <BiUndo
            onClick={() => {
              setImage(null);
            }}
          />
          <BiRedo style={{ fontSize: "x-large", color: "gray" }} />
        </div>
      </div>
    </div>
  );
}
