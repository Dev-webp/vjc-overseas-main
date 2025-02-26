import React, { useState, useEffect } from 'react';
import AnimateHeader from "./AnimateHeader";
import { FaSpinner } from 'react-icons/fa';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [experience, setExperience] = useState('');
  const [qualification, setQualification] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [phoneError, setPhoneError] = useState('');

  // Close the success popup after 4 seconds
  useEffect(() => {
    if (popupVisible) {
      const timeout = setTimeout(() => {
        setPopupVisible(false);
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, [popupVisible]);

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    if (!validatePhone(value)) {
      setPhoneError('Please enter a valid 10-digit phone number.');
    } else {
      setPhoneError('');
    }
  };

  const isFormValid = () => {
    return (
      name.trim() !== '' &&
      email.trim() !== '' &&
      validatePhone(phone) &&
      age.trim() !== '' &&
      experience.trim() !== '' &&
      qualification.trim() !== '' &&
      message.trim() !== ''
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = {
      name,
      email,
      phone,
      age,
      experience,
      qualification,
      message,
    };

    try {
      const response = await fetch('/germany-opportunity-card/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setName('');
        setEmail('');
        setPhone('');
        setAge('');
        setExperience('');
        setQualification('');
        setMessage('');
        setPopupVisible(true);
      } else {
        setFormStatus('error');
        setErrorMessage('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error.message);
      setFormStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-4 py-2 rounded-lg shadow-md max-w-md mx-auto w-full h-[35rem] md:h-[32rem] lg:h-[32rem] tablet:h-[35rem] shadow-orange-300 mb-6 lg:mb-14">
      <AnimateHeader />
      <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-3 mt-4 lg:mt-0">
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-1.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Your Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-1.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Your Email"
          />
        </div>

        <div>
          <label htmlFor="phone" className="sr-only">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            className="w-full px-4 py-1.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            required
            pattern="\d*"
            title="Please enter a valid phone number"
            maxLength={10}
            minLength={10}
            value={phone}
            onChange={handlePhoneChange}
            aria-label="Phone Number"
          />
          {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
        </div>

        <div>
          <label htmlFor="age" className="sr-only">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Your Age"
            className="w-full px-4 py-1.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
            aria-label="Your Age"
          />
        </div>

        <div>
          <label htmlFor="experience" className="sr-only">Experience</label>
          <select
            id="experience"
            name="experience"
            className="w-full px-4 py-1.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            aria-label="Experience"
          >
            <option value="">Select Experience</option>
            <option value="1-2 years">1-2 years</option>
            <option value="3-5 years">3-5 years</option>
            <option value="5-7 years">5-7 years</option>
            <option value="7+ years">7+ years</option>
          </select>
        </div>

        <div>
          <label htmlFor="qualification" className="sr-only">Qualification</label>
          <select
            id="qualification"
            name="qualification"
            className="w-full px-4 py-1.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            aria-label="Qualification"
          >
            <option value="">Select your qualification</option>
            <option value="High School">High School</option>
            <option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
            <option value="Master's Degree">Master&apos;s Degree</option>
            <option value="Ph.D.">Ph.D.</option>
            <option value="Diploma">Diploma</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            name="message"
            rows="2"
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition resize-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-label="Your Message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-950 text-white py-2 rounded-lg font-semibold hover:bg-saffron transition-all duration-200 shadow-lg flex justify-center items-center"
          disabled={loading || !isFormValid()}
        >
          {loading ? (
            <FaSpinner className="animate-spin mr-2" />
          ) : null}
          {formStatus === 'success' ? 'Form Submitted!' : loading ? 'Submitting...' : 'Submit'}
        </button>

        {formStatus === 'error' && (
          <p className="text-red-500 text-sm mt-2 text-center">{errorMessage}</p>
        )}
      </form>

      {popupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center relative">
            <p className="text-xl font-semibold">Submission received, we’ll get back to you shortly!</p>
            <button
              onClick={() => setPopupVisible(false)}
              className="mt-4 bg-gray-950 text-white px-4 py-2 rounded-lg hover:bg-saffron transition-all duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
       
   
       

 
          
            

     
    
            
         
  
