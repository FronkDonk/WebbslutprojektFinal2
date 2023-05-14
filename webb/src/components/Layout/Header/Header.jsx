import classes from "./Header.module.css";
import softwareImg from "../../../assets/Softwareagain.svg";
import Nav from "./Nav";
import ColorfulCanvas from "./ColorfulCanvas";
import React, { useRef, useEffect, useState } from "react";
import AnimatedButton from "../../UI/AnimatedButton";
import { gsap } from "gsap";
import DropDownMenu from "../../UI/DropDownMenu";

export default function Header() {
  const [showNavMenu, setShowNavMenu] = useState(false);

  function handleMenuToggle() {
    setShowNavMenu(!showNavMenu);
    console.log("hej");
  }

  return (
    <>
      <Nav showNavMenu={showNavMenu} handleMenuToggle={handleMenuToggle} />

      <header id="canv" className={classes.header}>
        <div className={classes["header-content"]}>
          <div className={classes["header-content-text"]}>
            <h1>
              Elevate Your <br /> Business
            </h1>
            <h3>
              And maximize efficiency and profitability <br /> with our advanced
              software solutions
            </h3>
            <div className={classes.buttonContainer}>
              {/* AnimatedButton komponenterna */}
              <AnimatedButton
                buttonLink="/sign-in"
                buttonText="Start now"
                class="startNow"
                arrowFill="white"
                arrowStroke="white"
              />
              <AnimatedButton
                buttonLink="/Contact"
                buttonText="Contact sales"
                class="contactSales"
                arrowFill="#12182f"
                arrowStroke="#12182f"
              />
            </div>
          </div>
          <div className={classes["header-content-image"]}>
            <img src={softwareImg} alt="tratt" />
          </div>
        </div>
      </header>
    </>
  );
}
