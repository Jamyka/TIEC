import "./App.css";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPasssword] = useState("");

  const updateUserName = (e) => {
    setUserName(e.target.value);
  };

  const updatePassword = (e) => {
    setPasssword(e.target.value);
  };
  const onSubmit = (user, pass) => {
    if (userName.length < 3 || password.lenght < 8) {
      window.alert("Username should be more than 3 chars");
    } else {
      setUserName("");
      setPasssword("");
      window.alert("Loged in Successfully");
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>Login Form</h2>
        <div>
          <div className="input-container">
            <label>Username </label>
            <input
              type="text"
              name="uname"
              id="username-input"
              value={userName}
              required
              onChange={updateUserName}
            />
            {/* {renderErrorMessage("uname")} */}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input
              type="password"
              name="pass"
              required
              value={password}
              id="password-input"
              onChange={updatePassword}
            />
            {/* {renderErrorMessage("pass")} */}
          </div>
          <div className="button-container">
            <input
              type="submit"
              id="login-button"
              disabled={userName && password ? false : true}
              onClick={() => onSubmit(userName, password)}
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
