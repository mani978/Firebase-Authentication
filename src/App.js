import "./App.css";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebase-config";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      alert("User Created Successfully");

      console.log(user);
    } catch (error) {
      alert("Please Enter Correct Details ");
    }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );

      alert("User Logged In Successfully");

      console.log(user);
    } catch (error) {
      alert("Invalid Credentials");
    }
  };

  const logout = async () => {
    await signOut(auth);
    alert("Log Out Successful");
  };

  return (
    <div className="App">
      <h1 className="wel">WELCOME</h1>
      <div className="auth">
        <div className="register">
          <h1>Register User</h1>
          <input
            type="text"
            placeholder="Enter Email Id"
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
          <button onClick={register}>Register</button>
        </div>

        <div className="login">
          <h1>Log In</h1>
          <input
            type="text"
            placeholder="Enter Email Id"
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          <button onClick={login}>Submit</button>
        </div>
      </div>
      <div className="loggedIn">
        <h1>User Logged In</h1>
        <h2> {user?.email}</h2>
        <br />
        <button onClick={logout}>Sign Out</button>
      </div>
    </div>
  );
}

export default App;
