import { FaLock, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import "./LoginStyle.css";
import Registration from "../Registration/Registration";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { googleSignIn, fbSignIn, signIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email,password).then(res=>{
        console.log(res);
    })
  };

  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      console.log(res);
    });
  };

  const handleFbSignIn=()=>{
    fbSignIn().then(res=>{
        console.log(res);
    })
  }

  return (
    <div className="w-[95%] mx-auto">
      <div className="flex justify-center pt-32 pb-20">
        <div className={`wrapper ${isClicked ? "active" : ""}`}>
          {/* BG Divider login*/}
          <span className="bg-animate"></span>
          {/* BG Divider Registration */}
          <span className="bg-animate2"></span>

          {/* Login page */}
          <div>
            <div className="form-box login ">
              <h2 className="animation" style={{ "--i": 0, "--j": 21 }}>
                Login
              </h2>{" "}
              {/* Insert animation class for changing login to reg by animated */}
              <form onSubmit={handleLogin} action="#">
                <div
                  className="input-box animation"
                  style={{ "--i": 1, "--j": 22 }}
                >
                  <input type="email" name="email" required />
                  <label>Email</label>
                  <MdEmail className="icon" />
                </div>
                <div
                  className="input-box animation"
                  style={{ "--i": 2, "--j": 23 }}
                >
                  <input type="password" name="password" required />
                  <label>Password</label>
                  <FaLock className="icon" />
                </div>
                <button
                  type="submit"
                  className="btn1 animation"
                  style={{ "--i": 3, "--j": 24 }}
                >
                  Login
                </button>

                {/* divider */}
                <div
                  className="animation divider divider-primary"
                  style={{ "--i": 4, "--j": 25 }}
                >
                  OR Login With
                </div>

                <div
                  className="animation flex gap-2 mt-4"
                  style={{ "--i": 5, "--j": 26 }}
                >
                  <button
                    onClick={handleGoogleSignIn}
                    className="hover:bg-blue-800 hover:text-white flex items-center gap-2 border-2 border-blue-500 px-4 py-1 rounded-md font-medium"
                  >
                    <FcGoogle /> Google
                  </button>
                  <button onClick={handleFbSignIn} className="hover:bg-blue-800 hover:text-white flex items-center gap-2 border-2 border-blue-500 px-4 py-1 rounded-md font-medium">
                    <FaFacebook /> Facebook
                  </button>
                </div>

                <div
                  className="logreg-link animation"
                  style={{ "--i": 6, "--j": 27 }}
                >
                  <p>
                    Do not have an account?{" "}
                    <a
                      href="#"
                      onClick={() => setIsClicked(true)}
                      className="register-link text-white hover:text-gray-400 md:text-blue-500 md:hover:text-blue-800"
                    >
                      Sign Up
                    </a>
                  </p>
                </div>
              </form>
            </div>
            {/* Right side Login Text */}
            <div className="info-text login">
              <h2 className="animation" style={{ "--i": 0, "--j": 20 }}>
                Welcome Back !
              </h2>
              <p className="animation" style={{ "--i": 1, "--j": 21 }}>
                Sijma is always with your side.
              </p>
            </div>
          </div>
          {/* Registration part */}
          <Registration setIsClicked={setIsClicked}></Registration>
        </div>
      </div>
    </div>
  );
};

export default Login;
