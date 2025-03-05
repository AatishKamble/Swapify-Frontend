import { useEffect, useState } from "react";

const AddressEdit = ({ setCurrentStep }) => {
  useEffect(() => {
    window.scrollTo(1, 1);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    houseNo: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormSaved, setIsFormSaved] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: value ? "" : "This field is required" }));
    setIsFormSaved(false); // Reset form saved state on change
  };

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = "This field is required";
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted Successfully!", formData);
      setIsFormSaved(true); // Enable the "Next" button
    }
  }

  return (
    <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div
        className="bg-gray-800 text-white px-6 py-3 flex items-center cursor-pointer"
        onClick={() => setCurrentStep(2)}
      >
        <h2 className="text-lg font-semibold">Delivery Address</h2>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="px-8 py-6 space-y-5">
        {/* First & Last Name */}
        <div className="grid grid-cols-2 gap-4">
          {["firstName", "lastName"].map((field, index) => (
            <div key={index}>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                {field === "firstName" ? "First Name" : "Last Name"}
              </label>
              <input
                className="w-full border rounded-md py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                type="text"
                placeholder={field === "firstName" ? "First Name" : "Last Name"}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
              />
              {errors[field] && <p className="text-red-500 text-xs mt-1">{errors[field]}</p>}
            </div>
          ))}
        </div>

        {/* Mobile & House No */}
        <div className="grid grid-cols-2 gap-4">
          {["mobile", "houseNo"].map((field, index) => (
            <div key={index}>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                {field === "mobile" ? "Mobile Number" : "House No"}
              </label>
              <input
                className="w-full border rounded-md py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                type="text"
                placeholder={field === "mobile" ? "Mobile Number" : "House No"}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
              />
              {errors[field] && <p className="text-red-500 text-xs mt-1">{errors[field]}</p>}
            </div>
          ))}
        </div>

        {/* Address */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Address</label>
          <textarea
            rows={3}
            className="w-full border rounded-md py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
            placeholder="Street Address"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleInputChange}
          ></textarea>
          {errors.streetAddress && <p className="text-red-500 text-xs mt-1">{errors.streetAddress}</p>}
        </div>

        {/* City & State */}
        <div className="grid grid-cols-2 gap-4">
          {["city", "state"].map((field, index) => (
            <div key={index}>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                {field === "city" ? "City" : "State"}
              </label>
              <input
                className="w-full border rounded-md py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                type="text"
                placeholder={field === "city" ? "City" : "State"}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
              />
              {errors[field] && <p className="text-red-500 text-xs mt-1">{errors[field]}</p>}
            </div>
          ))}
        </div>

        {/* Zip Code */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Zip Code</label>
          <input
            className="w-full border rounded-md py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            type="text"
            placeholder="Zip Code"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
          />
          {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
        </div>

        {/* Save Button */}
        <div className="flex justify-center mt-6">
          <button
            className={`py-2 px-6 rounded-md transition-all duration-300 font-semibold text-white ${
              Object.values(formData).some((val) => !val.trim())
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            type="submit"
            disabled={Object.values(formData).some((val) => !val.trim())}
          >
            Save
          </button>
        </div>
      </form>

      {/* Navigation Buttons */}
      <div className="flex justify-between bg-gray-100 px-8 py-4 border-t rounded-b-lg">
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded-md transition-all duration-300"
          type="button"
          onClick={() => setCurrentStep(0)}
        >
          Previous
        </button>

        <button
          className={`py-2 px-6 rounded-md font-medium text-white transition-all duration-300 ${
            isFormSaved ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
          }`}
          type="button"
          onClick={() => isFormSaved && setCurrentStep(2)}
          disabled={!isFormSaved}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AddressEdit;
