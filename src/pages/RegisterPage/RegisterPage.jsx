import "../LoginPage/LoginPage.css";

import EmailIcon from "../../assets/icons/email-icon.svg";
import EyeIcon from "../../assets/icons/eye-icon.svg";
import KeyIcon from "../../assets/icons/key-icon.svg";
import GoogleIcon from "../../assets/icons/google-icon.svg";
import AppleIcon from "../../assets/icons/apple-icon.svg";

export default function RegisterPage() {
    return(
        <main className="page login-page">
            <div className="btn-action-forms">
                <a href="#" className="heading-text active">Login </a>
                <a href="#" className="heading-text">Sign Up</a>
            </div>

            <form className="login-form">
                <label className="form-field">
                    <span className="form-label">E-mail Address</span>

                    <div className="input-wrapper">
                        <img src={EmailIcon} alt="" />
                        <input type="email" placeholder="email@gmail.com" />
                    </div>
                </label>

                <label className="form-field">
                    <span className="form-label">Password</span>

                    <div className="input-wrapper">
                        <img src={KeyIcon} alt="" />
                        <input type="password" placeholder="********" />
                        <img src={EyeIcon} alt="" />
                    </div>
                </label>

                <label className="form-field">
                    <span className="form-label">Re-Enter your password</span>

                    <div className="input-wrapper">
                        <img src={KeyIcon} alt="" />
                        <input type="password" placeholder="********" />
                        <img src={EyeIcon} alt="" />
                    </div>
                </label>

                <div className="form-options">
                    <label className="remember-field">
                        <input type="checkbox" />
                        <span>Remember Me</span>
                    </label>

                    <a href="#">Forgot password?</a>
                </div>

                <button type="submit" className="form-btn">
                    Login
                </button>

                <div className="divider">
                    <span>or</span>
                </div>

                <div className="form-services">
                    <a href="#">
                        <img src={GoogleIcon} alt="Login with Google" />
                    </a>

                    <a href="#">
                        <img src={AppleIcon} alt="Login with Apple" />
                    </a>
                </div>
            </form>
        </main>
    );
}