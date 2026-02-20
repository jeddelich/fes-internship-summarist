import styles from "./AuthModal.module.css";

function AuthBtn({ text }) {
  return (
    <div className="modal__btn--wrapper">
      <i></i>
      <button className={styles.btn + " login--guest"}>
        {text}
      </button>
    </div>
  );
}

export default AuthBtn;
