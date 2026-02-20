function AuthModal() {
  return (
    <div className="modal">
      <div className="container">
        <div className="row">
          <h2 className="modal__title">Log in to Summarist</h2>
          <div className="modal__btn--wrapper">
            <i></i>
            <button className="modal__btn--login login--guest">
              Login as a Guest
            </button>
          </div>
          <div className="modal__separator">
            <span className="modal__separator--text">or</span>
          </div>
          <div className="modal__btn--wrapper">
            <i></i>
            <button className="modal__btn--login login--google">
              Login with Google
            </button>
          </div>
          <div className="modal__separator">
            <span className="modal__separator--text">or</span>
          </div>
          <form action="">
            <input type="email" className="form__input--email" />
            <input type="password" className="form__input--password" />
            <button className="modal__btn--login login--main">Login</button>
          </form>
          <div className="modal__bottom--questions">
            <a href="">Forgot your password?</a>
            <button>Don't have an account? Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
