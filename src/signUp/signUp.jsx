import { Link } from 'react-router-dom';

function SignUp() {

  return (
    <div>
        <Link to="/">
            <img src='/webflix.png' 
            alt='Webflix logo light blue' 
            width={"200px"}
            style={{margin: "10px 0px 0px 15px"}}/>
        </Link>
        <h1>Hi</h1>
    </div>
  );
}

export default SignUp;