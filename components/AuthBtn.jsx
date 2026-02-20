
function AuthBtn({ text }) {
  return (
    <div className="modal__btn--wrapper">
      <i></i>
      <button className="modal__btn--login login--guest">
        {text}
      </button>
    </div>
  );
}

export default AuthBtn;
