// 代码生成时间: 2025-08-03 16:38:20
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the type for the sorting algorithm
type SortingAlgorithmType = (array: number[]) => number[];

// PropTypes for the component
const propTypes = {
  algorithm: PropTypes.func.isRequired,
  array: PropTypes.arrayOf(PropTypes.number).isRequired,
};

// TypeScript type for the component's props
interface SortAlgorithmComponentProps {
  algorithm: SortingAlgorithmType;
  array: number[];
}

const SortAlgorithmComponent: React.FC<SortAlgorithmComponentProps> = ({ algorithm, array }) => {
  // State to hold the sorted array
  const [sortedArray, setSortedArray] = useState<number[]>(array);
  
  // Function to handle sorting
  const sort = () => {
    setSortedArray(algorithm(array));
  };
  
  // Render the component
  return (
    <div>
      <button onClick={sort}>Sort</button>
      <ul>
        {sortedArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// Set the propTypes for the component
SortAlgorithmComponent.propTypes = propTypes;

export default SortAlgorithmComponent;
