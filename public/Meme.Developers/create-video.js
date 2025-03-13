
import React from 'react';
import { useHistory } from 'react-router-dom';
import { GoogleAuth } from 'google-auth-library';

const MemeDeveloperButton = () => {
  const history = useHistory();
  const auth = new GoogleAuth();

  const handleButtonClick = async () => {
    try {
      const user = await auth.getUser();
      if (user) {
        history.push('/meme-developer');
      } else {
        alert('Please verify with Google to access this page.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleButtonClick}>
      Go to Meme-Developer Page
    </button>
  );
};

export default MemeDeveloperButton