import { useEffect, useState } from "react";
import { getData } from "../../api/api";
import Cookies from "js-cookie";
import VideoMenu from "./Videomenu";

function VideoMain({ userData }) {
  return (
    <div>
      <VideoMenu />
      <h1>{userData.firstName}</h1>
    </div>
  );
}

export default VideoMain;
