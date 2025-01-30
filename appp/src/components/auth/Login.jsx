import { useState } from "react";
import axios from "axios"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const[isVisible, setVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const handleClick = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post("http://localhost:3000/login", { email, password });
            alert('Login successful');
            navigate('/             ');
            console.log("Login successful", response.data);
        } catch (error) {
            console.log("Login failed", error.response ? error.response.data : error);
            alert("Invalid credentials. Please try again.");
            setIsLoading(false);
        }
    };
    
    return (
      <div className=" d-flex flex-column justify-content-center align-items-center vh-100 vw-100 text-black">
        <form className="bg-wheat p-4 rounded shadow w-30" >
          <h5 className="text-center mb-4">Login</h5>
  
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              required
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <label className="form-label ">Password</label>
          <div className="position-relative">
      <input
        type={isVisible ? "text" : "password"}
        className="form-control  mb-4"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <span
        className="position-absolute top-50 end-0 translate-middle-y me-3"
        style={{ cursor: "pointer" }}
        onClick={()=>setVisible(!isVisible) }
      >
        <i className={isVisible ? "bi bi-eye" : "bi bi-eye-slash"}></i>
      </span>
    </div>
  
         
          {isLoading? <div  style={{ display: "flex", justifyContent: "center" }}>
          <div   className="spinner-border  d-flex justify-content-center" role="status"  >
            <span className="sr-only "/>
           </div>
           </div>:
            <button type="submit" className="btn btn-primary w-100 " 
            onClick={handleClick}
            >Sign Up</button>}
          <p className="mt-3 text-center">
          Don&apos;t have an account?
          <Link to="/SignUp">Register</Link>
          </p>
        </form>
      </div>
    );
  };
  
  export default Login;