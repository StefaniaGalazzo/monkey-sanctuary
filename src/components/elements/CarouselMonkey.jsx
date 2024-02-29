import Carousel from "react-bootstrap/Carousel";
import orango from "../../assets/svg/orango.svg";
import mandrillo from "../../assets/svg/mandrillo.svg";
import ustiti from "../../assets/svg/ustiti-small.svg";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { GiBodyHeight, GiWeightScale, GiDeathSkull } from "react-icons/gi";
import { BsFillHeartPulseFill } from "react-icons/bs";

export default function CarouselMonkey() {
  // eslint-disable-next-line no-unused-vars
  const [imgs, setImgs] = useState([
    {
      id: Math.random().toString(36).substr(2, 9) + "_" + new Date().getTime(),
      name: "Mandrill",
      src: mandrillo,
      details: {
        order: "Primates",
        species: "Mandrillus Sphinx",
        status: "VU-Vulnerable",
        height: "75-95cm",
        weight: "19-37kg",
        longevity: "15-25y",
        reasons:
          "Caused by deforestation and destruction of its habitat and hunting for meat. Mandrills are particularly threatened in the Republic of theongo",
      },
    },
    {
      id: Math.random().toString(36).substr(2, 9) + "_" + new Date().getTime(),
      name: "Orangutan",
      src: orango,
      details: {
        order: "Primates",
        species: "Pongo Pygmaeus",
        status: "CR-Critic",
        height: "100-130cm",
        weight: "40-60kg",
        longevity: "35-45y",
        reasons:
          "Caused by habitat destruction, meat trade, climate change, caught to be sold as pets, usually involving the killing of their mothers",
      },
    },
    {
      id: Math.random().toString(36).substr(2, 9) + "_" + new Date().getTime(),
      name: "Uistitì Pigmeo",
      src: ustiti,
      details: {
        order: "Primates",
        species: "Callithrix Pygmaea",
        status: "LC-Least Concern",
        height: "30-40cm",
        weight: "60-70gr",
        longevity: "35-45y",
        reasons:
          "A non-endangered but highly appreciated guest in our park, valued for its distinctive size.",
      },
    },
  ]);

  const [randomBackground, setRandomBackground] = useState([
    "top left",
    "top center",
    "top right",
    "center left",
    "center center",
    "center right",
    "bottom left",
    "bottom center",
    "bottom right",
  ]);
  useEffect(() => {
    selectRandomBackgroundPosition();
  }, [imgs]);

  return (
    <Carousel>
      {imgs &&
        imgs.length > 0 &&
        imgs.map((monkey, indx) => (
          <Carousel.Item key={monkey.id}>
            <div
              className="background-custom"
              style={{
                backgroundPosition: randomBackground[indx],
              }}
            ></div>
            <Row className="align-items-center text-white">
              <Col sm={12} md={5}>
                <img
                  src={monkey.src}
                  width={
                    monkey.name.toLowerCase().includes("uistit") ? "250px" : ""
                  }
                />
              </Col>
              <Col sm={12} md={7} className="p-5">
                <h3>{monkey.name}</h3>
                <h6>{monkey.details.species}</h6>

                <div className="d-flex g-3 justify-content-center">
                  <p className="tag">
                    <GiBodyHeight size={20} className="me-2" />
                    {monkey.details.height}
                  </p>
                  <p className="tag">
                    <GiWeightScale size={20} className="me-2" />
                    {monkey.details.weight}
                  </p>
                  <p className="tag">
                    <BsFillHeartPulseFill size={20} className="me-2" />
                    {monkey.details.longevity}
                  </p>
                </div>
                <p className="my-3">
                  Conservation Status:{"  "}
                  <span className="tag">
                    <GiDeathSkull size={20} className="me-2" />
                    {monkey.details.status}
                  </span>
                </p>
                <p>{monkey.details.reasons}</p>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
    </Carousel>
  );
  function selectRandomBackgroundPosition() {
    setRandomBackground(
      randomBackground.map(
        () =>
          randomBackground[Math.floor(Math.random() * randomBackground.length)]
      )
    );
  }
}
