// Import React and useState from React library
import React, { useState } from 'react';

// Dropdown component that receives options and onSelect function as props
const Dropdown = ({ options, onSelect }) => {
  // State to track the selected option and hover state
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isHovered, setIsHovered] = useState(false);

  // Handler function for option selection
  const handleOptionSelect = (event) => {
    // Extract the selected value from the event
    const selectedValue = event.target.value;

    // Find the selected option based on the value
    const selectedOption = options.find(option => option.value === selectedValue);

    // Update the selected option in the state and invoke the onSelect callback
    setSelectedOption(selectedOption);
    onSelect(selectedOption);
  };

  // Handler function for button hover
  const handleButtonHover = () => {
    setIsHovered(true);
  };

  // Handler function for button leave
  const handleButtonLeave = () => {
    setIsHovered(false);
  };

  // JSX structure for the dropdown component
  return (
    <div className="row justify-content-center mt-4 mb-4">
      <div className="col-md-4">
        <div onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave}>
          {/* Button to trigger dropdown */}
          <div className="row justify-content-center mt-2">
            <div className="col-md-5">
              <button className='btn btn-info mb-4  btn-lg'>Select Skill</button>
            </div>
          </div>

          {/* Dropdown menu */}
          {isHovered && (
            <select value={selectedOption.value} onChange={handleOptionSelect} className="form-select form-select-lg">
              {/* Render options dynamically from the provided options */}
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
    </div>
  );
};

// Export the Dropdown component
export default Dropdown;
