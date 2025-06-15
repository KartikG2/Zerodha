import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");  // add dashboard link
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container mt-5 mb-5">
      <section>
        <div className="container text-center">
          <h1>Open a free demat and trading account online</h1>
          <p className="fs-5">
            Start investing brokerage free and join a community of 1.5+ crore
            investors and traders
          </p>
        </div>
      </section>
      <section className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src="media/images/account_open.svg" alt="Account Open " />
            </div>
            <div className="col-6">
              <div className="form_container">
                <form onSubmit={handleSubmit}>
                <h2>Signup Account</h2>
                  <div className="inputs">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      placeholder="Enter your email"
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="inputs">
                    <label htmlFor="email">Username</label>
                    <input
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Enter your username"
                    onChange={handleOnChange}
                    />
                  </div>
                  <div className="inputs">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      placeholder="Enter your password"
                      onChange={handleOnChange}
                    />
                  </div>
                  <button type="submit" className="submit-btn btn btn-primary mt-4 mb-2">Submit</button>
                  <span>
                    Already have an account? <Link to={"/login"}>Login</Link>
                  </span>
                  </form>
                  <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5">
        <div className="mini-container  mx-5 px-5">
          <h2 className="text-center mb-5">
            Steps to open a demat account with Zerodha
          </h2>
          <div className="row ">
            <div className="col-6">
              <img src="media/images/steps-acop.svg" alt="Steps"></img>
            </div>
            <div className="col-6 mt-4">
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <span className="border rounded-circle p-2">01</span>
                  <p className="d-inline-block fs-5  mx-4 my-0">
                    Enter the requested details
                  </p>
                  <hr />
                </li>
                <li>
                  <span className="border rounded-circle p-2">02</span>
                  <p className="d-inline-block fs-5  mx-4 my-0">
                    Complete e-sign & verification
                  </p>
                  <hr />
                </li>
                <li>
                  <span className="border rounded-circle p-2">03</span>
                  <p className="d-inline-block fs-5  mx-4 my-0">
                    Start investing!
                  </p>
                  <hr />
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