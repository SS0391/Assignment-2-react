import { useEffect, useState } from "react";
import styles from "./CatFacts.module.css";

export default function CatFacts() {
  // 3 seperate states to manage data, loading screens and error
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // only runs one time, when the component mounts because off -> empty dependency array[]
  useEffect(() => {
    const getCatFacts = async () => {
      try {
        const response = await fetch("https://catfact.ninja/facts");

        // check if the fetch don`t throw an error
        if (!response.ok) {
          throw new Error("Can't find any cat facts");
        }
        const data = await response.json();
        setFacts(data.data);
      } catch (err) {
        setError(err.message);
        // finally runs the code regardless of it succeded or failed
      } finally {
        setLoading(false);
      }
    };

    getCatFacts();
  }, []);

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Funny and random CatFacts</h2>
      {loading && <p className={styles.loading}>Loading...</p>}
      {error && <p className={styles.error}>Error: {error}</p>}

      {!loading && !error && (
        <ul className={styles.list}>
          {facts.map((item, index) => (
            <li key={index} className={styles.listItem}>
              {item.fact}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
