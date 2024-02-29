import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../../../src/assets/style/parallax.css";
import CarouselMonkey from "../elements/CarouselMonkey";
import clouds from "../../assets/parallax-img/clouds.png";
import sun from "../../assets/parallax-img/sun.svg";
import bck from "../../assets/parallax-img/background.svg";
import vivid from "../../assets/parallax-img/vivid.svg";
import floorMiddle from "../../assets/parallax-img/floor-middle.svg";
import floorBack from "../../assets/parallax-img/floor-bck.svg";
import minorDark from "../../assets/parallax-img/minor-dark.svg";
import light from "../../assets/parallax-img/light.svg";
import darkLeft from "../../assets/parallax-img/dark-tree-left.svg";
import darkRight from "../../assets/parallax-img/dark-tree-right.svg";
import logoDetailed from "../../assets/svg/logo-detailed.svg";
import { useFetchUser } from "../../lib/authContext";
import { useEffect, useState } from "react";
import Adopted from "../elements/Adopted";
import { Row } from "react-bootstrap";

export default function Home() {
  const { user, loading } = useFetchUser();
  const [printedComp, setPrintedComp] = useState(<></>);
  console.log(user, loading, "user, loading");

  const isLoggedComp = (
    <div id="parallax-container">
      <Parallax pages={3} style={{ top: "0", left: "0" }} className="animation">
        <ParallaxLayer offset={0} speed={1.2}>
          <img src={bck} className="animation-layer parallax" id="bck" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.8}>
          <img
            src={floorBack}
            className="animation-layer parallax"
            id="floor-bck"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <img
            src={floorMiddle}
            className="animation-layer parallax"
            id="floor-middle"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.8}>
          <img src={light} className="animation-layer parallax" id="light" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <img src={vivid} className="animation-layer parallax" id="vivid" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <img src={sun} className="animation-layer parallax" id="sun" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <img
            src={minorDark}
            className="animation-layer parallax"
            id="minor-dark"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <img src={clouds} className="animation-layer parallax" id="clouds" />
        </ParallaxLayer>
        {/* header */}
        <ParallaxLayer offset={0} speed={0}>
          <div className="animation-layer parallax">
            <div
              className="glassmorph d-flex align-items-center justify-content-center"
              style={{ width: "fit-content" }}
            >
              <img src={logoDetailed} id="logo-detailed" width={200} />
              <h1 className="display-5 fw-bold ms-4">Monkey Sanctuary</h1>
            </div>
          </div>
        </ParallaxLayer>

        {/* page 2 */}
        <ParallaxLayer offset={1} speed={0.5}>
          <img src={bck} className="animation-layer parallax" id="bck" />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.8}>
          <img
            src={floorBack}
            className="animation-layer parallax"
            id="floor-bck"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0}>
          <img
            src={darkLeft}
            className="animation-layer parallax"
            id="darkLeft"
          />
          <img
            src={darkRight}
            className="animation-layer parallax"
            id="darkRight"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <div className="section">
            <h3
              className="text-success fw-bold"
              style={{ marginTop: "calc(30px + 0.03vw)" }}
            >
              Our Special Guest
            </h3>
            <CarouselMonkey />
          </div>
        </ParallaxLayer>

        {/* page 3 */}
        <ParallaxLayer offset={2} speed={0.5}>
          <div className="bg-labirinth h-100">
            <h3
              className="text-success text-center fw-bold"
              style={{ marginTop: "calc(75px + 0.03vw)", paddingTop: "10%" }}
            >
              On your tree
            </h3>
            <Row className="d-flex mt-5 mx-auto" style={{ width: "50%" }}>
              <Adopted top={"-15%"} left={"0"} />
            </Row>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
  const isNOTloggedComp = (
    <div id="parallax-container">
      <Parallax pages={2} style={{ top: "0", left: "0" }} className="animation">
        <ParallaxLayer offset={0} speed={1.2}>
          <img src={bck} className="animation-layer parallax" id="bck" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.8}>
          <img
            src={floorBack}
            className="animation-layer parallax"
            id="floor-bck"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <img
            src={floorMiddle}
            className="animation-layer parallax"
            id="floor-middle"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.8}>
          <img src={light} className="animation-layer parallax" id="light" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <img src={vivid} className="animation-layer parallax" id="vivid" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <img src={sun} className="animation-layer parallax" id="sun" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <img
            src={minorDark}
            className="animation-layer parallax"
            id="minor-dark"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <img src={clouds} className="animation-layer parallax" id="clouds" />
        </ParallaxLayer>
        {/* header */}
        <ParallaxLayer offset={0} speed={0}>
          <div className="animation-layer parallax">
            <div
              className="glassmorph d-flex align-items-center justify-content-center"
              style={{ width: "fit-content" }}
            >
              <img src={logoDetailed} id="logo-detailed" width={200} />
              <h1 className="display-5 fw-bold ms-4">Monkey Sanctuary</h1>
            </div>
          </div>
        </ParallaxLayer>

        {/* page 2 */}
        <ParallaxLayer offset={1} speed={0.5}>
          <img src={bck} className="animation-layer parallax" id="bck" />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.8}>
          <img
            src={floorBack}
            className="animation-layer parallax"
            id="floor-bck"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0}>
          <img
            src={darkLeft}
            className="animation-layer parallax"
            id="darkLeft"
          />
          <img
            src={darkRight}
            className="animation-layer parallax"
            id="darkRight"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <div className="section">
            <h3
              className="text-success fw-bold"
              style={{ marginTop: "calc(30px + 0.03vw)" }}
            >
              Our Special Guest
            </h3>
            <CarouselMonkey />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );

  useEffect(() => {
    if (!loading) {
      setPrintedComp(user ? isLoggedComp : isNOTloggedComp);
    }
  }, [user, loading]);

  return printedComp;
}
