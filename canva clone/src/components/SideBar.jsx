import React, { useContext } from "react";
import { HiOutlineTemplate } from "react-icons/hi";
import { RiText } from "react-icons/ri";
import { CiImageOn } from "react-icons/ci";
import { LuShapes } from "react-icons/lu";
import { PiFrameCorners } from "react-icons/pi";
import { IoCloudUploadOutline } from "react-icons/io5";
import { ContentContext } from "../App";

export default function SideBar() {
  const { setSideBarCont, sideBarCont } = useContext(ContentContext);

  return (
    <div className="sidebar">
      <div className="icon">
        <HiOutlineTemplate />
        <p>Template</p>
      </div>
      <div
        onClick={() => {
          setSideBarCont("text");
        }}
        className={`${sideBarCont === "text" ? "icon-sel" : "icon"}`}
      >
        <RiText />
        <p>Text</p>
      </div>
      <div
        onClick={() => {
          setSideBarCont("image");
        }}
        className={`${sideBarCont === "image" ? "icon-sel" : "icon"}`}
      >
        <CiImageOn />
        <p>Image</p>
      </div>
      <div className="icon">
        <LuShapes />
        <p>Shape</p>
      </div>
      <div className="icon">
        <PiFrameCorners />
        <p>Frame</p>
      </div>
      <div className="icon">
        <IoCloudUploadOutline />
        <p>Upload</p>
      </div>
    </div>
  );
}
