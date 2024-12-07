// FormComponent.jsx
import React from "react";

const FormComponent = () => {
  return (
    <div className="fixed bottom-24 right-2 z-10 bg-white p-4 shadow-lg rounded-lg w-[300px]">
      <h4 className="text-xl font-semibold mb-4">Free Assessment</h4>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input type="text" id="name" className="w-full px-4 py-2 mt-1 border rounded-lg" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input type="email" id="email" className="w-full px-4 py-2 mt-1 border rounded-lg" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">Message</label>
          <textarea id="message" className="w-full px-4 py-2 mt-1 border rounded-lg" placeholder="Your Message" />
        </div>
        <button type="submit" className="w-full bg-custom-blue text-white py-2 rounded-lg hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
