import { useEffect, useState } from "react";
import { getData } from "../api/api"


function App() {

  const [examples, setExamples] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData("test@email.com", "test");
        console.log(data);
        setExamples(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log("IMMA CREEEEP", examples)

  return (
    <div className="appContainer">
      <header>
        <img src='/webflix.png' alt='Webflix logo light blue' width={"200px"} height={"100%"} style={{margin: "10px 0px 0px 15px"}}/>
      </header>
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
          <a>Sign Up!</a>
        </div>
      </section>
      <footer>
        <div>
          <p>Questions? Call 1-123-456-789</p>
          <section>
            <div>
              <a>FAQ</a>
              <a>Help Center</a>
              <a>Webflix Shop</a>
            </div>
            <div>
              <a>Terms of Use</a>
              <a>Privacy</a>
              <a>Cookie Preferences</a>
            </div>
            <div>
              <a>Corporate Information</a>
              <a>Do Not Sell or Share My Personal Informatoin</a>
              <a>Ad Choices</a>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default App;
