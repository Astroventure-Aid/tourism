import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router';

const FormComponent = () => {
  // State variables for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    optionalPhone: '',
    transactionId: '',
    upiPaymentSS: null,
  });

  const { tripId } = useParams()

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      upiPaymentSS: e.target.files[0],
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const res = await axios.post(`${String(import.meta.env.VITE_APP_BACKEND_URI)}/api/v1/trip/submit-tripform/${tripId}`, formData, config)
    console.log(res);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-grey-50 p-8 rounded-lg shadow-md max-w-lg w-full">
        {/* Form Title */}
        <div className="text-center bg-slate-800 text-white py-3 rounded-t-lg mb-6 font-bold text-lg">
          Please enter your details
        </div>

        {/* Form Fields */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Optional Phone Number */}
          <div>
            <label htmlFor="optionalPhone" className="block text-sm font-medium text-gray-700">Optional Phone Number</label>
            <input
              type="text"
              id="optionalPhone"
              value={formData.optionalPhone}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Enter your optional phone number"
            />
          </div>

          {/* Transaction ID */}
          <div>
            <label htmlFor="transactionId" className="block text-sm font-medium text-gray-700">Transaction ID</label>
            <input
              type="text"
              id="transactionId"
              value={formData.transactionId}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Enter transaction ID"
              required
            />
          </div>

          {/* upiPaymentSS */}
          <div>
            <label htmlFor="upiPaymentSS" className="block text-sm font-medium text-gray-700">upiPaymentSS</label>
            <input
              type="file"
              id="upiPaymentSS"
              onChange={handleFileChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Click to proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
