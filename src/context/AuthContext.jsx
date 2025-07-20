import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext(null);

// Hook to use the auth context
export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Simulate checking session/localStorage for a logged-in user
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("authUser"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const signUp = async (email, password, username) => {
    try {
      const newUser = { email, username };
      // Save to localStorage (you can simulate a DB)
      localStorage.setItem("authUser", JSON.stringify(newUser));
      setUser(newUser);
      toast.success("SignUp Successful");
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error("SignUp Failed");
    }
  };

  const signIn = async (email, password) => {
    try {
      // Simulate sign in by reading localStorage
      const savedUser = JSON.parse(localStorage.getItem("authUser"));
      if (savedUser && savedUser.email === email) {
        setUser(savedUser);
        toast.success("SignIn Successful");
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      toast.error("SignIn Failed");
    }
  };

  const signOut = async () => {
    try {
      localStorage.removeItem("authUser");
      setUser(null);
      toast.success("SignOut Successful");
    } catch (error) {
      console.error("Error signing out:", error);
      toast.error("SignOut Failed");
    }
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
