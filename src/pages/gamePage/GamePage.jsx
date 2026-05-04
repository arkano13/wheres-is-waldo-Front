import Waldo from "../../assets/whereiswaldo.jpg";
import NavBar from "../../components/navbar/NavBar";
import style from "./GamePage.module.css";
import Footer from "../../components/footer/Footer";
import CharacterMenu from "../../components/characterMenu/CharacterMenu";
import { useState, useEffect } from "react";
import Mark from "../../components/mark/mark";
import { getCharacters, finishGame } from "../../services/api";
import { useNavigate } from "react-router-dom";
import WinModal from "../../components/winModal/WinModal";

function GamePage() {
  const [characters, setCharacters] = useState([]);
  const [foundCharacters, setFoundCharacters] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getCharacters().then(setCharacters);
  }, []);

  const TOLERANCE = 5;

  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const porcentajeX = ((e.clientX - rect.left) / rect.width) * 100;
    const porcentajeY = ((e.clientY - rect.top) / rect.height) * 100;
    setMenuPosition({ x: porcentajeX, y: porcentajeY });
    setVisibility(true);
  };

  const handleSelection = (personaje) => {
    const charData = characters.find((c) => c.name === personaje);

    const isCorrect =
      Math.abs(menuPosition.x - charData.posX) <= TOLERANCE &&
      Math.abs(menuPosition.y - charData.posY) <= TOLERANCE;

    if (isCorrect) {
      const updatedFound = [...foundCharacters, { name: personaje, x: menuPosition.x, y: menuPosition.y }];
      setFoundCharacters(updatedFound);

      if (updatedFound.length === characters.length) {
        setShowModal(true);
      }
    }

    setVisibility(false);
  };

  const handleWin = async (username) => {
    await finishGame(username);
    navigate("/leader");
  };

  return (
    <div className={style.container}>
      <NavBar />

      <div className={style.gamepageContainer}>
        <img
          src={Waldo}
          alt="waldo"
          className={style.waldoimg}
          onClick={handleClick}
        />
        {foundCharacters.map((char) => (
          <Mark key={char.name} cooCharacters={char} />
        ))}
      </div>

      {visibility && (
        <CharacterMenu
          menuPosition={menuPosition}
          onSelect={handleSelection}
        />
      )}

      {showModal && <WinModal onSubmit={handleWin} />}

      <Footer />
    </div>
  );
}

export default GamePage;