import React, { useState } from "react";
import "./AddEmployee.css";

function AddEmployee() {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    position: "",
    phno: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phno", formData.phno);
    formDataToSend.append("position", formData.position);
    formDataToSend.append("image", image);

    try {
      const response = await fetch("https://ems-backend-w5vv.onrender.com/auth/add-employee", {
        headers: {
          "x-auth-token": localStorage.getItem("user-token"),
        },
        method: "POST",
        body: formDataToSend,
      });
      const data = await response.json();
      if (data.success) {
        alert("Employee added successfully");
        // Reset form fields and image
        setFormData({
          name: "",
          password: "",
          email: "",
          position: "",
          phno: "",
        });
        setImage(null);
      } else {
        alert("Failed to add employee");
      }
    } catch (error) {
      console.error("Error adding employee:", error);
      alert("Failed to add employee. Please try again later.");
    }
  };

  return (
    <div className="add-employee-container">
      <h2>Add Employee</h2>
      <form className="add-employee-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            value={formData.name}
            name="name"
            placeholder="Enter Name"
            onChange={handleChange}
            type="text"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            value={formData.email}
            name="email"
            placeholder="Enter Email Address"
            onChange={handleChange}
            type="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            value={formData.password}
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            type="password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position:</label>
          <input
            value={formData.position}
            name="position"
            placeholder="Enter Position"
            onChange={handleChange}
            type="text"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phno">Phone Number:</label>
          <input
            value={formData.phno}
            name="phno"
            placeholder="Enter Phone Number"
            onChange={handleChange}
            type="tel"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddEmployee;
