import { useState, useEffect } from "react";
import { getLeaderboard } from "../../services/api";
import NavBar from "../../components/navbar/NavBar";
import style from "./Leaderboard.module.css";

function Leaderboard() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getLeaderboard().then((data) => {
      const sorted = data.sort((a, b) => a.finishTime - b.finishTime);
      setPlayers(sorted);
    });
  }, []);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className={style.page}>
      <NavBar />

      <div className={style.badge}>
        <div className={style.badgeDot}>
          <div className={style.badgeDotInner}></div>
        </div>
        <span className={style.badgeText}>leaderboard</span>
      </div>

      <h1 className={style.title}>Top Players</h1>
      <div className={style.titleAccent}></div>

      <div className={style.table}>
        <div className={style.rowHeader}>
          <span>#</span>
          <span>player</span>
          <span>time</span>
        </div>

        {players.map((player, index) => (
          <div className={style.row} key={player.id}>
            <span>{index + 1}</span>
            <span>{player.username}</span>
            <span>{formatTime(Number(player.finishTime))}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;