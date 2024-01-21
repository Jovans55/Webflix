import { useState } from "react";
import VideoMenu from "./Videomenu";
import VideoCard from "./videoCard/VideoCard";
import Slideshow from "./SlideShow";

function VideoMain({ userData }) {
  const [menu, setMenu] = useState(false);
  return (
    <div id="videoMain">
      <section id="videoHeader">
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
        <div id="videoMainBodyDiv">
          <Slideshow />
          <h1
            style={{ borderBottom: "5px solid #101012", paddingBottom: "10px" }}
          >
            Popular
          </h1>
          <section className="VideosSectionContainer">
            <VideoCard
              imgLink={"dQw4w9WgXcQ"}
              videoTitle={"Never going to give you up"}
            />
            <VideoCard imgLink={"p_5yt5IX38I"} videoTitle={"Throat Signing"} />
            {/* <iframe
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
            <iframe
              width="250"
              height="200"
              frameBorder="0"
              src="https://www.youtube.com/embed/6WlI24rv__g?autoplay=1"
            ></iframe>
            <img
              width="300"
              height="100%"
              src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
              alt="YouTube Thumbnail"
            /> */}
          </section>
        </div>
      </section>
    </div>
  );
}

export default VideoMain;
