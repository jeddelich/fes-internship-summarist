import Btn from "../ui/Btn";
import styles from "./LoginModal.module.css";
import { useState } from "react";
import { signUp, LogIn } from "@/services/firebaseAuth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/services/firebase";
import { useRouter } from "next/navigation";

function AccountForm({ type }) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (type === "Sign Up") {
      signUp(email, password);
    }
    if (type === "Login") {
      LogIn(email, password);
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
