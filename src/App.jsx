import { useCallback, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import ciseaux from "./assets/ciseaux.png";
import feuille from "./assets/feuille.png";
import pierre from "./assets/pierre.png";
import lezard from "./assets/lezard.png";
import spock from "./assets/spock.png";
import matchNul from "./assets/matchNul.png";
import gameover from "./assets/gameover.png";
import victory from "./assets/victory.png";
import "./App.css";

const choices = ["pierre", "ciseaux", "feuille", "lezard", "spock"];
const getRandomChoice = () => {
  return choices[Math.floor(Math.random() * 5)];
};

function App() {
  const [ennemy, setEnnemy] = useState(getRandomChoice());
  const [played, setPlayed] = useState(null);
  Notification.requestPermission().then((result) => {
    console.log(result);
  });

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
        new Notification("Victoire");
        return "Victoire";
      } else if (ennemy == "feuille" || ennemy == "spock") {
        // setTimeout(() => {
        //   setEnnemy(getRandomChoice());
        //   setPlayed(null);
        // }, 2000);
        new Notification("Défaite");
        return "Défaite";
      } else {
        // setTimeout(() => {
        //   setEnnemy(getRandomChoice());
        //   setPlayed(null);
        // }, 2000);
        new Notification("Match null");
        return "Match null";
      }
    } else if (played === "feuille") {
      if (ennemy === "pierre" || ennemy === "spock") {
        new Notification("Victoire");
        return "Victoire";
      } else if (ennemy === "ciseaux" || ennemy === "lezard") {
        new Notification("Défaite");
        return "Défaite";
      } else {
        new Notification("Match null");
        return "Match null";
      }
      // win/loss for ciseaux
    } else if (played === "ciseaux") {
      if (ennemy === "feuille" || ennemy === "lezard") {
        new Notification("Victoire");
        return "Victoire";
      } else if (ennemy === "pierre" || ennemy === "spock") {
        new Notification("Défaite");
        return "Défaite";
      } else {
        new Notification("Match null");
        return "Match null";
      }
      // win/loss for lezard
    } else if (played === "lezard") {
      if (ennemy === "spock" || ennemy === "feuille") {
        new Notification("Victoire");
        return "Victoire";
      } else if (ennemy === "pierre" || ennemy === "ciseaux") {
        new Notification("Défaite");
        return "Défaite";
      } else {
        new Notification("Match null");
        return "Match null";
      }
      // win/loss for spock
    } else {
      if (ennemy === "ciseaux" || ennemy === "pierre") {
        new Notification("Victoire");
        return "Victoire";
      } else if (ennemy === "lezard" || ennemy === "feuille") {
        new Notification("Défaite");
        return "Défaite";
      } else {
        new Notification("Match null");
        return "Match null";
      }
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
      {/* affichage du jeu de l'adverseraise  */}
      <div>
        <div>L'adeversaire a : {ennemy}</div>
        {ennemy == "pierre" && (
          <img src={pierre} className="logo" alt="React logo" />
        )}
        {ennemy == "feuille" && (
          <img src={feuille} className="logo" alt="React logo" />
        )}
        {ennemy == "ciseaux" && (
          <img src={ciseaux} className="logo" alt="React logo" />
        )}
        {ennemy == "lezard" && (
          <img src={lezard} className="logo" alt="React logo" />
        )}
        {ennemy == "spock" && (
          <img src={spock} className="logo" alt="React logo" />
        )}
      </div>
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
      <div>Vous avez jouer: {played}</div>
      <div>Resultat : {result}</div>
      <div>
        {result == "Victoire" && (
          <img src={victory} className="logo" alt="React logo" />
        )}
        {result == "Défaite" && (
          <img src={gameover} className="logo" alt="React logo" />
        )}
        {result == "Match null" && (
          <img src={matchNul} className="logo" alt="React logo" />
        )}
      </div>
    </div>
  );
}

export default App;
