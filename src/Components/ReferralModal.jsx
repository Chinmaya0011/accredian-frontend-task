import React, { useState } from 'react';
import axios from 'axios';

const ReferralModal = ({ open, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({ referrer: '', referee: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.referrer || !formData.referee) {
      alert('All fields are required!');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/referrals', formData);
      onSubmit(response.data);
      setFormData({ referrer: '', referee: '' });
      onClose();
    } catch (error) {
      console.error('Failed to submit referral', error);
      alert('Failed to submit referral');
    }
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${open ? 'block' : 'hidden'}`}>
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Refer a Course</h2>
        <input
          type="text"
          name="referrer"
          placeholder="Your Name"
          value={formData.referrer}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="text"
          name="referee"
          placeholder="Friend's Name"
          value={formData.referee}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <button
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          className="px-6 py-2 ml-4 bg-gray-300 text-gray-800 font-semibold rounded-md hover:bg-gray-400"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ReferralModal;
