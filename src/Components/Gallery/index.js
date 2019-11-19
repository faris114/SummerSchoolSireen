import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import images from "../../../public/assets/import";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./styles.css";
import VisibilitySensor from "react-visibility-sensor";
import Zoom from "react-reveal/Zoom";

export default function Galleryy() {
  const [clickedImage, setClickedImage] = useState(1000);
  const [textZoom, setTextZoom] = useState(null);
  const [visible, setVisible] = useState(false);
  const imgRef = React.createRef();
  useEffect(() => {
    imgRef.current.focus();
  }, [imgRef]);
  const handleImages = () => {
    return images.map((currentImage, index) => {
      return (
        <div key={index}>
          <img src={currentImage} ref={imgRef} width={"100%"} height={"100%"} />
        </div>
      );
    });
  };

  const handleYearsContainer = () => {
    let year = 2010;
    return Array.from({ length: 10 }).map((currentContainer, index) => {
      return (
        <div
          key={index}
          id={visible ? "visible" : null}
          className="divHover"
          onMouseOver={(() => setTextZoom(index), console.log("horororor"))}
          onMouseOut={() => setTextZoom(null)}
        >
          <h1 className={index === textZoom && "textZoom"}>{year++}</h1>
          <button
            style={{ borderRadius: "20%" }}
            onClick={() => {
              setClickedImage(index);
            }}
          >
            <VisibilitySensor
              onChange={isVisble => {
                console.log(isVisble);
                setVisible(isVisble);
                setTextZoom(index);
              }}
            >
              <div ref={imgRef} className="imageContainer">
                <img
                  src={images[index]}
                  width={"100%"}
                  height={"100%"}
                  style={{ borderRadius: "20%" }}
                />
              </div>
            </VisibilitySensor>
          </button>
        </div>
      );
    });
  };
  if (clickedImage === 1000)
    return (
      <div id="gallery">
        <h1>Gallery</h1>
        <div className="yearsContainer">{handleYearsContainer()}</div>
      </div>
    );
  else
    return (
      <div>
        <div>
          <div>
            <button
              onClick={() => {
                setClickedImage(1000);
              }}
            >
              Click to get back
            </button>
          </div>
          <AwesomeSlider>{handleImages()}</AwesomeSlider>
        </div>
      </div>
    );
}
