// Import React and useState from React library
import React, { useState } from 'react';

// Import the Dropdown component and the CSS file
import Dropdown from './Dropdown';
import './App.css';

// Functional component App
const App = () => {
  // Define options for the dropdown
  const options = [
    { label: 'React JS', value: 'ReactJs' },
    { label: 'Node Js', value: 'NodeJs' },
    { label: 'Vue Js', value: 'VueJs' },
    { label: 'Python', value: 'Python' },
    { label: 'React Native', value: 'React Native' },
    { label: 'Next Js', value: 'NextJs' },
  ];

  // State to track the selected option
  const [selectedOption, setSelectedOption] = useState(null);

  // Handler function to update the selected option
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // JSX structure for the application
  return (
    <div className='container-fluid'>
      {/* Header */}
      <div className="row mt-4">
        <div className="col-md-12">
          <h1 className='text-success text-center'>React Dropdown </h1>
        </div>
      </div>

      {/* Subheader */}
      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <h2 className='fw-bold text-bg-secondary text-center p-2'>Select Your Coding Skill</h2>
        </div>
      </div>

      {/* Dropdown component */}
      <Dropdown options={options} onSelect={handleOptionSelect} />

      {/* Display selected option */}
      <div className="row justify-content-center">
        <div className="col-md-6">
          {selectedOption && <h2 className='fw-bold text-primary text-center p-2'>My Skill = ( {selectedOption.label} )</h2>}
        </div>
      </div>
    </div>
  );
};

// Export the App component
export default App;
