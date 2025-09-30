// 代码生成时间: 2025-09-30 19:07:08
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define prop types for better development experience and type checking
const propTypes = {
  iterations: PropTypes.number.isRequired,
  seed: PropTypes.number,
};

// MonteCarloSimulator functional component
const MonteCarloSimulator = ({ iterations, seed }) => {
  const [result, setResult] = useState({
    pointsInside: 0,
    pointsOutside: 0,
    ratio: 0,
  });

  const random = (min, max) => Math.random() * (max - min) + min;

  // Simulate a single point
  const simulatePoint = () => {
    const x = random(-1, 1);
    const y = random(-1, 1);
    return x * x + y * y <= 1 ? 'inside' : 'outside';
  };

  // Simulate all points
  const simulateAll = () => {
    const pointsInside = 0;
    const pointsOutside = 0;
    for (let i = 0; i < iterations; i++) {
      const result = simulatePoint();
      result === 'inside' ? pointsInside++ : pointsOutside++;
    }
    setResult({
      pointsInside,
      pointsOutside,
      ratio: (pointsInside / iterations).toFixed(4),
    });
  };

  return (
    <div>
      <h1>Monte Carlo Simulator</h1>
      <button onClick={simulateAll}>Simulate</button>
      <p>Total iterations: {iterations}</p>
      <p>Points inside circle: {result.pointsInside}</p>
      <p>Points outside circle: {result.pointsOutside}</p>
      <p>Estimated ratio: {result.ratio}</p>
    </div>
  );
};

MonteCarloSimulator.propTypes = propTypes;

export default MonteCarloSimulator;