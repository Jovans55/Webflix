import { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUpContainer from './SignUpContainer';
import PlanCard from './plans/planCard';

function SignUp() {
  const [plan, SetPlan] = useState("none");

  return (
    <div>
        <Link to="/">
            <img src='/webflix.png' 
            alt='Webflix logo light blue' 
            width={"200px"}
            style={{margin: "10px 0px 0px 15px"}}/>
        </Link>
        <section style={{marginTop: "40px"}}>
          <h1 style={{textAlign: "center"}}>This is for life.</h1>
          {!plan == "none" ? (
            <SignUpContainer plan={plan}/>
          ) : (
            <div id="planCardHolder">
              <PlanCard 
              type={"Copper"}
              color={"#B87333"}
              price={"19.99"} 
              howLong={"1"} 
              benefits={"Basic Access"}
              />
              <PlanCard 
              type={"Silver"}
              color={"#c0c0c0"}
              price={"29.99"} 
              howLong={"1"} 
              benefits={"Awesome Access"}
              />
              <PlanCard 
              type={"Gold"}
              color={"#FFD700"}
              price={"49.99"} 
              howLong={"1"} 
              benefits={"Gold Super Awesome Access"}
              />
            </div>
          )}
        </section>
    </div>
  );
}

export default SignUp;