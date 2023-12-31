import { useState } from "react";
import { Link } from "react-router-dom";
import { postData } from "../../api/api";

function SignUpContainer({ plan, setPlan }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleSubmit = async () => {
    setError(null);

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (plan == "none") {
      setError("Please choose a plan");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords Don't Match");
      return;
    }

    try {
      const data = await postData(firstName, lastName, email, password);

      if (data.error) {
        setError(data.error);
        return;
      } else if (data.success) {
        setSuccess(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (success) {
    return (
      <section id="signInContainer" className="signUpContainer">
        <div id="signIn">
          <h1>Sign Up Successful!</h1>
          <p>Please return to Sign In.</p>
          <button
            style={{
              color: "white",
              backgroundColor: "#399afb",
              width: "300px",
              padding: "10px 15px",
              border: "none",
              borderRadius: "5px",
              margin: "0px 0px 10px",
              fontSize: "17px",
            }}
          >
            <Link
              to="/signin"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              Back To Sign In
            </Link>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="signInContainer" className="signUpContainer">
      <div id="signIn">
        <h1 style={{ fontSize: "32px" }}>Finish Sign Up</h1>
        <input
          className="inputField"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <input
          className="inputField"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <input
          className="inputField"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            borderColor:
              error == "Email In Use" ||
              error == "Please enter a valid email address"
                ? "red"
                : null,
          }}
        ></input>
        <input
          className="inputField"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            borderColor: error == "Passwords Don't Match" ? "red" : null,
          }}
        ></input>
        <input
          className="inputField"
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{
            borderColor: error == "Passwords Don't Match" ? "red" : null,
          }}
        ></input>
        {error && <p style={{ color: "red" }}>{error}</p>}
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
            fontSize: "17px",
          }}
        >
          Sign Up
        </button>
        <div style={{ marginBottom: "50px" }}>
          <a>Need help?</a>
        </div>
        <p style={{ fontWeight: "bold" }}> Have an account or wrong plan?</p>
        <button
          style={{
            display: "block",
            background: "none",
            border: "none",
            color: "white",
            padding: "0px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            marginBottom: "5px",
          }}
          onClick={() => setPlan("none")}
        >
          Back to plans
        </button>
        <Link
          to="/signin"
          style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}
        >
          Back to sign in
        </Link>
      </div>
    </section>
  );
}

export default SignUpContainer;
