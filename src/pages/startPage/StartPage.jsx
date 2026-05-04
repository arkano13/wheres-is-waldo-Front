import NavButton from "../../components/btn/NavButton";
import style from "./StartPage.module.css";
import CharacterMenu from "../../components/characterMenu/CharacterMenu";
import Mark from "../../components/mark/mark";
import { initGame } from "../../services/api";


function StartPage() {

  const handlePlay= async () => {
    await initGame();
  } 

  return (
    <div className={style.page}>
      <div className={style.badge}>
        <div className={style.badgeDot}>
          <div className={style.badgeDotInner} />
        </div>
        <span className={style.badgeText}>Where is</span>
      </div>

      <h1 className={style.title}>Waldo</h1>
      <div className={style.titleAccent} />

      <nav className={style.nav}>
        <NavButton text={"PLAY"} variant={"navLinkPrimary"} route={"/game"} onClick={handlePlay}/>
        <div className={style.navSmall}>
          <NavButton
            text={"Rules"}
            variant={"navLinkSecondary"}
            route={"/rules"}
          />
          <NavButton
            text={"Leaderboard"}
            variant={"navLinkSecondary"}
            route={"/leader"}
          />
        </div>
      </nav>

      <CharacterMenu></CharacterMenu>

    </div>

  );

}

export default StartPage;
