import { useState } from "react";
import { getData } from "../api/api";

function SignInContainer({ onSignUpClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      const data = await getData(email, password);
      if(data.error){
        setError("Wrong email or password.");
      } else {
        setError(null)
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <section id='signInContainer'>
      <div id='signIn'>
        <h1 style={{ fontSize: "32px" }}>Sign In</h1>
        <input
          className="inputField"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ borderColor: error ? 'red' : null }}
        />
        <input
          className="inputField"
          placeholder='Password'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ borderColor: error ? 'red' : null }}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button
          onClick={handleSubmit}
          style={{
            color: "white",
            backgroundColor: "#399afb",
            width: "300px",
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            margin: "30px 0px 10px",
            fontSize: "17px"
          }}
        >
          Sign In
        </button>
        <div style={{ marginBottom: "50px" }}>
          <input type="checkbox" name="Remember me" value="Remember" />
          <label style={{ marginRight: "80px" }}>Remember me</label>
          <a>Need help?</a>
        </div>
        <p style={{ fontWeight: "bold" }}>New to Webflix?</p>
        <button onClick={onSignUpClick}>Sign Up!</button>
      </div>
    </section>
  );
}

export default SignInContainer;
