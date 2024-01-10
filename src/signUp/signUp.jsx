import { useState } from "react";
import { Link } from "react-router-dom";
import SignUpContainer from "./SignUpContainer";
import PlanCard from "./plans/planCard";

function SignUp() {
  const [plan, SetPlan] = useState("none");

  function handleSettingPlan(type) {
    SetPlan(type);
  }

  return (
    <div id="signUpPage">
      <Link to="/" style={{ backgroundColor: "black" }}>
        <img
          src="/webflix.png"
          alt="Webflix logo light blue"
          width={"200px"}
          style={{ margin: "10px 0px 0px 15px" }}
        />
      </Link>
      <section
        style={{
          margin: "40px 0px",
          display: plan !== "none" ? "flex" : "block",
          justifyContent: "center",
        }}
      >
        {plan !== "none" ? (
          <SignUpContainer plan={plan} setPlan={handleSettingPlan} />
        ) : (
          <>
            <h1 style={{ textAlign: "center" }}>This is for life.</h1>
            <p style={{ textAlign: "center" }}>Please choose a plan</p>
            <div id="planCardHolder">
              <PlanCard
                type={"Copper"}
                color={"#B87333"}
                price={"19.99"}
                howLong={"1"}
                benefits={"Basic Access"}
                setPlan={handleSettingPlan}
              />
              <PlanCard
                type={"Silver"}
                color={"#c0c0c0"}
                price={"29.99"}
                howLong={"1"}
                benefits={"Awesome Access"}
                setPlan={handleSettingPlan}
              />
              <PlanCard
                type={"Gold"}
                color={"#FFD700"}
                price={"49.99"}
                howLong={"1"}
                benefits={"Super Awesome Access"}
                setPlan={handleSettingPlan}
              />
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default SignUp;
