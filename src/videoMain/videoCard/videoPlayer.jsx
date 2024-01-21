import { Link, useParams } from "react-router-dom";

function VideoPlayer() {
  const { imgLink } = useParams();
  console.log(imgLink);
  return (
    <div>
      <section id="videoHeader">
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
      <div id="videoContainer">
        <iframe
          height="500px"
          frameBorder="0"
          src={`https://www.youtube.com/embed/${imgLink}`}
        ></iframe>
      </div>
    </div>
  );
}

export default VideoPlayer;
