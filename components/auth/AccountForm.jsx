import Btn from "../ui/Btn";
import styles from "./LoginModal.module.css";
import { useState } from "react";
import { signUp, LogIn } from "@/services/firebaseAuth";
import { useRouter } from "next/navigation"
import managePlan from "@/services/firebaseFirestore"

function AccountForm({ type, style, closeModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (type === "Sign Up") {
      closeModal()
      signUp(email, password);
    }
    if (type === "Login") {
      closeModal()
      LogIn(email, password);
    }
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email Address"
        className={styles.input}
        id="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {type !== "Send reset password link" && (
        <div className={styles.inputWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={styles.input}
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {
            password !== "" && 
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={styles.showPasswordBtn}
          >
          {showPassword ? "Hide" : "View"}
          </button>
          }
        </div>
      )}
      <Btn text={type} color={styles.green} type="submit" style={style} />
    </form>
  );
}

export default AccountForm;
