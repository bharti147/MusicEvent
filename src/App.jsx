import React, { useState } from 'react';
import EventComponent from './components/EventComponent';
import CollectionComponent from './components/CollectionComponent';
import ToggleButton from './components/ToggleButton';

function App() {
  const [activeOption, setActiveOption] = useState('event');

  const handleToggle = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="app-container">
      {activeOption === 'event' ? <EventComponent /> : <CollectionComponent />}
      <ToggleButton handleToggle={handleToggle} />
    </div>
  );
}

export default App;
