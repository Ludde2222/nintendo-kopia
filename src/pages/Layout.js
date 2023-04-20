import "../App.css";
import { Outlet, Link } from "react-router-dom";
import Main from "./Main";

/*
Hjälpsaker för att underlätta att hämta filer från foldern './img/
*/
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = importAll(
  require.context("../images", false, /\.(png|jpe?g|svg|webp|jfif)$/)
);
// Slut på hjälp saker                    ^ ÄNDRA PÅ DEN FÖR ATT ÄNDRA PÅ BILD FOLDERN

function Years() {
  return (
    <div className="years">
      <h1 className="a">ALLA</h1>
      <h1 className="a">2023</h1>
      <h1 className="a">2022</h1>
      <h1 className="a">2021</h1>
      <h1 className="a">2020</h1>
      <h1 className="a">2019</h1>
      <h1 className="a">2018</h1>
      <h1 className="">2017</h1>
    </div>
  );
}

function ReleaseBar() {
  return (
    <>
      <div className="relase-bar-container">
        <h1 className="relase-bar-text">RELEASELISTA</h1>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <>
      <div className="navcontainer">
        <img className="logo" src={images["logo.png"]} alt="logo"></img>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="navtext">NINTENDO SWITCH</h1>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="navtext">SPEL</h1>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="navtext">AMIIBO</h1>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="navtext">NYHETER</h1>
        </Link>
        <Link to="contact" style={{ textDecoration: "none" }}>
          <h1 className="navtext">SUPPORT</h1>{" "}
        </Link>
        <div className="navigation">
          <img className="search" src={images["search.png"]} alt="search"></img>
          <img className="menu" src={images["menu.png"]} alt="menu"></img>'
        </div>
      </div>
    </>
  );
}

function GridContainer() {
  return (
    <>
      <div className="gridcontainer">
        <Navbar />
        <Outlet />
        <Years />
        <ReleaseBar />
      </div>
      ;
    </>
  );
}

export function Layout() {
  return (
    <>
      <GridContainer />
    </>
  );
}

export default Layout;
