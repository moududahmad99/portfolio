import React from 'react';
import './styles.css'; // You can create this CSS file to style the spinner

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;