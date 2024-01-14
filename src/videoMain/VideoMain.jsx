import { useEffect, useState } from "react";
import { getData } from "../../api/api";
import Cookies from "js-cookie";

function VideoMain({ userData }) {
  return <h1>{userData.firstName}</h1>;
}

export default VideoMain;
