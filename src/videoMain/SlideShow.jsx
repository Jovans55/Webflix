import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "10px",
  margin: "15px",
  background: "#399afb",
  color: "white",
  fontWeight: "bold",
};

const divStyle = {
  display: "flex",
  width: "100vw",
  maxWidth: "1000px",
  alignItems: "flex-start",
  backgroundSize: "cover",
  height: "500px",
};
const slideImages = [
  {
    url: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    caption: "🔥 NEW TO WEBFLIX! 🔥",
  },
  {
    url: "https://img.youtube.com/vi/p_5yt5IX38I/maxresdefault.jpg",
    caption: "😎 MOST POPULAR ON WEBFLIX! 😎",
  },
  {
    url: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    caption: "😟 LEAVING SOON! 😟",
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
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Slideshow;
