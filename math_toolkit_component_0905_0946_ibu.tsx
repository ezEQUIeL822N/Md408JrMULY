// 代码生成时间: 2025-09-05 09:46:07
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define PropTypes for the component
const MathToolkitPropTypes = {
  operation: PropTypes.string.isRequired,
  firstNumber: PropTypes.number.isRequired,
  secondNumber: PropTypes.number.isRequired,
  onResult: PropTypes.func.isRequired,
};

// Define TypeScript types for the component
type MathToolkitProps = {
  operation: string;
  firstNumber: number;
  secondNumber: number;
  onResult: (result: number) => void;
};

const MathToolkitComponent: React.FC<MathToolkitProps> = ({
  operation,
  firstNumber,
  secondNumber,
  onResult,
}) => {

  // State to store the result of the calculation
  const [result, setResult] = useState<number>(0);

  // Function to handle the calculation based on the operation
  const calculate = () => {
    switch (operation) {
      case 'add':
        setResult(firstNumber + secondNumber);
        break;
      case 'subtract':
        setResult(firstNumber - secondNumber);
        break;
      case 'multiply':
        setResult(firstNumber * secondNumber);
        break;
      case 'divide':
        if (secondNumber === 0) {
          alert('Cannot divide by zero.');
          return;
        }
        setResult(firstNumber / secondNumber);
        break;
      default:
        alert('Unsupported operation.');
        return;
    }

    // Call the onResult function with the result
    onResult(result);
  };

  return (
    <div>
      <button onClick={calculate}>Calculate</button>
      <div>Result: {result}</div>
    </div>
  );
};

// PropTypes validation
MathToolkitComponent.propTypes = MathToolkitPropTypes;

export default MathToolkitComponent;