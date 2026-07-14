import React, { useContext } from "react";
import { AppContext } from "./App";
import InputField from "./InputField";

function FormFields() {
  const { formData, handleChange } = useContext(AppContext);

  return (
    <form>
      <InputField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
      <InputField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
      <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
      <InputField label="Mobile Number" name="mobile" type="tel" value={formData.mobile} onChange={handleChange} />
      <InputField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />
      <InputField label="Confirm Password" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} />
      <InputField label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} />
      <InputField label="Gender" name="gender" value={formData.gender} onChange={handleChange} />
      <InputField label="Address" name="address" value={formData.address} onChange={handleChange} />
      <InputField label="City" name="city" value={formData.city} onChange={handleChange} />
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
}

export default FormFields;
