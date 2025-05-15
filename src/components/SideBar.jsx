import React from 'react'
import { HiOutlineTemplate } from "react-icons/hi";
import { RiText } from "react-icons/ri";
import { CiImageOn } from "react-icons/ci";
import { LuShapes } from "react-icons/lu";
import { PiFrameCorners } from "react-icons/pi";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className='icon'>
        <HiOutlineTemplate />
        <p>Template</p>
      </div>
      <div className='icon-sel'>
        <RiText />
        <p>Text</p>
      </div>
      <div className='icon'>
        <CiImageOn />
        <p>Image</p>
      </div>
      <div className='icon'>
        <LuShapes />
        <p>Shape</p>
      </div>
      <div className='icon'>
        <PiFrameCorners />
        <p>Frame</p>
      </div>
      <div className='icon'>
        <IoCloudUploadOutline />
        <p>Upload</p>
      </div>
    </div>
  )
}
