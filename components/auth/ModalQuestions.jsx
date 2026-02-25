import styles from "./LoginModal.module.css";

function ModalQuestions({ prompt, openSignUp, openResetPassword, openLogin, activeModal }) {

  return (
    <div className={styles.footer}>
      {
        activeModal === "login" && (<>
      <a href="" className={styles.link} onClick={(event) => openResetPassword(event)}>Forgot your password?</a>
      <a href="" className={styles.link} onClick={(event) => openSignUp(event)}>{prompt}</a></>
      )}
      {
        activeModal === "reset" && (
      <a href="" className={styles.link} onClick={(event) => openLogin(event)}>{prompt}</a>
       )
      }
      {
        activeModal === "signup" && (
      <a href="" className={styles.link} onClick={(event) => openLogin(event)}>{prompt}</a>
       )
      }

    </div>
  );
}

export default ModalQuestions;
