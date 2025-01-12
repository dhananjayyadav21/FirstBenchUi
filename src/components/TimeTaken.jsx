import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import scaleImage from "../../src/assets/scale.png"; 

const TimeTaken = () => {
  return (
    <div className="container mt-4 px-3">

      {/*-------------------------------------------------- First Ruler Design --------------------------------------------*/}
      <div
        className="position-relative mb-4"
        style={{
          height: "60px",
          backgroundImage: `url(${scaleImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 40px",
          backgroundPosition: "top",
        }}
      >
        {/* Blue Vertical Slider */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "25%",
            height: "80px",
            width: "10px",
            backgroundColor: "#7d59bc75",
            zIndex: 2,
          }}
        ></div>

        {/* Green Bar */}
        <div
          style={{
            position: "absolute",
            top: "56px",
            left: "0",
            height: "12px",
            width: "24%",
            backgroundColor: "#59f909",
            borderRadius: "2px",
          }}
        ></div>

        {/* Red Bar */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "0",
            height: "12px",
            width: "60%",
            backgroundColor: "#ff1212",
            borderRadius: "2px",
          }}
        ></div>
      </div>

      {/* Description for First Scale */}
      <p style={{ fontSize: "14px", color: "#6b7280" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum is dummy text.
      </p>

      {/*------------------------------------------------ Second Ruler Design -----------------------------------------------*/}
      <div
        className="position-relative mb-4"
        style={{
          height: "60px",
          backgroundImage: `url(${scaleImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 40px",
          backgroundPosition: "top",
        }}
      >
        {/* Blue Vertical Slider */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "49%", 
            height: "80px",
            width: "12px",
            backgroundColor: "#7d59bc75",
            zIndex: 2,
          }}
        ></div>

        {/* Green Bar */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "28%",
            height: "12px",
            width: "21%",
            backgroundColor: "#59f909",
            borderRadius: "2px",
          }}
        ></div>

        {/* Red Bar */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "52%",
            height: "12px",
            width: "30%",
            backgroundColor: "#ff1212",
            borderRadius: "2px",
          }}
        ></div>
      </div>

      {/* Description for Second Scale */}
      <p style={{ fontSize: "14px", color: "#6b7280" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum is dummy text.
      </p>
    </div>
  );
};

export default TimeTaken;
