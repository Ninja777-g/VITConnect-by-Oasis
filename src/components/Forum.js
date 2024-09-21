import React, { useState, useRef, useEffect } from 'react';

function Forum() {
  const [faqItems, setFaqItems] = useState([
    {
      question: "What is OD?",
      answer: "OD is On-Duty. It is given to ensure your attendance is not affected.",
      isOpen: false,
    },
    {
      question: "Who can use VITConnect?",
      answer: "VITConnect is available to all VIT students, faculty, and staff members. You just need a valid VIT ID to sign up and access the features of the platform.",
      isOpen: false,
    },
    {
      question: "What services does VITConnect provide?",
      answer: "VITConnect provides various services including event announcements, mess menu updates, club activities, and more.",
      isOpen: false,
    },
    {
      question: "How do I reset my password?",
      answer: "To reset your password, go to the login page and click on 'Forgot Password?' to receive a reset link.",
      isOpen: false,
    },
    {
      question: "Is there a mobile app for VITConnect?",
      answer: "Yes, VITConnect has a mobile app available for both Android and iOS platforms.",
      isOpen: false,
    },
  ]);

  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [question, setQuestion] = useState('');
  const [details, setDetails] = useState('');
  const confirmationRef = useRef(null);

  const toggleAnswer = (index) => {
    const updatedItems = faqItems.map((item, i) =>
      i === index ? { ...item, isOpen: !item.isOpen } : item
    );
    setFaqItems(updatedItems);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newQuestion = { question, answer: details || "No details provided.", isOpen: false };
    setFaqItems((prevItems) => [...prevItems, newQuestion]);
    setConfirmationVisible(true);
    setQuestion('');
    setDetails('');
  };

  useEffect(() => {
    if (confirmationVisible && confirmationRef.current) {
      confirmationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [confirmationVisible]);

  return (
    <div className="container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-section">
        {faqItems.map((item, index) => (
          <div className="faq-item" key={index}>
            <h3
              className={`faq-question ${item.isOpen ? 'active' : ''}`}
              onClick={() => toggleAnswer(index)}
              style={{ cursor: 'pointer', color: '#86C232' }} // Title color
            >
              {item.question}
            </h3>
            <div
              className="faq-answer"
              style={{
                maxHeight: item.isOpen ? '500px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease-out',
              }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="question-form">
        <h2 style={{ color: '#86C232' }}>Submit Your Question</h2> {/* Title color */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter your question"
            required
            style={{ color: 'black' }} // Font color for question input
          />
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Provide more details (optional)"
            rows="4"
            style={{ color: 'black' }} // Font color for details textarea
          ></textarea>
          <button type="submit" style={{ backgroundColor: 'black', color: '#00ffc6' }}>Submit Question</button>
        </form>

        {confirmationVisible && (
          <div className="confirmation" ref={confirmationRef}>
            Thank you for submitting your question! We will review it and update the FAQ accordingly.
          </div>
        )}
      </div>

      <style>
        {`
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            font-family: 'Poppins', sans-serif;
            background-color: #0d0d0d; /* Dark background */
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
          }
          h1, h2 {
            text-align: center;
            color: #86C232; /* Title color */
            margin-bottom: 20px;
          }
          .faq-section {
            background-color: #222629; /* Dark metallic */
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          }
          .faq-item {
            margin-bottom: 15px;
          }
          .faq-question {
            background-color: #474B4F; /* Dark gray */
            color: #f4f4f9; /* Light text */
            padding: 15px;
            font-size: 18px;
            border-radius: 5px;
            margin: 0;
            transition: background-color 0.3s ease;
          }
          .faq-question:hover {
            background-color: #00a8ff; /* Neon blue on hover */
          }
          .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
            background-color: #22223b; /* Slightly lighter background */
            padding: 0 15px;
            border-radius: 5px;
          }
          .faq-answer p {
            padding: 15px;
            margin: 0;
            color: #e2e8f0; /* Light text */
            font-size: 16px;
          }
          .question-form {
            margin-top: 40px;
            padding: 20px;
            background-color: #1a1a2e; /* Consistent dark background */
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          }
          .question-form input, .question-form textarea {
            width: calc(100% - 20px);
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
            background-color: #474B4F; /* Input background */
            color: #e2e8f0; /* Light text */
          }
          .question-form button {
            background-color: black; /* Changed to black */
            color: #00ffc6; /* Aqua color for text */
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          .question-form button:hover {
            background-color: #00a8ff; /* Neon blue on hover */
          }
          .confirmation {
            margin-top: 20px;
            padding: 10px;
            background-color: #00a3cc; /* Confirmation background */
            color: #e2e8f0; /* Light text */
            border-radius: 5px;
            font-weight: bold;
          }
          @media (max-width: 600px) {
            .faq-question {
              font-size: 16px;
            }
            .faq-answer {
              font-size: 14px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Forum;
