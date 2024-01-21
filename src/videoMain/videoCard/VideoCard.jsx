function VideoCard({ imgLink, videoTitle }) {
  return (
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
  );
}

export default VideoCard;
