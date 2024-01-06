import { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div style={{ cursor: 'pointer' }} onClick={toggleOpen}>
        <strong>{question}</strong>
      </div>
      {isOpen && <div>{answer}</div>}
    </div>
  );
};

export default FaqItem;
