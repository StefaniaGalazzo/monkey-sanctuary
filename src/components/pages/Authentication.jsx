import { useState } from "react";
import { useSpring } from "react-spring";
import LoginRegister from "../elements/LoginRegister";
import Monkey from "../monkey/Monkey";

export default function Authentication() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [eyebrowRotation, setEyebrowRotation] = useState(0);
  const [showHands, setShowHands] = useState(false);

  //catturo il movimento del mouse e calcolo posizioni e rotazioni el
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const deltaX = clientX - window.innerWidth / 2;
    const deltaY = clientY - window.innerHeight / 2;

    const angle = Math.atan2(deltaY, deltaX);
    const degrees = (angle * 3) / Math.PI;

    setCursorPosition({ x: clientX, y: clientY });
    setEyebrowRotation(degrees);
  };
  const handleMouseLeave = () => {
    setCursorPosition({ x: 0, y: 0 });
    setEyebrowRotation(0);
    setShowHands(false);
  };
  const handlePasswordClick = () => {
    setShowHands(true);
  };
  // HANDS (appear onclick on password input)
  const handsSpring = useSpring({
    transform: showHands
      ? `translate(${cursorPosition.x / 50}px, ${
          cursorPosition.y / 18 - 200
        }px)`
      : `translate(${cursorPosition.x / 10000}px, ${
          cursorPosition.y / 10000
        }px)`,
  });
  //FACE
  const faceSpring = useSpring({
    transform: `skewY(${-eyebrowRotation}deg)`,
  });
  //EYES
  const eyeSpringLeft = useSpring({
    transform: `translate(${cursorPosition.x / 50}px, ${
      cursorPosition.y / 15
    }px) `,
  });
  const eyeSpringRight = useSpring({
    transform: `translate(${cursorPosition.x / 50}px, ${
      cursorPosition.y / 15
    }px) `,
  });
  //EYEBROWS
  const eyeBrowSpringLeft = useSpring({
    transform: `translate(${cursorPosition.x / 25}px, ${
      cursorPosition.y / 25
    }px) rotate(${-eyebrowRotation}deg) `,
  });
  const eyeBrowSpringRight = useSpring({
    transform: `translate(${cursorPosition.x / 25}px, ${
      cursorPosition.y / 25
    }px) rotate(${eyebrowRotation}deg) `,
  });
  //EARS
  const earSpring = useSpring({
    transform: `translate(${-cursorPosition.x / 100}px, ${
      -cursorPosition.y / 100
    }px) skew(${eyebrowRotation}deg, ${-eyebrowRotation}deg)`,
  });
  //MOUTH
  const mouthSpring = useSpring({
    transform: `translate(${cursorPosition.x / 25}px, ${
      cursorPosition.y / 15
    }px) rotate(${eyebrowRotation}deg) `,
  });
  //HAIR
  const hairSpring = useSpring({
    transform: `translate(${cursorPosition.x / 50}px, ${
      cursorPosition.y / 50
    }px) rotate(${eyebrowRotation}deg) `,
  });
  //other
  const expressionsSpringDetails = useSpring({
    transform: `translate(${-cursorPosition.x / 120}px, ${
      -cursorPosition.y / 120
    }px) rotate(${-eyebrowRotation}deg) `,
  });

  return (
    <div id="authPage">
      <div id="monkey">
        <Monkey
          faceSpring={faceSpring}
          eyeSpringLeft={eyeSpringLeft}
          eyeSpringRight={eyeSpringRight}
          hairSpring={hairSpring}
          expressionsSpringDetails={expressionsSpringDetails}
          mouthSpring={mouthSpring}
          eyeBrowSpringRight={eyeBrowSpringRight}
          eyeBrowSpringLeft={eyeBrowSpringLeft}
          earSpring={earSpring}
          handsSpring={handsSpring}
        />
      </div>
      <div
        id="form-container"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <LoginRegister
          isLoginForm
          handlePasswordClick={handlePasswordClick}
          handleMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
}
