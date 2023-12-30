
function App() {
  return (
    <div className="appContainer">
      <header>
        <img src='/webflix.png' alt='Webflix logo light blue' width={"200px"} height={"100%"} style={{margin: "0px 15px"}}/>
      </header>
      <section id='signInContainer'>
        <div id='signIn'>
          <h1 style={{fontSize: "30px"}}>Sign In</h1>
          <input className="inputField" style={{display:"block"}} placeholder='Email'></input>
          <input className="inputField" style={{display:"block"}} placeholder='Password' type="password"></input>
          <button style={{color: "white", backgroundColor: "#399afb", width: "300px", padding: "10px 15px", border: "none",borderRadius: "5px", margin: "30px 0px 5px", fontSize: "17px"}}>Sign In</button>
          <div>
            <input type="checkbox" name="Remeber me" value="Remeber" />
            <label style={{marginRight: "80px"}}>Remember me</label>
            <label>Need help?</label>
          </div>
        </div>
      </section>
      <footer>
        <h1>FOOTER</h1>
      </footer>
    </div>
  );
}

export default App;
