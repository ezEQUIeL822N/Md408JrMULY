// 代码生成时间: 2025-09-15 19:11:27
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the type for the sorting algorithm function
type SortingAlgorithm = (arr: number[]) => number[];

const SortingAlgorithmComponent: React.FC<{
  initialArray: number[];
  sortingFunction: SortingAlgorithm;
}> = ({ initialArray, sortingFunction }) => {
  // State to manage the array
  const [array, setArray] = useState(initialArray);

  // Handler to sort the array
  const sortArray = () => {
    const sortedArray = sortingFunction(array);
    setArray(sortedArray);
  };

  // Render the component
  return (
    <div>
      <h2>Array: {array.join(', ')}</h2>
      <button onClick={sortArray}>Sort Array</button>
    </div>
  );
};

// PropTypes validation for the sorting function
SortingAlgorithmComponent.propTypes = {
  initialArray: PropTypes.arrayOf(PropTypes.number).isRequired,
  sortingFunction: PropTypes.func.isRequired,
};

// Define a simple bubble sort algorithm as an example
const bubbleSort: SortingAlgorithm = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        const temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

// Example usage of the component with bubble sort
const App = () => {
  const initialArray = [64, 34, 25, 12, 22, 11, 90];
  return (
    <SortingAlgorithmComponent initialArray={initialArray} sortingFunction={bubbleSort} />
  );
};

export default App;