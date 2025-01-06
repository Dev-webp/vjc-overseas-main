import React, { useState } from "react";
import "../css//QuizComponent.css"; // Make sure to include the styles

const QuizComponent = () => {
  const [showForm, setShowForm] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [userDetails, setUserDetails] = useState({ name: "", email: "", contact: "" });

  const questions = [
    { question: "What is your favorite color?", options: ["Red", "Blue", "Green", "Yellow"] },
    { question: "What is your favorite food?", options: ["Pizza", "Burger", "Pasta", "Sushi"] },
    { question: "Which is your favorite season?", options: ["Winter", "Spring", "Summer", "Autumn"] },
    { question: "What type of movies do you like?", options: ["Action", "Comedy", "Drama", "Sci-fi"] },
    { question: "What is your preferred vacation spot?", options: ["Beach", "Mountains", "City", "Countryside"] },
    { question: "Which is your favorite sport?", options: ["Soccer", "Cricket", "Basketball", "Tennis"] },
    { question: "What kind of music do you prefer?", options: ["Rock", "Pop", "Classical", "Jazz"] },
  ];

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) setCurrentQuestionIndex((prev) => prev - 1);
  };

  const handleAnswerSelect = (option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: option,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Details:", userDetails);
    console.log("Selected Answers:", selectedAnswers);
    alert("Form submitted successfully!");
    setShowForm(false); // Reset the form
  };

  return (
    <div className="quiz-container">
      {!showForm && (
        <button onClick={() => setShowForm(true)} className="start-button">
          Start Test
        </button>
      )}

      {showForm && (
        <div className="quiz-form">
          {currentQuestionIndex < questions.length ? (
            <div className="question-section">
              <h3>{questions[currentQuestionIndex].question}</h3>
              <div className="options">
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    className={`option-button ${
                      selectedAnswers[currentQuestionIndex] === option ? "selected" : ""
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <div className="navigation-buttons">
                {currentQuestionIndex > 0 && (
                  <button onClick={handlePrevious} className="nav-button">
                    Previous
                  </button>
                )}
                <button
                  onClick={handleNext}
                  className="nav-button"
                  disabled={!selectedAnswers[currentQuestionIndex]}
                >
                  Next
                </button>
              </div>
            </div>
          ) : (
            <div className="user-details-section">
              <h3>User Details</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={userDetails.name}
                  onChange={handleInputChange}
                  required
                  className="input-field"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={userDetails.email}
                  onChange={handleInputChange}
                  required
                  className="input-field"
                />
                <input
                  type="text"
                  name="contact"
                  placeholder="Contact"
                  value={userDetails.contact}
                  onChange={handleInputChange}
                  required
                  className="input-field"
                />
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
