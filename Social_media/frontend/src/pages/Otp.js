import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "../components/Default_layout";


function Otp() {
  const [countdown, setCountdown] = useState(15);
  const [input, setInput] = useState("");
  const [flag, setFlag] = useState(true);
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user.user.phoneNumber.toString().substr(user.user.phoneNumber.length - 5));
    let interval = null;
    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setFlag(false);
    }
    return () => clearInterval(interval);
  }, [countdown]);

  useEffect(() => {
    if (countdown > 0 && input === "9999") {
      navigate("/home");
    }
  }, [input]);

  const handleOtp = (event) => {
    setInput(event.target.value);
  };

  const handletimeout = (event) => {
    navigate("/login");
  };

  return (
    <DefaultLayout>
    <div className="otp-form">
      <a href="/login" className="back-button">
        <div class="material-symbols-outlined">arrow_back</div>
        <div className="sign-out">Back to sign in</div>
      </a>
      <h2 className="otp-heading">Enter OTP</h2>
      <div className="otp-intimation">We have sent a one time password(OTP) to *****{user}</div>
      <div className="otp-input">
        <input
          type="text"
          placeholder="XXXX"
          maxLength={4}
          onChange={handleOtp} className="input-field"
        />
      </div>
      {flag ? (
        <></>
      ) : (
        <>
          {/* <h4>Click below to resend Otp</h4> */}
          <button onClick={handletimeout} className="submitBtn"> Resend</button>
        </>
      )}
      {flag ? (
        <h4 className="resend-otp">
          Resend OTP in 00:{countdown < 10 ? `0${countdown}` : countdown}
        </h4>
      ) : (
        <></>
      )}
    </div>
    </DefaultLayout>
  );
}

export default Otp;
