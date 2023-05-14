import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import classes from "./AnimatedButton.css"

export default function AnimatedButton(props) {
  const arrowLineRef = useRef(null);
  const arrowHeadRef = useRef(null);

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

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={props.class}
      >
        <a href={props.buttonLink}>
          {props.buttonText}{" "}
          <span>
            <svg
              width="50"
              height="50"
              viewBox="0 0 82 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className={classes.arrowContainer}>
                <g id="arrow-right-short 1">
                  <path
                    ref={arrowHeadRef}
                    id="Arrow-head"
                    className="arrowHead"
                    d="M25.0374 34.0912L31.0758 40.1268V42.9393L25.0374 48.9749C24.7733 49.239 24.625 49.5971 24.625 49.9705C24.625 50.344 24.7733 50.7021 25.0374 50.9662C25.3015 51.2302 25.6596 51.3786 26.033 51.3786C26.4065 51.3786 26.7646 51.2302 27.0287 50.9662L35.4662 42.5287C35.5971 42.398 35.701 42.2428 35.7719 42.072C35.8428 41.9011 35.8793 41.718 35.8793 41.533C35.8793 41.3481 35.8428 41.1649 35.7719 40.9941C35.701 40.8232 35.5971 40.668 35.4662 40.5374L27.0287 32.0999C26.7646 31.8358 26.4065 31.6875 26.033 31.6875C25.6596 31.6875 25.3015 31.8358 25.0374 32.0999C24.7733 32.364 24.625 32.7221 24.625 33.0955C24.625 33.469 24.7733 33.8271 25.0374 34.0912Z"
                    fill={props.arrowFill}
                  />
                  <path
                    ref={arrowLineRef}
                    id="Arrow-line"
                    className="arrowLine"
                    d="M36.375 41.5312C36.375 41.2909 36.4705 41.0604 36.6404 40.8904C36.8104 40.7205 37.0409 40.625 37.2813 40.625H53.0741V42.4375H37.2813C37.0409 42.4375 36.8104 42.342 36.6404 42.1721C36.4705 42.0021 36.375 41.7716 36.375 41.5312Z"
                    fill={props.arrowFill}
                    stroke={props.arrowStroke}
                  />
                </g>
              </g>
            </svg>
          </span>
        </a>
      </div>
    </>
  );
}
