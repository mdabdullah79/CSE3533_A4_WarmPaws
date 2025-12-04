import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { getAuth, sendPasswordResetEmail } from "firebase/auth"; // Firebase import

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location.state?.email || "");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage(
          `Password reset email sent to ${email}. Check your inbox.`
        );
        setError("");
      })
      .catch((err) => {
        setError(err.message);
        setMessage("");
      });
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-2xl font-bold mb-5">Reset Password</h1>
      <form
        onSubmit={handleReset}
        className="card bg-base-100 w-full max-w-sm shadow-sm p-5"
      >
        <div className="card-body">
          <label className="label">Email</label>
          <input
            type="email"
            className="input input-bordered w-full mb-4"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {message && <p className="text-green-500 mb-2">{message}</p>}
          {error && <p className="text-red-500 mb-2">{error}</p>}

          <button type="submit" className="btn btn-neutral w-full">
            Reset Password
          </button>
        </div>
      </form>
      <button
        className="btn btn-link mt-4"
        onClick={() => navigate("/auth/login")}
      >
        Back to Login
      </button>
    </div>
  );
};

export default ForgotPassword;
