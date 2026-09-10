import { useState } from "react";

const CookieClicker = () => {
  const [points, setPoints] = useState(0);

  return (
    <div>
      <h2>The Cookie Clicker!</h2>
      <p>Points: {points}</p>
      <button onClick={() => setPoints(points + 1)}>
        <img src="/cookie-1.png" alt="" />
      </button>
    </div>
  );
};

export default CookieClicker;
