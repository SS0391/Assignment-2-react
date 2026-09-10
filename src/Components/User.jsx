import { useState } from "react";

const mockData = [
  { username: "Ola Normann", email: "ola.normann@norge.no" },
  { username: "Torleif", email: "torleif@kodehode.no" },
  { username: "Jan Egil", email: "jan.egil@kodehode.no" },
  { username: "Sander", email: "sander@kodehode.no" },
];

export default function User() {
  const [userList, setUserList] = useState(mockData);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const handleAddedUser = (e) => {
    e.preventDefault();
    if (!userName.trim() || !email.trim()) {
      alert("Please be kind an type in both username and email adress");
    }
  };
}
