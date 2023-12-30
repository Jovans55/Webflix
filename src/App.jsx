
function App() {
  return (
    <div className="appContainer">
      <header>
        <img src='./public/webflix.png' alt='Webflix logo light blue' width={"200px"} height={"100%"} />
      </header>
      <section id='signInContainer'>
        <div id='signIn'>
          <h1>Sign In</h1>
          <input style={{display:"block"}} placeholder='Email'></input>
          <input style={{display:"block"}} placeholder='Password'></input>
          <button>Sign In</button>
          <div>
            <input type="checkbox" name="Remeber me" value="Remeber" />
            <label>Remember me</label>
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
