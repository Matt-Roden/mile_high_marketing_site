import React, { useState, useEffect } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import "./LoadingBar.css"

const LoadingBar = ({ isLoading, isSuccess, isError }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (isSuccess) {
      // Redirect to success page or perform a success action
      setTimeout(() => {
        navigate('/'); // Redirect to success page
      }, 2000); // Delay for 2 seconds (adjust as needed)
    } else if (isError) {
      // Redirect to error page or perform an error action
      setTimeout(() => {
        navigate('/error'); // Redirect to error page
      }, 2000); // Delay for 2 seconds (adjust as needed)
    }
  }, [isSuccess, isError]);

  return (
    <div className="loading-bar">
      {isLoading && <div className="progress-bar" />}
      {isSuccess && <FaThumbsUp className="success-icon" />}
    </div>
  );
};

export default LoadingBar;
