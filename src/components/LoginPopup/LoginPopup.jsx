import { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { useAuth } from "../../context/AuthContext"; // ✅ Added import

function LoginPopup({ setShowLogin }) {
  const [currentState, setCurrentState] = useState("Sign In");
  const { user, signUp, signIn, signOut } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleOnSubmit = async (e) => {
    e.preventDefault();
    if (currentState === "Sign Up") {
      await signUp(email, password, username);
    } else if (currentState === "Sign In") {
      await signIn(email, password);
    }
    setShowLogin(false);
  };

  const handleSignOutClick = () => {
    signOut();
    setCurrentState("Sign In");
  };

  return (
    <div className="login-popup">
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{user ? "Welcome" : currentState}</h2>
          <img src={assets.cross_icon} onClick={() => setShowLogin(false)} alt="Close" />
        </div>

        {user ? (
          <div>
            <p>{user?.email ? `Welcome, ${user.email}!` : "Welcome, Guest"}</p>
            <button onClick={handleSignOutClick}>Sign Out</button>
          </div>
        ) : (
          <form onSubmit={HandleOnSubmit}>
            <div className="login-popup-inputs">
              {currentState === "Sign Up" && (
                <input
                  type="text"
                  value={username}
                  placeholder="Enter your name"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              )}
              <input
                type="email"
                value={email}
                placeholder="Enter your email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                value={password}
                placeholder="Enter your password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit">
              {currentState === "Sign Up" ? "Create account" : "Sign In"}
            </button>

            {currentState === "Sign Up" && (
              <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>I agree to all the terms and conditions</p>
              </div>
            )}

            {currentState === "Sign In" ? (
              <p>
                Create a new account?{" "}
                <span onClick={() => setCurrentState("Sign Up")}>
                  Click here
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span onClick={() => setCurrentState("Sign In")}>Sign In</span>
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginPopup;
