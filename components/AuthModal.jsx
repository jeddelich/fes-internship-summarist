import AuthBtn from "@/components/AuthBtn";
import AuthForm from "@/components/AuthForm";
import AuthFooter from "@/components/AuthFooter";

function AuthModal() {
  return (
    <div className="modal">
      <div className="container">
        <div className="row">
          <h2 className="modal__title">Log in to Summarist</h2>
            <AuthBtn text="Login as a Guest"/>
          <div className="modal__separator">
            <span className="modal__separator--text">or</span>
          </div>
            <AuthBtn text="Login with Google"/>
          <div className="modal__separator">
            <span className="modal__separator--text">or</span>
          </div>
            <AuthForm />
            <AuthFooter />
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
