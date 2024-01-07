import { useState } from "react";
import { Link } from 'react-router-dom';
import SignInContainer from "./signInContainer";
import SignUpContainer from "./signUpContainer";

function SignIn() {
  const [newUser, setNewUser] = useState(false)

  const handleSignUpClick = () => {
    setNewUser(!newUser);
  };

  return (
    <div className="appContainer">
      <header>
        <Link to="/">
          <img src='/webflix.png' 
          alt='Webflix logo light blue' 
          width={"200px"} height={"100%"} 
          style={{margin: "10px 0px 0px 15px"}}
          />
        </Link>
      </header>
        {newUser ? (
          <SignUpContainer onSignUpClick={handleSignUpClick}/>
          ):(
          <SignInContainer onSignUpClick={handleSignUpClick}/>
        )}
      <footer id="mainFooter">
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

export default SignIn;
