import style from "./Rules.module.css";

function Rules() {
  return (
    <div className={style.page}>
      <div className={style.badge}>
        <div className={style.badgeDot}>
          <div className={style.badgeDotInner}></div>
        </div>
        <span className={style.badgeText}>rules</span>
      </div>

      <h1 className={style.title}>How to Play</h1>
      <div className={style.titleAccent}></div>

      <div className={style.rules}>
        <p>find the hidden characters in the image</p>
        <p>click on the correct location</p>
        <p>select the right character</p>
        <p>find them all as fast as possible</p>
      </div>
    </div>
  );
}

export default Rules;