import { useEffect, useState } from "react";

export default function CatFacts() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://catfact.ninja/facts?limit=5")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Can't fetch cat facts");
        }
        return response.json();
      })
      .then((data) => {
        setFacts(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Funny and random CatFacts</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && (
        <ul>
          {facts.map((item, index) => (
            <li key={index}>{item.fact}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
