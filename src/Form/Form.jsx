import React, { useState } from "react";
import { connect } from "react-redux";
import { updateForm } from "./../Form/action";

const Form = ({ formData, updateForm }) => {
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateForm({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = formData;
    const whiteSpaceName = name.trim();
    const whiteSpaceEamil = email.trim();
    if (whiteSpaceName !== "" && whiteSpaceEamil !== "") {
      setSubmittedData(formData);
      updateForm({
        name: "",
        email: "",
      });
    }
  };
  console.log(submittedData);

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div>
          <h2>Submitted Data</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    formData: state.formData,
  };
};

const mapDispatchToProps = {
  updateForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
