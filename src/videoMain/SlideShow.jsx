import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "500px",
};
const slideImages = [
  {
    url: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    caption: "Slide 1",
  },
  {
    url: "https://img.youtube.com/vi/p_5yt5IX38I/maxresdefault.jpg",
    caption: "Slide 2",
  },
  {
    url: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    caption: "Slide 3",
  },
];

function Slideshow() {
  return (
    <div
      className="slide-container"
      style={{ maxWidth: "1000px", height: "500px" }}
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
