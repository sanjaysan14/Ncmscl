import React from "react";
import EE from "../Images/EE.png";
import "../Stylesheets/TeamBanner3.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import FFSponsor from "../Images/FFSponsor.png";
export const ElegantElephantInfo = () => {
  return (
    <>
      <div className="Team_Container_Info">
        {/* Elegant Elephant */}
        <div className="ElegantElephant ">
          <div className=" TeamBanner3_Head">
            <h1>Elegant Elephant </h1>
            <h6>Forging Paths, Defying Limits</h6>
          </div>
          <div className="Teamates_List_Container">
            <div className="Teamates_List">
              <div className="Teamate">
                <h3>Sanjay S</h3>
                <h6>Technical Coordinator</h6>
              </div>
              <div className="Teamate">
                <h3>Impana HH</h3>
                <h6>Team Coordinator</h6>
              </div>
              <div className="Teamate">
                <h3>Nikhil</h3>
                <h6>Team Coordinator</h6>
              </div>
              <div className="Teamate">
                <h3>Deepashree</h3>
                <h6>Team Coordinator</h6>
              </div>
              <div className="Teamate">
                <h3>Pavan </h3>
                <h6>Team Coordinator</h6>
              </div>
            </div>
            <div>
              <img src={EE} alt="Teiffic Tigers" />
            </div>
            <div className="Teamates_List_Right">
              <div className="Teamate_Right">
                <h3>Sanjay S</h3>
                <h6>Technical Coordinator</h6>
              </div>
              <div className="Teamate_Right">
                <h3>Impana HH</h3>
                <h6>Team Coordinator</h6>
              </div>
              <div className="Teamate_Right">
                <h3>Nikhil</h3>
                <h6>Team Coordinator</h6>
              </div>
              <div className="Teamate_Right">
                <h3>Deepashree</h3>
                <h6>Team Coordinator</h6>
              </div>
              <div className="Teamate_Right">
                <h3>Pavan </h3>
                <h6>Team Coordinator</h6>
              </div>
            </div>
          </div>
          <div className="Socialmedia">
            {" "}
            <h4>Follow Us </h4>
            <FontAwesomeIcon className="Icon4" icon={faInstagram} />
          </div>
          <div className="Sponsor">
            {" "}
            <h4>Sponsor</h4>
            <img src={FFSponsor} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ElegantElephantInfo;
