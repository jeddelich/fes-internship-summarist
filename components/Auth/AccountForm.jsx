import Btn from "../UI/Btn";
import styles from "./LoginModal.module.css";
import { useState } from "react";

function AccountForm({ type, createUser }) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (type === "Sign Up") {
      console.log("Creating user...");
      createUser(email, password);
    }
    setEmail("");
    setPassword("");
  }
  
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email Address"
        className={styles.input}
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {type !== "Send reset password link" && (
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      )}
        <Btn text={type} color={styles.green} />
    </form>
  );
}

export default AccountForm;
