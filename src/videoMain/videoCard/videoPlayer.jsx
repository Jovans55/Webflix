import { Link, useParams } from "react-router-dom";

function VideoPlayer() {
  const { imgLink } = useParams();
  console.log(imgLink);
  return (
    <div>
      <section id="videoHeader" style={{ padding: "5px" }}>
        <Link to="/popcorntime">
          <img
            src="/webflix.png"
            alt="Webflix logo light blue"
            width={"150px"}
            height={"50px"}
            style={{ margin: "5px 0px 0px 0px" }}
          />
        </Link>
      </section>
      <div id="videoContainer">
        <iframe
          style={{ width: "100%", height: "100%" }}
          frameBorder="0"
          src={`https://www.youtube.com/embed/${imgLink}`}
        ></iframe>
      </div>
    </div>
  );
}

export default VideoPlayer;
