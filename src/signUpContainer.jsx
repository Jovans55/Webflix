
function SignUpContainer({ onSignUpClick }) {

  return (
      <section id='signInContainer'>
        <div id='signIn'>
          <h1 style={{fontSize: "32px"}}>Sign Up</h1>
          <input className="inputField" placeholder='First Name'></input>
          <input className="inputField" placeholder='Last Name'></input>
          <input className="inputField" placeholder='Email'></input>
          <input className="inputField" placeholder='Password' type="password"></input>
          <input className="inputField" placeholder='Confirm Password' type="password"></input>
          <button style={{color: "white", backgroundColor: "#399afb", width: "300px", padding: "10px 15px", border: "none", borderRadius: "5px", margin: "30px 0px 10px", fontSize: "17px"}}>Sign Up</button>
          <div style={{marginBottom: "50px"}}>
            <a>Need help?</a>
          </div>
          <p style={{fontWeight: "bold"}}>Already Have An Account?</p>
          <button onClick={onSignUpClick}>Back To Sign In</button>
        </div>
      </section>
  );
}

export default SignUpContainer;
