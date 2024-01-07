import FaqItem from "./FaqItem"

const FaqPage = () => {
    return (
      <div>
        <h1 style={{textAlign: "center"}}>Frequently Asked Questions</h1>
        <FaqItem
          question="What is Webflix?"
          answer="Webflix is a life time subscription streaming service, once you're a webflixer you're signed for life. In return you get access to the latest and greatest TV shows and Movies! Forever!"
        />
        <FaqItem
          question="How much does a subscription cost?"
          answer="A lot of money! Please visit our pricing page for more details."
        />
        <FaqItem
          question="Can you ever cancel subscription?"
          answer="No, once a webflixer always a webflixer."
        />
        <FaqItem
          question="Wait so you're saying I can never cancel this?"
          answer="Yup that's right, how many times do we have to spell it out. This is for life."
        />
        <FaqItem
          question="Why a toaster?"
          answer="Can you watch disney plus or netflix on your toaster? No right? We're cornering a lucrative market here. Think a little, gosh."
        />
        <FaqItem
          question="When can we stream on washing machines?"
          answer="The webflix engineers or how we like to call them Webflixaneers, are hard at work bringing this feature to life! Just sit tight, soon you can do laundry and watch your favorite shows!"
        />
      </div>
    );
  };

export default FaqPage;
