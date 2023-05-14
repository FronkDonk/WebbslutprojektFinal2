import Section from "../components/Layout/Section/Section";
import Header from "../components/Layout/Header/Header";
import classes from "./Home.module.css";
import Nav from "../components/Layout/Header/Nav";
import ColorfulCanvas from "../components/Layout/Header/ColorfulCanvas";
import HeaderTilt from "../components/Layout/Header/HeaderTilt";
import HeaderFiller from "../components/Layout/Header/HeaderFiller";
import ImageSlider from "../components/UI/ImageSlider";

export default function Home() {
  return (
    <>
      <div className={classes.homeContainer}>
        <div className={classes.headerContainer}>
          <ColorfulCanvas />

          <Header />
        </div>
        <Section />
        <ImageSlider />
      </div>
    </>
  );
}
