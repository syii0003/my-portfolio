//main UI for the card after opening the chest
import React from "react";
import chestCloseSound from "../assets/sound/close-chest.mp3";
import { useTransition, a } from "react-spring";
import { Button } from "react-bootstrap";
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
                <div className="myCard">
                  <div className="myPic">
                    <div className="circle"></div>
                    <img
                      src={require("../assets/myPhoto.png")}
                      alt="Shuhao Yi"
                    ></img>
                  </div>
                  <div className="info">
                    <h5>Future-Ready Frontend Developer</h5>
                    <div className="infoPages">
                      <Button>My Resume</Button>
                      <Button>Experience</Button>
                    </div>
                    <div className="infoPages">
                      <Button>Projects</Button>
                      <Button>Contact Me</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a.div>
      )
  );
};

export default CardModal;
