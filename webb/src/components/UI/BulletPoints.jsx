import React from "react";
import classes from "./BulletPoints.module.css";
import checkIcon from "../../assets/1-circle.svg";

export default function BulletPoints(props) {
  return (
    <div className={classes["form-side-text"]}>
      <h1>{props.title}</h1>
      <div className={classes["form-side-text-description"]}>
        <h4>With us you can:</h4>
        <div className={classes["icon-and-text"]}>
          <img src={checkIcon} alt="cool check icon" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
            molestiae dolorem.
          </p>
        </div>
        <div className={classes["icon-and-text"]}>
          <img src={checkIcon} alt="cool check icon" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            Debitis, molestiae dolorem.
          </p>
        </div>
        <div className={classes["icon-and-text"]}>
          <img src={checkIcon} alt="cool check icon" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
}
