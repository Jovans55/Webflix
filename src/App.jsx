
function App() {
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
            <input type="checkbox" name="Remeber me" value="Remeber" />
            <label style={{marginRight: "80px"}}>Remember me</label>
            <a>Need help?</a>
          </div>
          <p>New to Webflix?</p>
          <a>Sign Up!</a>
        </div>
      </section>
      <footer>
        <div>
          <h1>FOOTER</h1>
        </div>
      </footer>
    </div>
  );
}

export default App;
