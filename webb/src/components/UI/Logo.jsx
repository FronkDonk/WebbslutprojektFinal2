import classes from "./Logo.module.css";
import { useState, useEffect } from "react";

export default function Logo() {
  const [navStyle, setNavStyle] = useState(false);

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
    <p>
      <a className={navStyle ? classes["link-contact"] : classes.link} href="/">
        NextTech
      </a>
    </p>
  );
}
