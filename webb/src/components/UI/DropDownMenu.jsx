import { useState, useEffect } from "react";
import classes from "./DropDownMenu.module.css";
import AnimatedButton from "./AnimatedButton";
import Logo from "./Logo";

export default function DropDownMenu(props) {
  const [navStyle, setNavStyle] = useState(false);
  function closeMenuToggle() {
    props.handleMenuToggle();

    console.log("hallåja");
  }

  useEffect(() => {
    switch (window.location.pathname) {
      case "/Contact":
        setNavStyle(true);
        break;
      default:
        setNavStyle(false);
        break;
    }
  }, [window.location.pathname]);

  return (
    <>
      <div className={classes.dropDownWrapper}>
        <div className={navStyle ? classes.navDropDown : classes.dropDown}>
          <div className={classes.dropDownExitAndLogo}>
            <Logo />
            {/* Knappen för att stänga dropdown-meny */}
            <svg
              onClick={closeMenuToggle}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
          {/* Dropdown-menyobjekt */}
          <div
            onClick={() => (window.location.href = "#")}
            className={classes.dropDownItem}
          >
            <h1>Products</h1>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              ></path>
            </svg>
          </div>
          <div
            onClick={() => (window.location.href = "/Contact")}
            className={classes.dropDownItem}
          >
            {/* Innehållet i huvudrubriken */}
            <h1>Contact</h1>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              ></path>
            </svg>
          </div>
          <div
            onClick={() => (window.location.href = "#")}
            className={classes.dropDownItem}
          >
            <h1>Documentation</h1>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              ></path>
            </svg>
          </div>
          <div
            onClick={() => (window.location.href = "#")}
            className={classes.dropDownItem}
          >
            <h1>Products</h1>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              ></path>
            </svg>
          </div>
          <div
            onClick={() => (window.location.href = "#")}
            className={classes.dropDownItem}
          >
            <h1>Products</h1>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              ></path>
            </svg>
          </div>
          <div className={classes.signInContainer}>
            <AnimatedButton
              buttonLink="/sign-in"
              buttonText="Sign in"
              class="dropDownButton"
              arrowFill="white"
              arrowStroke="white"
            />
          </div>
        </div>
      </div>
    </>
  );
}
