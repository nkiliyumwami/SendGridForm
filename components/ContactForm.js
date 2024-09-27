// components/ContactForm.js

'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-8 bg-white shadow-2xl rounded-lg mt-12"
    >
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
        Get in Touch
      </h2>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 h-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
      >
        Send Message
      </button>
      {status && (
        <p className="mt-4 text-center text-lg font-medium text-green-600">
          {status}
        </p>
      )}
    </form>
  );
};

export default ContactForm;