function AuthForm() {
  return (
    <form action="">
      <input type="email" className="form__input--email" />
      <input type="password" className="form__input--password" />
      <button className="modal__btn--login login--main">Login</button>
    </form>
  );
}

export default AuthForm;
