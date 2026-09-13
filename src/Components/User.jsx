import { useState } from "react";
import styles from "./User.module.css";
const mockData = [
  { username: "Ola Normann", email: "ola.normann@norge.no" },
  { username: "Torleif", email: "torleif@kodehode.no" },
  { username: "Jan Egil", email: "jan.egil@kodehode.no" },
  { username: "Sander", email: "sander@kodehode.no" },
];

export default function User() {
  // Holds the objects from the mockdata array, and updates it when a new user is added
  const [userList, setUserList] = useState(mockData);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const handleAddedUser = (e) => {
    // preventDefault prevents the browser from refresing on form submit
    e.preventDefault();
    if (!userName.trim() || !email.trim()) {
      alert("Please be kind an type in both username and email adress");
      return;
    }

    const newUser = { username: userName, email: email };
    setUserList((prevUserList) => [...prevUserList, newUser]);

    // Resets the forms input back to empty fields
    setUserName("");
    setEmail("");
  };

  return (
    <div className={styles.card}>
      <h2>Users</h2>

      <h3>Registered users:</h3>
      <ul className={styles.list}>
        {userList.map((user, index) => (
          <li key={index} className={styles.listItem}>
            {user.username} {user.email}
          </li>
        ))}
      </ul>

      <h3>Add a new user:</h3>
      <form onSubmit={handleAddedUser} className={styles.form}>
        <div className={styles.inputGroup}>
          <label>Username</label>
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="John Smith" />
        </div>
        <div className={styles.inputGroup}>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@smith.com" />
        </div>
        <button type="submit" className={styles.Btn}>
          Add User
        </button>
      </form>
    </div>
  );
}
