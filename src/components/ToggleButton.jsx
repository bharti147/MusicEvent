import React, { useState } from 'react';
import '../styles/ToggleButton.css'; // Import your CSS file for styling

function ToggleButton({ handleToggle }) {
  const [activeOption, setActiveOption] = useState('event');

  const handleOptionChange = (option) => {
    setActiveOption(option);
    handleToggle(option); // Pass the selected option to the parent component
  };

  return (   

    <div className='toggleBtn'>
      <div className="toggle">
        <button
          className={activeOption === 'event' ? 'active' : ''}
          onClick={() => handleOptionChange('event')}
        >
          Event
        </button>
        <button
          className={activeOption === 'collection' ? 'active' : ''}
          onClick={() => handleOptionChange('collection')}
        >
          Collection
        </button>
      </div>
    </div>
  );
}

export default ToggleButton;
