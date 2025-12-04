import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Auth.css";

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({}); // State to hold validation errors

  const { email, password, username } = inputValue;
  
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  // Validation Logic
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    // Email Validation
    if (!email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Email address is invalid";
      isValid = false;
    }

    // Username Validation
    if (!username) {
      tempErrors.username = "Username is required";
      isValid = false;
    } else if (username.length < 3) {
      tempErrors.username = "Username must be at least 3 characters";
      isValid = false;
    }

    // Password Validation
    if (!password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Run validation before submitting
    if (!validateForm()) {
      return; 
    }

    setLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/signup`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = process.env.REACT_APP_DASHBOARD_API_URL; 
        }, 1000);
      } else {
        handleError(message);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      handleError("Something went wrong");
      setLoading(false);
    }
    // Only clear form on successful submission if needed, otherwise keep data so user can fix errors
    if(errors.length === 0) { 
        setInputValue({
        ...inputValue,
        email: "",
        password: "",
        username: "",
        });
    }
  };

  return (
    <div className="container mt-5 mb-5">
      {/* Hero Text */}
      <section className="mb-5">
        <div className="container text-center">
          <h1 className="mb-3 fs-2">Open a free demat and trading account online</h1>
          <p className="fs-5 text-muted">
            Start investing brokerage free and join a community of 1.5+ crore
            investors and traders
          </p>
        </div>
      </section>

      {/* Signup Form Section */}
      <section className="pt-4">
        <div className="container">
          <div className="row align-items-center">
            {/* Image Column */}
            <div className="col-12 col-md-7 mb-5 mb-md-0 text-center">
              <img src="media/images/account_open.svg" alt="Account-Open" className="img-fluid" style={{maxWidth: "90%"}} />
            </div>
            
            {/* Form Column */}
            <div className="col-12 col-md-5">
              <div className="form_container login_container p-4"> 
                <form onSubmit={handleSubmit}>
                <h2 className="text-center mb-4">Signup Account</h2>
                  <div className="inputs">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      placeholder="Enter your email"
                      onChange={handleOnChange}
                      className={errors.email ? "error" : ""} // Apply error class
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                  <div className="inputs">
                    <label htmlFor="username">Username</label>
                    <input
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Enter your username"
                    onChange={handleOnChange}
                    className={errors.username ? "error" : ""}
                    />
                    {errors.username && <span className="error-message">{errors.username}</span>}
                  </div>
                  <div className="inputs">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      placeholder="Enter your password"
                      onChange={handleOnChange}
                      className={errors.password ? "error" : ""}
                    />
                    {errors.password && <span className="error-message">{errors.password}</span>}
                  </div>
                  <button type="submit" className="submit-btn mt-4 mb-3" disabled={loading}>
                    {loading ? (
                         <span>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Loading...
                         </span>
                    ) : (
                        "Submit"
                    )}
                  </button>
                  <div className="text-center">
                    <span>
                      Already have an account? <Link to={"/login"}>Login</Link>
                    </span>
                  </div>
                  </form>
                  <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="pt-5 mt-5">
        <div className="container">
          <h2 className="text-center mb-5 fs-3">
            Steps to open a demat account with Zerodha
          </h2>
          <div className="row align-items-center">
            <div className="col-12 col-md-6 mb-5 mb-md-0 text-center">
              <img src="media/images/steps-acop.svg" alt="Steps" className="img-fluid" />
            </div>
            <div className="col-12 col-md-6">
              <ul className="list-unstyled ps-2 ps-md-4">
                <li className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                     <span className="border rounded-circle p-2 px-3 fw-bold text-primary">01</span>
                     <span className="fs-5 ms-3">Enter the requested details</span>
                  </div>
                  <hr className="text-muted"/>
                </li>
                <li className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                     <span className="border rounded-circle p-2 px-3 fw-bold text-primary">02</span>
                     <span className="fs-5 ms-3">Complete e-sign & verification</span>
                  </div>
                  <hr className="text-muted"/>
                </li>
                <li className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                     <span className="border rounded-circle p-2 px-3 fw-bold text-primary">03</span>
                     <span className="fs-5 ms-3">Start investing!</span>
                  </div>
                  <hr className="text-muted"/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>    
  );
};

export default Signup;