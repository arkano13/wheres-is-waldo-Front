import style from "./WinModal.module.css";

function WinModal({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value.trim();
    if (username) onSubmit(username);
  };

  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <div className={style.badge}>
          <div className={style.badgeDot}>
            <div className={style.badgeDotInner} />
          </div>
          <span className={style.badgeText}>you found them all</span>
        </div>

        <h2 className={style.title}>You Win</h2>
        <div className={style.titleAccent} />

        <form onSubmit={handleSubmit} className={style.form}>
          <input
            name="username"
            type="text"
            placeholder="enter your name"
            className={style.input}
            autoFocus
          />
          <button type="submit" className={style.btn}>
            Save & View Leaderboard
          </button>
        </form>
      </div>
    </div>
  );
}

export default WinModal;