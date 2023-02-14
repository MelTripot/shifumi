import { useCallback, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import ciseaux from "./assets/ciseaux.png";
import feuille from "./assets/feuille.png";
import pierre from "./assets/pierre.png";
import lezard from "./assets/lezard.png";
import spock from "./assets/spock.png";
import "./App.css";

const choices = ["pierre", "ciseaux", "feuille", "lezard", "spock"];
const getRandomChoice = () => {
  return choices[Math.floor(Math.random() * 5)];
};

function App() {
  const [ennemy, setEnnemy] = useState(getRandomChoice());
  const [played, setPlayed] = useState(null);

  console.log("execution", Date.now);

  const result = useMemo(() => {
    console.log(
      "vous evez jouer" + played + "votre adversaire a jouer" + ennemy
    );
    if (played == "pierre") {
      if (ennemy == "ciseaux" || ennemy == "lezard") {
        // setTimeout(() => {
        //   setEnnemy(getRandomChoice());
        //   setPlayed(null);
        // }, 2000);
        return "Victoire";
      } else if (ennemy == "feuille" || ennemy == "spock") {
        // setTimeout(() => {
        //   setEnnemy(getRandomChoice());
        //   setPlayed(null);
        // }, 2000);
        return "Défaite";
      } else {
        // setTimeout(() => {
        //   setEnnemy(getRandomChoice());
        //   setPlayed(null);
        // }, 2000);
        return "Match null";
      }
    } else if (played === "feuille") {
      if (ennemy === "pierre" || ennemy === "spock") {
        return "Victoire";
      } else if (ennemy === "ciseaux" || ennemy === "lezard") {
        return "Défaite";
      } else {
        return "Match null";
      }
      // win/loss for ciseaux
    } else if (played === "ciseaux") {
      if (ennemy === "feuille" || ennemy === "lezard") {
        return "Victoire";
      } else if (ennemy === "pierre" || ennemy === "spock") {
        return "Défaite";
      } else {
        return "Match null";
      }
      // win/loss for lezard
    } else if (played === "lezard") {
      if (ennemy === "spock" || ennemy === "feuille") {
        return "Victoire";
      } else if (ennemy === "pierre" || ennemy === "ciseaux") {
        return "Défaite";
      } else {
        return "Match null";
      }
      // win/loss for spock
    } else {
      if (ennemy === "ciseaux" || ennemy === "pierre") {
        return "Victoire";
      } else if (ennemy === "lezard" || ennemy === "feuille") {
        return "Défaite";
      } else {
        return "Match null";
      }
      return "Victoire";
    }
  }, [ennemy, played]);

  const play = useCallback(
    (value) => {
      setPlayed(value);
      setEnnemy(getRandomChoice());
    },
    [setPlayed]
  );

  return (
    <div className="App">
      <div className="col">
        <div onClick={() => play("pierre")}>
          <img src={pierre} className="logo" alt="React logo" />
        </div>
        <div onClick={() => play("feuille")}>
          <img src={feuille} className="logo" alt="React logo" />
        </div>
        <div onClick={() => play("ciseaux")}>
          <img src={ciseaux} className="logo" alt="React logo" />
        </div>
        <div onClick={() => play("lezard")}>
          <img src={lezard} className="logo" alt="React logo" />
        </div>
        <div onClick={() => play("spock")}>
          <img src={spock} className="logo" alt="React logo" />
        </div>
      </div>
      {/* affichage du jeu de l'adverseraise  */}
      <div>Ennemy: {ennemy}</div>
      <div>Played: {played}</div>
      <div>Resultat : {result}</div>
    </div>
  );
}

export default App;
