import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useFormStore from '../store/useFormStore';

const MultiStepForm = () => {
  const { personalInfo, setPersonalInfo, addressDetails, setAddressDetails, preferences, setPreferences } = useFormStore();
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState({});

  const validatePersonalInfo = () => {
    const newErrors = {};
    if (!personalInfo.name) newErrors.name = "Name is required.";
    if (!personalInfo.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(personalInfo.email)) newErrors.email = "Email is invalid.";
    return newErrors;
  };

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ [name]: value });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressDetails({ [name]: value });
  };

  const handlePreferencesChange = (e) => {
    const { name, checked } = e.target;
    setPreferences({ [name]: checked });
  };

  const nextStep = () => {
    if (currentStep === 0) {
      const validationErrors = validatePersonalInfo();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
    }
    setErrors({});
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleSubmit = () => {
    // Here you can handle the form submission logic, e.g., sending data to an API
    console.log("Form submitted:", { personalInfo, addressDetails, preferences });
    alert("Form submitted successfully!");
  };

  const steps = [
    { label: "Personal Information", content: <PersonalInfo handleChange={handlePersonalInfoChange} errors={errors} /> },
    { label: "Address Details", content: <AddressDetails handleChange={handleAddressChange} /> },
    { label: "Preferences", content: <Preferences handleChange={handlePreferencesChange} /> },
    { label: "Review & Submit", content: <ReviewSubmit personalInfo={personalInfo} addressDetails={addressDetails} preferences={preferences} handleSubmit={handleSubmit} /> },
  ];

  return (
    <div>
      <h2>{steps[currentStep].label}</h2>
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
      >
        {steps[currentStep].content}
      </motion.div>
      <div>
        <button onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))} disabled={currentStep === 0}>Previous</button>
        <button onClick={currentStep === steps.length - 1 ? handleSubmit : nextStep} disabled={currentStep === steps.length - 1}>
          {currentStep === steps.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

const PersonalInfo = ({ handleChange, errors }) => (
  <div>
    <h3>Personal Information</h3>
    <input type="text" name="name" placeholder="Name" onChange={handleChange} />
    {errors.name && <p className="text-red-500">{errors.name}</p>}
    <input type="email" name="email" placeholder="Email" onChange={handleChange} />
    {errors.email && <p className="text-red-500">{errors.email}</p>}
  </div>
);

const AddressDetails = ({ handleChange }) => (
  <div>
    <h3>Address Details</h3>
    <input type="text" name="street" placeholder="Street" onChange={handleChange} />
    <input type="text" name="city" placeholder="City" onChange={handleChange} />
    <input type="text" name="state" placeholder="State" onChange={handleChange} />
    <input type="text" name="zip" placeholder="ZIP Code" onChange={handleChange} />
  </div>
);

const Preferences = ({ handleChange }) => (
  <div>
    <h3>Preferences</h3>
    <label>
      <input type="checkbox" name="newsletter" onChange={handleChange} />
      Subscribe to newsletter
    </label>
    <label>
      <input type="checkbox" name="termsAccepted" onChange={handleChange} />
      Accept terms and conditions
    </label>
  </div>
);

const ReviewSubmit = ({ personalInfo, addressDetails, preferences, handleSubmit }) => (
  <div>
    <h3>Review & Submit</h3>
    <h4>Personal Information</h4>
    <p>Name: {personalInfo.name}</p>
    <p>Email: {personalInfo.email}</p>
    <h4>Address Details</h4>
    <p>Street: {addressDetails.street}</p>
    <p>City: {addressDetails.city}</p>
    <p>State: {addressDetails.state}</p>
    <p>ZIP Code: {addressDetails.zip}</p>
    <h4>Preferences</h4>
    <p>Newsletter: {preferences.newsletter ? "Yes" : "No"}</p>
    <p>Terms Accepted: {preferences.termsAccepted ? "Yes" : "No"}</p>
    <button onClick={handleSubmit}>Submit</button>
  </div>
);

export default MultiStepForm;
