/* eslint-disable react/prop-types */
import { Col } from "react-bootstrap";
import { SiSurveymonkey } from "react-icons/si";
import { adopted } from "../../lib/data.js";
import { useState } from "react";
import Photos from "./Photos";

export default function Adopted({ top, left }) {
  const [selectedMonkeyId, setSelectedMonkeyId] = useState(null);
  const [showPhotos, setShowPhotos] = useState(false);
  const handleClick = (monkeyId) => {
    setShowPhotos(true);
    setSelectedMonkeyId(monkeyId);
  };

  return (
    <>
      {/* <Row className="d-flex mt-5 mx-auto" style={{ width: "50%" }}> */}
      {adopted.map((monkey) => (
        <>
          <Col
            key={monkey.id}
            xs={6}
            md={2}
            className="text-center mb-3"
            title={monkey.name}
            onClick={() => handleClick(monkey.id)}
          >
            <div
              className="tag glassmorph p-2 w-100"
              style={{ cursor: "pointer" }}
            >
              <SiSurveymonkey size={30} />
              <p className="ellipsis my-0">
                <span className="fst-italic me-1">{monkey.name} -</span>
                {monkey.specie}
              </p>
              <p className="my-0">{monkey.adoptionDate}</p>
            </div>
          </Col>
          {selectedMonkeyId === monkey.id && showPhotos && (
            <Photos
              top={top}
              left={left}
              pics={monkey.photos}
              setShowPhotos={() => setShowPhotos()}
            />
          )}
        </>
      ))}
      {/* </Row> */}
    </>
  );
}
