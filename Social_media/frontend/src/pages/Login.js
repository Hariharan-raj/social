import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DefaultLayout from "../components/Default_layout";
import { Link } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [flag, setFlag] = useState(true);

  function isValidInput(input) {
    const regex =
      /^(\+91|0)?[6-9]\d{9}$|^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})$/;
    return regex.test(input);
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handledb = async (user) => {
    await axios.post("http://localhost:5001/Number/login", user);
    // console.log("inside db");
    navigate("/otp");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = isValidInput(inputValue);
    setFlag(isValid);
    const user = {
      phoneNumber: inputValue,
    };
    if (isValid) {
      handledb(user);
      localStorage.setItem('user',JSON.stringify({user}))
    }
  };

  return (
    <DefaultLayout>
    <div className="sign-up-parent">
      <h1>Get Started</h1>
      <form onSubmit={handleSubmit}>
        <label>
          
          <input type="text" className="input-field" placeholder="Mobile / Email" value={inputValue} onChange={handleInputChange} />
          {flag ? (
            <></>
          ) : (
            <div className="errorMessage">Email is invalid. Please Try Again!</div>
          )}
        </label>
        <button type="submit" className="submitBtn">
          <div className="ctn-txt">Continue</div>
          <div class="material-symbols-outlined">arrow_forward</div>
        </button>
        
      </form>
      <div className="alternate-login">
        <span>Or continue with</span>
          <div className="social-btn-section">
            <button className="whatsapp" onClick={event =>  window.location.href='/not_found'}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.693 56.693">
                  <path
                    fill="#1cd741"
                    fillRule="evenodd"
                    d="M46.38 10.714c-4.65-4.657-10.836-7.222-17.426-7.225-13.579 0-24.63 11.05-24.636 24.633a24.589 24.589 0 003.289 12.316L4.112 53.204l13.06-3.426a24.614 24.614 0 0011.772 2.999h.01c13.577 0 24.63-11.052 24.635-24.635.002-6.582-2.558-12.772-7.209-17.428zM28.954 48.616h-.009a20.445 20.445 0 01-10.421-2.854l-.748-.444-7.75 2.033 2.07-7.555-.488-.775a20.427 20.427 0 01-3.13-10.897c.004-11.29 9.19-20.474 20.484-20.474a20.336 20.336 0 0114.476 6.005 20.352 20.352 0 015.991 14.485c-.004 11.29-9.19 20.476-20.475 20.476z"
                    className="fill-000000"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#1cd741"
                    fillRule="evenodd"
                    d="M40.185 33.281c-.615-.308-3.642-1.797-4.206-2.003-.564-.205-.975-.308-1.385.308-.41.617-1.59 2.003-1.949 2.414-.359.41-.718.462-1.334.154-.615-.308-2.599-.958-4.95-3.055-1.83-1.632-3.065-3.648-3.424-4.264-.36-.617-.038-.95.27-1.257.277-.276.615-.719.923-1.078.308-.36.41-.616.616-1.027.205-.41.102-.77-.052-1.078-.153-.308-1.384-3.338-1.897-4.57-.5-1.2-1.008-1.038-1.385-1.057-.359-.018-.77-.022-1.18-.022s-1.077.154-1.642.77c-.564.616-2.154 2.106-2.154 5.135 0 3.03 2.206 5.957 2.513 6.368.308.41 4.341 6.628 10.516 9.294a35.341 35.341 0 003.509 1.297c1.474.469 2.816.402 3.877.244 1.183-.177 3.642-1.49 4.155-2.927.513-1.438.513-2.67.359-2.927-.154-.257-.564-.41-1.18-.719z"
                    className="fill-000000"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="social-name">WhatsApp</div>
            </button>
            <button className="google" onClick={event =>  window.location.href='/not_found'}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 128 128" xmlSpace="preserve">
                  <g>
                    <g fillRule="evenodd" clipRule="evenodd">
                      <path fill="none" d="M0 0H128V128H0z"></path>
                      <path
                        fill="#FBBC05"
                        d="M27.585 64c0-4.157.69-8.143 1.923-11.881L7.938 35.648C3.734 44.183 1.366 53.801 1.366 64c0 10.191 2.366 19.802 6.563 28.332l21.558-16.503A37.86 37.86 0 0127.585 64"
                      ></path>
                      <path
                        fill="#EA4335"
                        d="M65.457 26.182c9.031 0 17.188 3.2 23.597 8.436L107.698 16C96.337 6.109 81.771 0 65.457 0 40.129 0 18.361 14.484 7.938 35.648l21.569 16.471a37.77 37.77 0 0135.95-25.937"
                      ></path>
                      <path
                        fill="#34A853"
                        d="M65.457 101.818a37.77 37.77 0 01-35.949-25.937L7.938 92.349C18.361 113.516 40.129 128 65.457 128c15.632 0 30.557-5.551 41.758-15.951L86.741 96.221c-5.777 3.639-13.052 5.597-21.284 5.597"
                      ></path>
                      <path
                        fill="#4285F4"
                        d="M126.634 64c0-3.782-.583-7.855-1.457-11.636h-59.72v24.727h34.376c-1.719 8.431-6.397 14.912-13.092 19.13l20.474 15.828c11.766-10.92 19.419-27.188 19.419-48.049"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="social-name">Google</div>
            </button>
          </div>
          <div className="terms-cond">By continuing, you agree to our 
          <a href="/not_found"> terms </a> and <a href="/not_found"> conditions</a>
          </div>
        </div>
      </div>
      
    </DefaultLayout>
  );
}

export default Login;
