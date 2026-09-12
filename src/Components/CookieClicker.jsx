import { useState } from "react";
import styles from "./CookieClicker.module.css";

export default function CookieClicker() {
  // state to store the points after user clicks the cookie on the screen
  const [points, setPoints] = useState(0);

  return (
    <div className={styles.card} id="cookieclicker-section">
      <h2>The Cookie Clicker!</h2>
      <p className={styles.counter}>Points: {points}</p>

      {/**/}
      <button className={styles.cookieBtn} onClick={() => setPoints((prevPoints) => prevPoints + 1)}>
        <img src="/cookie-1.png" alt="Image of a cookie" className={styles.cookieImg} />
      </button>
    </div>
  );
}
