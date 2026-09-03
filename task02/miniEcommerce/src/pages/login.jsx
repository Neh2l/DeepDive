import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaUser,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    if (password.length < 6) {
      alert(
        "Password must be at least 6 characters."
      );
      return;
    }

    const user = {
      name: email.split("@")[0],
      email: email,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    navigate("/");
  }

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-icon">
          <FaUser />
        </div>

        <h1>Welcome Back</h1>

        <p>
          Login to your Mini Store account.
        </p>

        <form onSubmit={handleSubmit}>

          <label>
            <FaEnvelope />
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <label>
            <FaLock />
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}