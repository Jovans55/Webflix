import FaqItem from "./FaqItem"

const FaqPage = () => {
    return (
      <div>
        <h1 style={{textAlign: "center"}}>Frequently Asked Questions</h1>
        <FaqItem
          question="How much does a subscription cost?"
          answer="The cost of a subscription varies depending on the plan you choose. Please visit our pricing page for more details."
        />
        <FaqItem
          question="How much does a subscription cost?"
          answer="The cost of a subscription varies depending on the plan you choose. Please visit our pricing page for more details."
        />
      </div>
    );
  };
  
export default FaqPage;
  