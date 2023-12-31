import { useEffect, useState } from "react";
import { getData } from "../api/api"


function SignInContainer({ onSignUpClick }) {
    const [examples, setExamples] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await getData("test@email.com", "test");
            setExamples(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };

        fetchData();
    }, []);

//   console.log("data", examples)

  return (
      <section id='signInContainer'>
        <div id='signIn'>
          <h1 style={{fontSize: "32px"}}>Sign In</h1>
          <input className="inputField" placeholder='Email'></input>
          <input className="inputField" placeholder='Password' type="password"></input>
          <button style={{color: "white", backgroundColor: "#399afb", width: "300px", padding: "10px 15px", border: "none", borderRadius: "5px", margin: "30px 0px 10px", fontSize: "17px"}}>Sign In</button>
          <div style={{marginBottom: "50px"}}>
            <input type="checkbox" name="Remember me" value="Remember" />
            <label style={{marginRight: "80px"}}>Remember me</label>
            <a>Need help?</a>
          </div>
          <p style={{fontWeight: "bold"}}>New to Webflix?</p>
          <button onClick={onSignUpClick}>Sign Up!</button>
        </div>
      </section>
  );
}

export default SignInContainer;
