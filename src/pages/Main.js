import "../App.css";
import data from "../settings/games.json";
import data2 from "../settings/games2.json";

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

const release_images = importAll(
  require.context("../relase-images", false, /\.(png|jpe?g|svg|webp|jfif)$/)
);
// Slut på hjälp saker                    ^ ÄNDRA PÅ DEN FÖR ATT ÄNDRA PÅ BILD FOLDERN

function MainContent() {
  return (
    <>
      <Flexer />
      <RightFlexer />
    </>
  );
}

function FlexerContent(props) {
  return (
    <div className="grid-container">
      <div className="flexer-content1">
        <img className="picture" src={images[props.src]} alt={props.alt}></img>
      </div>
      <div className="flexer-content2">
        <h2 className="title">{props.titel}</h2>
        <p className="date">{props.lansering}</p>
        <p className="desc">{props.description}</p>
      </div>
    </div>
  );
}

function RightFlexerContent(props) {
  return (
    <div className="right-grid-container">
      <div className="flexer-content2">
        <h2 className="title2">{props.title2}</h2>
        <img
          className="picture2"
          src={release_images[props.src]}
          alt={props.alt}
        ></img>
      </div>
    </div>
  );
}

function Flexer() {
  for (var i = 0; i < data.length; i++) {
    data[i].id = i;
  }
  return (
    <>
      <div className="pictures">
        {data.map((el) => (
          <FlexerContent
            titel={el.titel}
            key={el.id}
            src={el.src}
            alt={el.alt}
            platform={el.platform}
            year={el.year}
            description={el.description}
            lansering={el.lansering}
            class={el.class}
          />
        ))}
      </div>
    </>
  );
}

function RightFlexer() {
  for (var i = 0; i < data2.length; i++) {
    data[i].id = i;
  }
  return (
    <>
      <div className="pictures2">
        {data2.map((el) => (
          <RightFlexerContent titel={el.title2} key={el.id} src={el.src} />
        ))}
      </div>
    </>
  );
}

export default MainContent;
