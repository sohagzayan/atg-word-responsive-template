import React, { useState } from "react";
import "./CreateAccount.css";
import illustration from "../../assets/atg_illustration.png";
import SocialButton from "../SocialButton/SocialButton";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
const CreateAccount = ({
  showAccountCreateModal,
  setShowAccountCreateModal,
}) => {
  const [signInFace, setSignInFace] = useState(true);
  return (
    <div className={showAccountCreateModal ? "backdrop" : ""}>
      <div
        className={
          showAccountCreateModal ? "create_account active" : "create_account"
        }
      >
        <p className=" d-lg-block d-none">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </p>
        <div className="d-lg-flex justify-lg-content-between account_creation_content gap-lg-4">
          <h5
            onClick={() => setShowAccountCreateModal((prev) => !prev)}
            className="close_modal"
          >
            <AiOutlineClose />
          </h5>
          <div>
            <form action="" className="account_create_box">
              <h3 className="d-flex justify-content-between">
                <h3>{signInFace ? "Create Account" : "Sign In"}</h3>

                <h4
                  onClick={() => setShowAccountCreateModal((prev) => !prev)}
                  className=" d-lg-none d-block mobileCloseModal"
                >
                  <AiOutlineClose />
                </h4>
              </h3>
              {signInFace && (
                <div>
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>
              )}

              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              {signInFace && (
                <input type="password" placeholder="Confirm Password" />
              )}
              <div className="d-flex justify-content-between align-items-center">
                <button className="sig_up_button">Create Account</button>
                <h6
                  onClick={() => setSignInFace((prev) => !prev)}
                  className="d-lg-none d-block itsFree    "
                >
                  {signInFace ? "or, Sign In" : "or, Create Account"}
                </h6>
              </div>
            </form>
            <div className="socialIcons">
              <SocialButton
                text="Sign up with Facebook"
                icons={<BsFacebook className="facebookIcons" />}
              ></SocialButton>
              <SocialButton
                text="Sign up with Google"
                icons={<FcGoogle className="fs-3 mx-3" />}
              ></SocialButton>
              {!signInFace && (
                <h5 className="text-center mt-3">Forgot Password?</h5>
              )}
              <small className="d-lg-none d-block mt-1">
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </small>
            </div>
          </div>
          <div className="d-lg-block d-none">
            <h6>
              Already have an account?{" "}
              <span
                onClick={() => setSignInFace((prev) => !prev)}
                className="itsFree"
              >
                {signInFace ? "Login" : "Sign In"}
              </span>
            </h6>
            <img src={illustration} alt="" className="d-block" />
            <small>
              By signing up, you agree to our Terms & conditions, Privacy policy
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
