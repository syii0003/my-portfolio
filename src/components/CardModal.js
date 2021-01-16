//main UI for the card after opening the chest
import React from "react";
import chestCloseSound from "../assets/sound/close-chest.mp3";
import { useTransition, a } from "react-spring";
import Navbar from "./Navbar";
//declare the close chest sound
const closeChest = new Audio(chestCloseSound);

const CardModal = ({ open, setOpen }) => {
  const closeModal = () => {
    setOpen(!open);
    closeChest.volume = 0.3;
    closeChest.play();
  };

  const transitions = useTransition(open, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <a.div key={key} style={props} className="modal-chest-wrapper">
          <div className="overlay">
            <div className="modal-chest">
              <div className="top">
                <div className="header">
                  <h4>Shuhao Yi</h4>
                  <div onClick={closeModal} className="close">
                    x
                  </div>
                </div>
              </div>
              <div className="middle">
                <div className="left">
                  <div className="myCard">
                    <div className="myPic">
                      <div className="circle"></div>
                      <img
                        src={require("../assets//images/myPhoto.png")}
                        alt="Shuhao Yi"
                      ></img>
                    </div>
                    <div className="info">
                      <h6>Future-Ready Frontend Developer</h6>
                      <h4> -- </h4>
                      <h6>Master of IT from Monash University</h6>
                      <h6>1 year overseas working experience</h6>
                      <h6>Mandarin && English</h6>
                      <br />
                      <h6>More about me via : </h6>
                      <div>
                        <a
                          href="https://www.linkedin.com/in/shuhao-yi/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={require("../assets/images/logo-linkedin.svg")}
                            alt="linkedin"
                            className="infoLogo"
                          />
                        </a>
                        <a
                          href="https://github.com/syii0003"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={require("../assets/images/logo-github.svg")}
                            alt="github"
                            className="infoLogo"
                          />
                        </a>
                        <a
                          href="mailto:tommyysshh@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={require("../assets/images/logo-email.svg")}
                            alt="gmail"
                            className="infoLogo"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <Navbar />
                </div>
              </div>
            </div>
          </div>
        </a.div>
      )
  );
};

export default CardModal;
