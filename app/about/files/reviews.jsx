"use client";
import { useState, useEffect } from "react";

const reviews = [
  { name: "John Doe", text: "Great service! Highly recommend!" },
  { name: "Jane Smith", text: "Very professional and helpful." },
  { name: "Sam Brown", text: "The best visa consultancy experience!" },
  { name: "Anna White", text: "Amazing team and smooth process." },
  { name: "David Green", text: "They helped me every step of the way!" },
  { name: "Emily Davis", text: "I’m so happy with the results!" },
];

const ReviewsSection = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Clients Say</h2>
        
        {/* Review Container */}
        <div className="relative overflow-hidden">
          {/* First Row */}
          <div className="absolute flex animate-move-right space-x-4">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg w-64">
                <p className="text-gray-800 font-semibold">{review.name}</p>
                <p className="text-gray-600">{review.text}</p>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="absolute flex animate-move-left space-x-4 top-24">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg w-64">
                <p className="text-gray-800 font-semibold">{review.name}</p>
                <p className="text-gray-600">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
