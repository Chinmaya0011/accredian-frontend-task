// src/App.jsx
import React, { useState } from 'react';
import HeroSection from './Components/HeroSection';
import ReferralModal from './Components/ReferralModal';
import axios from 'axios';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleReferClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleFormSubmit = async (data) => {
    try {
      await axios.post('http://localhost:3001/api/referral', data);
      alert('Referral submitted successfully!');
    } catch (error) {
      alert('Failed to submit referral.');
    }
  };

  return (
    <div className="App">
      <HeroSection onReferClick={handleReferClick} />
      <ReferralModal open={modalOpen} onClose={handleModalClose} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
