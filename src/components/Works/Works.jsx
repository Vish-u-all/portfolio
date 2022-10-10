import React, { useContext } from "react";
import "./Works.css";
// import Upwork from "../../img/Upwork.png";
// import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/surveyaan-icon.png";
// import Shopify from "../../img/Shopify.png";
// import Facebook from "../../img/Facebook.png";
import Angular from '../../img/angular-icon.png';
import Firebase from '../../img/firebase-icon.png';
import Python from '../../img/python-icon.png';
import GCP from '../../img/g-cloud-icon.png';
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll';

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          {/* <spane>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </spane> */}
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Angular} alt="" width={160}/>
          </div>
          <div className="w-secCircle">
            <img src={Firebase} alt="" width={160}/>
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" width={160}/>
          </div>{" "}
          <div className="w-secCircle">
            <img src={Python} alt="" width={160}/>
          </div>
          <div className="w-secCircle">
            <img src={GCP} alt="" width={160} />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
