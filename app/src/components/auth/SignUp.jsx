import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();



  ///submit
  const handleSubmite = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const res = await axios.post('http://localhost:3000/add', { name, email, password });
      if (res) {
        console.log("user added successfully")
        setLoading(false)
        navigate('/Login')
      }
      else (

        setLoading(false)
        ///alert


      )
    }
    catch (error) {
      setLoading(false),
        setName(""),
        setEmail(""),
        setPassword(""),
        alert("User already exist successfully")
      console.log(error)
    }
  }
  return (
    <div className="d-flex flex-column  vh-100 vw-100  justify-content-center align-items-center">
      <div>
        <form className="bg-wheat p-4 rounded shadow w-30  d-flex flex-column justify-content-center ">
          <h5 className="text-center mb-3">Sign Up</h5>
          <label className="mb-2">Name</label>
          <input type="text" className="form-control" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
          <label className="mb-2 mt-2">Email</label>
          <input type="email" className="form-control" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
          <label className="mb-2 mt-2">Password</label>
          <div className="position-relative">
            <input
              type={isVisible ? "text" : "password"}
              className="form-control "
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="position-absolute top-50 end-0 translate-middle-y me-3"
              style={{ cursor: "pointer" }}
              onClick={() => setIsVisible(!isVisible)}
            >
              <i className={isVisible ? "bi bi-eye" : "bi bi-eye-slash"}></i>
            </span>
          </div>


          {
            loading ?

              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="spinner-border d-flex justify-content-center" role="status"  >
                  <span className="sr-only " />
                </div>
              </div>
              :
              <button type="submit" className="btn btn-primary w-100 mt-3"
                onClick={handleSubmite}
              >Sign Up</button>}
          <p className="mt-3 text-center">
            Already have an account? <Link to="/Login">Log In</Link>
          </p>
        </form>
      </div>
    </div>

  )
}

export default SignUp
