import "../App.css";
import { useState } from "react";

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

function MyForm() {
  const handleVillkor = () => {
    setVillkor(!villkor);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(villkor);

    if (!villkor) {
      alert("Du måste godk änna vilkoren!");
    } else if (inputs.email === "" || inputs.email === undefined) {
      alert("du måste skriva in din mail");
    } else if (inputs.name === "" || inputs.name === undefined) {
      alert("du måste skriva in ditt namn");
    } else {
      alert("Meddelande från " + inputs.email + " skickat!");
    }
  };

  const [inputs, setInputs] = useState(false);
  const [villkor, setVillkor] = useState(false);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Ditt namn: <br></br>
          <input
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          Din email: <br></br>
          <input
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          Ditt meddelande:<br></br>
          <textarea
            name="textarea"
            value={inputs.textarea}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          Jag har godkänt villkoren:
          <input
            type="checkbox"
            name="check"
            value={villkor}
            onChange={handleVillkor}
          />
        </label>
        <br></br>
        <input type="submit"></input>
      </form>
    </>
  );
}

function Djur(props) {
  return (
    <>
      Jag är en {props.art}
      <br></br>
    </>
  );
}

function AllaDjur() {
  const djur = [
    { id: 1, art: "hund" },
    { id: 2, art: "katt" },
    { id: 3, art: "hamster" },
    { id: 4, art: "igelkott" },
    { id: 5, art: "ko" },
    { id: 6, art: "häst" },
  ];

  return (
    <>
      {djur.map((el) => (
        <Djur key={el.id} art={el.art} />
      ))}
    </>
  );
}

export function Contact() {
  return (
    <>
      <Djur />
      <MyForm />
      <AllaDjur />
    </>
  );
}

export default Contact;
