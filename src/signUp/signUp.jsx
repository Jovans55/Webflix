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
        <section>
          {!plan == "none" ? (
            <SignUpContainer plan={plan}/>
          ) : (
            <div>
              <PlanCard 
              type={"Copper"} 
              price={"19.99"} 
              howLong={"1"} 
              benefits={"Basic Access"}
              />
              <PlanCard 
              type={"Silver"} 
              price={"29.99"} 
              howLong={"1"} 
              benefits={"Awesome Access"}
              />
              <PlanCard 
              type={"Gold"} 
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