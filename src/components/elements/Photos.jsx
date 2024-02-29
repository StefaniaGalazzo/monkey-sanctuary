/* eslint-disable react/prop-types */
import { Carousel } from "react-bootstrap";
import { IoCloseCircle } from "react-icons/io5";

export default function Photos({ pics, setShowPhotos, top, left }) {
  return (
    <div className="carousel-container-custom">
      <IoCloseCircle
        onClick={() => setShowPhotos(true)}
        size={40}
        style={{
          position: "absolute",
          zIndex: "10",
          right: left,
          top: top,
        }}
        color="green"
      />
      <Carousel className="photos-carousel" style={{ top: top, left: left }}>
        {pics &&
          pics.length > 0 &&
          pics.map((pic, indx) => (
            <Carousel.Item key={indx}>
              <img src={pic} alt="monkey-pic" />
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
}
