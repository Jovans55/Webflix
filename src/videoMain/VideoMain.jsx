import { useState } from "react";
import VideoMenu from "./Videomenu";

function VideoMain({ userData }) {
  const [menu, setMenu] = useState(false);
  return (
    <div id="videoMain">
      <section style={{ borderBottom: "5px solid #101012" }}>
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
      <section id="videoMainBody">
        {menu && <VideoMenu />}
        <iframe
          width="250"
          height="200"
          frameBorder="0"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        ></iframe>
        <iframe
          width="250"
          height="200"
          frameBorder="0"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        ></iframe>
      </section>
    </div>
  );
}

export default VideoMain;
