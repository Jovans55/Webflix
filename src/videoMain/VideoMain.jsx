import { useEffect, useState } from "react";
import { getData } from "../../api/api";
import Cookies from "js-cookie";
import VideoMenu from "./Videomenu";

function VideoMain({ userData }) {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      {menu && <VideoMenu />}
      <button onClick={() => setMenu(!menu)}>btn</button>
      <h1>{userData.firstName}</h1>
    </div>
  );
}

export default VideoMain;
