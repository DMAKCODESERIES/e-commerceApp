import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const res = await axios.post('http://localhost:3000/api/login', { email, password });
      console.log(res.data)
      if (res) {
        console.log("User logged in successfully")
        navigate("/")
        setLoading(false)
        localStorage.setItem("token", res.data.token)
      }
      else {
        alert("invalid email or password")
      }

    } catch (error) {
      console.log(error)
      alert(error)
      setLoading(false)
    }
  }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
        <h4 className="text-center mb-3">Login</h4>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label" >
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3 position-relative">
            <label htmlFor="password" className="form-label" >
              Password
            </label>
            <div className="position-relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                placeholder="Enter your password"
                required
              />
              <span
                className="position-absolute top-50 end-0 translate-middle-y me-2"
                style={{ cursor: "pointer" }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          {
            loading ?
              <div className="d-flex justify-content-center">
                <div className="spinner-border d-flex justify-content-center text-warning" role="status">
                  <span className="sr-only "></span>
                </div>
              </div>
              :
              <button type="submit" className="btn btn-primary w-100" onClick={handleLogin}>
                Login
              </button>
          }

          <p className="mt-3 text-center">
            Already have an account? <Link to="/SignUp">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}