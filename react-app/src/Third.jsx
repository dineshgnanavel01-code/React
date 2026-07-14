// src/components/Third.jsx
import React, { useContext } from 'react';
import { FormDataContext, ThemeContext } from '../contexts';

function Third() {
  const { formData, setFormData } = useContext(FormDataContext);
  const { theme } = useContext(ThemeContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  const inputStyle = {
    padding: '8px',
    width: '100%',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px', backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h3>Registration Form</h3>
      
      <label>First Name</label>
      <input style={inputStyle} type="text" name="firstName" value={formData.firstName} onChange={handleChange} />

      <label>Last Name</label>
      <input style={inputStyle} type="text" name="lastName" value={formData.lastName} onChange={handleChange} />

      <label>Email</label>
      <input style={inputStyle} type="email" name="email" value={formData.email} onChange={handleChange} />

      <label>Mobile Number</label>
      <input style={inputStyle} type="tel" name="mobile" value={formData.mobile} onChange={handleChange} />

      <label>Password</label>
      <input style={inputStyle} type="password" name="password" value={formData.password} onChange={handleChange} />

      <label>Confirm Password</label>
      <input style={inputStyle} type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />

      <label>Date of Birth</label>
      <input style={inputStyle} type="date" name="dob" value={formData.dob} onChange={handleChange} />

      <label>Gender</label>
      <select style={inputStyle} name="gender" value={formData.gender} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <label>Address</label>
      <input style={inputStyle} type="text" name="address" value={formData.address} onChange={handleChange} />

      <label>City</label>
      <input style={inputStyle} type="text" name="city" value={formData.city} onChange={handleChange} />

      <button type="submit" style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#007bff', color: '#fff' }}>Submit</button>
    </form>
  );
}

export default Third;