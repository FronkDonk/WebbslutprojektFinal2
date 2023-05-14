import classes from "./Nav.module.css";
import { useState, useEffect, useRef, useContext } from "react";
import gsap from "gsap";
import AnimatedButton from "../../UI/AnimatedButton";
import { AuthContext } from "../../Contexts/AuthContext";

export default function Nav(props) {
  const [navStyle, setNavStyle] = useState(false);
  const arrowLineRef = useRef(null);
  const arrowHeadRef = useRef(null);
  const { currentUser } = useContext(AuthContext);

  function handleMouseEnter() {
    gsap.killTweensOf([arrowLineRef.current, arrowHeadRef.current]);

    gsap.to(arrowLineRef.current, {
      opacity: 1,
      duration: 0.7,
    });

    gsap.to(arrowHeadRef.current, {
      x: "12.7",
      duration: 0.4,
    });
  }

  function handleMouseLeave() {
    gsap.killTweensOf([arrowLineRef.current, arrowHeadRef.current]);

    gsap.to(arrowLineRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power1.out",
    });

    gsap.to(arrowHeadRef.current, {
      x: "0",
      duration: 0.7,
      ease: "power1.out",
    });
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

  function dropDownMenuHandler() {
    props.handleMenuToggle();
    console.log("click funktion kallad");
  }

  return (
    <nav className={navStyle ? classes["contact-nav"] : classes.nav}>
      <div className={classes.dropdown} onClick={dropDownMenuHandler}>
        <p>
          <a
            className={navStyle ? classes["link-contact"] : classes.link}
            href="/"
          >
            NextTech
          </a>
        </p>
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.75 6.75H20.25M3.75 12H20.25M12 17.25H20.25"
            stroke={navStyle ? "#12182f" : "white"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className={classes["navbar-container"]}>
        <p>
          <a
            className={navStyle ? classes["link-contact"] : classes.link}
            href="/"
          >
            NextTech
          </a>
        </p>
        <ul className={classes["navbar-list"]}>
          <li>
            <a
              className={navStyle ? classes["link-contact"] : classes.link}
              href="#"
            >
              Products
            </a>
          </li>
          <li>
            <a
              className={navStyle ? classes["link-contact"] : classes.link}
              href="/Contact"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              className={navStyle ? classes["link-contact"] : classes.link}
              href="#"
            >
              Documentation
            </a>
          </li>
        </ul>
        {!navStyle && (
          <AnimatedButton
            class="navbarSignup"
            buttonText={currentUser ? "Dashboard" : "Sign in"}
            buttonLink={currentUser ? "/dashboard" : "/sign-in"}
            arrowFill="white"
            arrowStroke="white"
          />
        )}
        {navStyle && (
          <AnimatedButton
            class="navbarContactSignup"
            buttonText="Sign in"
            buttonLink="/sign-in"
            arrowFill="white"
            arrowStroke="white"
          />
        )}
      </div>
    </nav>
  );
}
