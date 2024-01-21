import { Link } from "react-router-dom";

function VideoCard({ imgLink, videoTitle }) {
  return (
    <Link style={{ textDecoration: "none" }} to={`/videoplayer/${imgLink}`}>
      <div className="VideoCardContainer">
        <div
          style={{
            backgroundImage: `url(https://img.youtube.com/vi/${imgLink}/maxresdefault.jpg)`,
            height: "200px",
            width: "355px",
            backgroundSize: "contain",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <span className="VideoCardTitle">{videoTitle}</span>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
