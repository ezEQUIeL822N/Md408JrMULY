// 代码生成时间: 2025-09-19 04:17:54
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the shape of the form data
const formDataShape = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

const FormValidator = ({ initialValues, onSubmit }) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  // Validate function
  const validate = () => {
    let newErrors = {};
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
    if (!formData.email || !formData.email.includes('@')) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  // Change handler
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

FormValidator.propTypes = {
  initialValues: PropTypes.shape(formDataShape).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormValidator;
