import React, { useState } from "react";

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [otherDetails, setOtherDetails] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNumberChange = (e) => {
    const inputNumber = e.target.value;
    // Only allow numbers and limit to 10 digits
    const formattedNumber = inputNumber.replace(/\D/g, "").slice(0, 10);
    setNumber(formattedNumber);
  };

  const handleOtherDetailsChange = (e) => {
    setOtherDetails(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Perform registration logic here
    // Assuming registration is successful, show the success popup
    setShowPopup(true);
    // Reset form fields
    setEmail("");
    setPassword("");
    setNumber("");
    setOtherDetails("");
  };

  return (
    <div className="registration-form">
      <h1>Registration Form</h1>
      <form onSubmit={handleRegister}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <label htmlFor="number">Number:</label>
        <input
          type="text"
          id="number"
          value={number}
          onChange={handleNumberChange}
          pattern="[0-9]{10}"
          required
        />

        <label htmlFor="otherDetails">Other Details:</label>
        <input
          type="text"
          id="otherDetails"
          value={otherDetails}
          onChange={handleOtherDetailsChange}
        />

        <button type="submit">Register</button>
      </form>

      {showPopup && (
        <div className="popup">
          <p>Registration successful!</p>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
