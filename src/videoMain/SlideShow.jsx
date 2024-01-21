import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "10px",
  margin: "15px",
  marginBottom: "0px",
  background: "#399afb",
  color: "white",
  fontWeight: "bold",
};

const titleStyle = {
  display: "inline",
  padding: "10px",
  margin: "15px",
  marginTop: "0px",
  background: "#399afb",
  color: "white",
  fontWeight: "bold",
};

const divStyle = {
  display: "flex",
  width: "100%",
  maxWidth: "1000px",
  alignItems: "flex-start",
  flexDirection: "column",
  backgroundSize: "cover",
  height: "500px",
};

const slideImages = [
  {
    url: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    caption: "🔥 NEW TO WEBFLIX! 🔥",
    title: "Never Gonna Give You Up",
  },
  {
    url: "https://img.youtube.com/vi/p_5yt5IX38I/maxresdefault.jpg",
    caption: "😎 MOST POPULAR ON WEBFLIX! 😎",
    title: "Throat Singing Tutorial",
  },
  {
    url: "https://img.youtube.com/vi/r197A88GMt4/maxresdefault.jpg",
    caption: "😟 LEAVING SOON! 😟",
    title: "How To Eat a Apple!",
  },
];

function Slideshow() {
  return (
    <div
      className="slide-container"
      style={{ maxWidth: "1000px", width: "100vw", height: "500px" }}
    >
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              <span style={spanStyle}>{slideImage.caption}</span>
              <span style={titleStyle}>{slideImage.title}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Slideshow;
