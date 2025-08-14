// 代码生成时间: 2025-08-14 08:11:38
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// PropTypes for the component's props
const propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

// TypeScript type for the component's props
type RandomNumberGeneratorProps = {
  min: number;
  max: number;
};

const RandomNumberGenerator = ({ min, max }: RandomNumberGeneratorProps) => {
  // State to store the generated random number
  const [randomNumber, setRandomNumber] = useState<number>(0);

  // Function to generate a random number
  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    setRandomNumber(number);
  };

  return (
    <div>
      <h1>Random Number Generator</h1>
      <p>Generated number: {randomNumber}</p>
      <button onClick={generateRandomNumber}>Generate</button>
    </div>
  );
};

RandomNumberGenerator.propTypes = propTypes;

export default RandomNumberGenerator;