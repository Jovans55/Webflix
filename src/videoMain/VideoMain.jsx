import { useEffect, useState } from "react";
import { getData } from "../../api/api";
import Cookies from "js-cookie";
import VideoMenu from "./Videomenu";

function VideoMain({ userData }) {
  const [menu, setMenu] = useState(false);
  return (
    <div id="videoMain">
      {menu && <VideoMenu />}
      <section>
        <button onClick={() => setMenu(!menu)}>btn</button>
      </section>
    </div>
  );
}

export default VideoMain;
