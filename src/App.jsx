import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ciseaux from "./assets/ciseaux.png";
import feuille from "./assets/feuille.png";
import pierre from "./assets/pierre.png";
import lezard from "./assets/lezard.png";
import spock from "./assets/spock.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="col">
        <div onClick={play("pierre")}>
          <img src={pierre} className="logo" alt="React logo" />
        </div>
        <div onClick={play("feuille")}>
          <img src={feuille} className="logo" alt="React logo" />
        </div>
        <div onClick={play("ciseaux")}>
          <img src={ciseaux} className="logo" alt="React logo" />
        </div>
        <div onClick={play("lezard")}>
          <img src={lezard} className="logo" alt="React logo" />
        </div>
        <div onClick={play("spock")}>
          <img src={spock} className="logo" alt="React logo" />
        </div>
      </div>
    </div>
  );

  function play(played) {
    const choices = ["pierre", "ciseaux", "feuille", "lezard", "spock"];

    let ennemy = choices[Math.floor(Math.random() * 5)];
    if (played == "pierre") {
      if (ennemy == "ciseaux" || ennemy == "lezard") {
        // TODO GAGNER
      } else if (ennemy == "feuille" || ennemy == "spock") {
        //TODO Perdu
      } else {
        //TODO MATCH NULL
      }
    } else if (played === "feuille") {
      if (ennemy === "pierre" || ennemy === "spock") {
        // TODO GAGNER
      } else if (ennemy === "ciseaux" || ennemy === "lezard") {
        //TODO Perdu
      } else {
        //TODO MATCH NULL
      }
      // win/loss for ciseaux
    } else if (played === "ciseaux") {
      if (ennemy === "feuille" || ennemy === "lezard") {
        // TODO GAGNER
      } else if (ennemy === "pierre" || ennemy === "spock") {
        //TODO Perdu
      } else {
        //TODO MATCH NULL
      }
      // win/loss for lezard
    } else if (played === "lezard") {
      if (ennemy === "spock" || ennemy === "feuille") {
        // TODO GAGNER
      } else if (ennemy === "pierre" || ennemy === "ciseaux") {
        //TODO Perdu
      } else {
        //TODO MATCH NULL
      }
      // win/loss for spock
    } else {
      if (ennemy === "ciseaux" || ennemy === "pierre") {
        // TODO GAGNER
      } else if (ennemy === "lezard" || ennemy === "feuille") {
        //TODO Perdu
      } else {
        //TODO MATCH NULL
      }
    }
  }
}

export default App;
