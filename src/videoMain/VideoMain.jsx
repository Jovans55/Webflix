import { useState } from "react";
import VideoMenu from "./Videomenu";
import VideoCard from "./videoCard/VideoCard";
import Slideshow from "./SlideShow";
import { Link } from "react-router-dom";

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
        <Link to="/popcorntime">
          <img
            src="/webflix.png"
            alt="Webflix logo light blue"
            width={"100px"}
            height={"35px"}
            style={{ margin: "5px 0px 0px 0px" }}
          />
        </Link>
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
              imgLink={"p_5yt5IX38I"}
              videoTitle={"Throat Singing Tutorial"}
            />
            <VideoCard
              imgLink={"rSeZ2ZHOagQ"}
              videoTitle={"Bro Climbs Skyscraper With No Gear"}
            />
            <VideoCard
              imgLink={"dQw4w9WgXcQ"}
              videoTitle={"Never going to give you up"}
            />
            <VideoCard
              imgLink={"QrvV-R3y2xY"}
              videoTitle={"How To Center a Div"}
            />
            <VideoCard
              imgLink={"Q_iTGX9MZkM"}
              videoTitle={"4 HOUR Family Compilation?!? 💀"}
            />
            <VideoCard
              imgLink={"CnWGmWbBSsY"}
              videoTitle={"Monkies Taking a Shower"}
            />
            <VideoCard imgLink={"cK-GILT2unE"} videoTitle={"Terminator 3"} />
          </section>
          <h1
            style={{ borderBottom: "5px solid #101012", paddingBottom: "10px" }}
          >
            Comedy
          </h1>
          <section className="VideosSectionContainer">
            <VideoCard
              imgLink={"N8siuNjyV7A"}
              videoTitle={"1 Hour Of Brain Rot Cat Video"}
            />
            <VideoCard
              imgLink={"geV4yBkLjWE"}
              videoTitle={"Generic Funny Video"}
            />
            <VideoCard
              imgLink={"Q_iTGX9MZkM"}
              videoTitle={"4 HOUR Family Compilation?!? 💀"}
            />
            <VideoCard
              imgLink={"AXhV9UBmFmM"}
              videoTitle={"EPIC SNOW FAILS!"}
            />
            <VideoCard imgLink={"8Qc29mubbzk"} videoTitle={"Rizz Monkey"} />
            <VideoCard
              imgLink={"CnWGmWbBSsY"}
              videoTitle={"Monkies Taking a Shower"}
            />
          </section>
          <h1
            style={{ borderBottom: "5px solid #101012", paddingBottom: "10px" }}
          >
            Action
          </h1>
          <section className="VideosSectionContainer">
            <VideoCard
              imgLink={"rSeZ2ZHOagQ"}
              videoTitle={"Bro Climbs Skyscraper With No Gear"}
            />
            <VideoCard
              imgLink={"JLL5NM8CAk4"}
              videoTitle={"Professional Pillow Fighting"}
            />
            <VideoCard
              imgLink={"0s-LxGxmvgg"}
              videoTitle={"Death Diving World Championship"}
            />
            <VideoCard
              imgLink={"sxbL6hSRf0g"}
              videoTitle={"Superman Bullds PC"}
            />
            <VideoCard
              imgLink={"ndkh8MQw9ZM"}
              videoTitle={"Dudes with Katanas"}
            />
            <VideoCard
              imgLink={"udUJuRIkk0I"}
              videoTitle={"Conor McGregor Career Highlights"}
            />
            <VideoCard imgLink={"cK-GILT2unE"} videoTitle={"Terminator 3"} />
          </section>
          <h1
            style={{ borderBottom: "5px solid #101012", paddingBottom: "10px" }}
          >
            Educational
          </h1>
          <section className="VideosSectionContainer">
            <VideoCard
              imgLink={"r197A88GMt4"}
              videoTitle={"How To Eat a Apple!"}
            />
            <VideoCard
              imgLink={"p_5yt5IX38I"}
              videoTitle={"Throat Singing Tutorial"}
            />
            <VideoCard
              imgLink={"CdqT7_6v60E"}
              videoTitle={"How To Console Log"}
            />
            <VideoCard
              imgLink={"QrvV-R3y2xY"}
              videoTitle={"How To Center a Div"}
            />
            <VideoCard imgLink={"tGVnBAHLApA"} videoTitle={"Calculus 3"} />
            <VideoCard
              imgLink={"R8ste6xQAMo"}
              videoTitle={"Carburetor Repair"}
            />
            <VideoCard
              imgLink={"XAoOpOuc2Ms"}
              videoTitle={"Learn To Fly a Plane In 5 Minutes."}
            />
            <VideoCard
              imgLink={"m_SlH3Uwslc"}
              videoTitle={"How Bees Choose Their Queen"}
            />
          </section>
        </div>
      </section>
    </div>
  );
}

export default VideoMain;
