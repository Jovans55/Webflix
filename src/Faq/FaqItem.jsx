import { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "10px 0px",
      }}
    >
      <div
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "50%",
        }}
        onClick={toggleOpen}
      >
        {isOpen ? (
          <>
            <strong
              style={{
                fontSize: "20px",
                backgroundColor: "#212121",
                padding: "15px 5px",
                width: "100%",
              }}
            >
              {question}
            </strong>
            <div
              className="FaqText"
              style={{
                backgroundColor: "#3D3D3D",
                width: "100%",
                padding: "15px 5px",
                wordWrap: "break-word",
                fontWeight: "bold",
              }}
            >
              {answer}
            </div>
          </>
        ) : (
          <strong
            style={{
              fontSize: "20px",
              backgroundColor: "#212121",
              padding: "15px 5px",
              width: "100%",
            }}
          >
            {question}
          </strong>
        )}
      </div>
    </div>
  );
};

export default FaqItem;
