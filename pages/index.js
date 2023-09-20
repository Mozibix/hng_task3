import React, { useState } from "react";

import HomePage from "./HomePage";
import Login from "./Login";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (email, password) => {
    if (email === "user@example.com" && password === "1Password") {
      setLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  return <div>{loggedIn ? <HomePage /> : <Login onLogin={handleLogin} />}</div>;
}
