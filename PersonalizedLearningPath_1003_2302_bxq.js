// 代码生成时间: 2025-10-03 23:02:00
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the shape of the learning path items.
const learningPathItemShape = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  completed: PropTypes.bool,
};

function PersonalizedLearningPath({ initialLearningPath }) {
  // State to manage the learning path.
  const [learningPath, setLearningPath] = useState(initialLearningPath);

  // Handle the completion of a learning path item.
  const completeItem = (itemId) => {
    setLearningPath(
      learningPath.map((item) =>
        item.id === itemId ? { ...item, completed: true } : item
      )
    );
  };

  return (
    <div>
      <h1>Personalized Learning Path</h1>
      <ul>
        {learningPath.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            {item.completed ? (
              <em>Completed</em>
            ) : (
              <button onClick={() => completeItem(item.id)}>Complete</button>
            )}
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// PropTypes for the component.
PersonalizedLearningPath.propTypes = {
  initialLearningPath: PropTypes.arrayOf(PropTypes.shape(learningPathItemShape)).isRequired,
};

// Default props for the component.
PersonalizedLearningPath.defaultProps = {
  initialLearningPath: [],
};

export default PersonalizedLearningPath;
