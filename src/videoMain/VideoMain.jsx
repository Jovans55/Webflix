import { useEffect, useState } from "react";
import VideoMenu from "./Videomenu";

function VideoMain({ userData }) {
  const [menu, setMenu] = useState(false);
  return (
    <div id="videoMain">
      <section>
        <button id="btnBarsBtn" onClick={() => setMenu(!menu)}>
          <p className="btnBars"></p>
          <p className="btnBars"></p>
          <p className="btnBars"></p>
        </button>
        <img
          src="/webflix.png"
          alt="Webflix logo light blue"
          width={"100px"}
          height={"35px"}
          style={{ margin: "5px 0px 0px 0px" }}
        />
      </section>
      {menu && <VideoMenu />}
    </div>
  );
}

export default VideoMain;
