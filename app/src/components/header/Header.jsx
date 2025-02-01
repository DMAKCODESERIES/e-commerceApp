import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GeneralCard from "./GeneralCard";
const Header = () => {
  const [showLocationCard, setShowLocationCard] = useState(false);
  const [countries, setCountries] = useState([]);
  const [currencyAndLang, setCurrenceyAndLang] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    name: "Pakistan",
    flag: "", 
  });

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await axios.get("https://restcountries.com/v3.1/all");
        console.log("res======================"+res.data);

        const countryList = res.data.map((country) => ({
          name: country.name.common,
          flag: country.flags?.svg || "",
          currencies:country.currencies,
        }));
        
        setCountries(countryList);
        console.log("countries======================"+countries);

        const pakistan = countryList.find((c) => c.name === "Pakistan");
        if (pakistan) {
          setSelectedCountry(pakistan);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  const onchanged = (e) => {
    console.log("e.target.value======================"+e.target.value);
    const selected = countries.find((c) => c.name === e.target.value);
    setSelectedCountry(selected);
  };

  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
      <div className="container-fluid d-flex justify-content-between align-items-center px-3">
        <a className="navbar-brand text-white" href="/">
          <img src="/logo.jpg" height={40} width={40} alt="Logo" />
        </a>
       
        <div className="d-flex align-items-center position-realative w-full" id="navbarSupportedContent">
          <div
            className="navbar-nav d-flex align-items-center "
            onMouseEnter={() => setShowLocationCard(true)}
            onMouseLeave={() => setShowLocationCard(false)}
          >
            <span className="text-white me-2">Deliver to:</span>
            {selectedCountry.flag && (
              <img
                src={selectedCountry.flag}
                alt={selectedCountry.name}
                width={24}
                height={16}
                className="me-3"
              />
            )}

            {showLocationCard && (              
              // set card details
              <GeneralCard 
              className="top-50 z-50 position-absolute bg-wheat text-black translate-middle-x d-flex flex-column shadow-lg rounded p-4 w-25"
              title="Specify Your Location"
              description="Shipping options and fees vary based on your location"
              signupBtnText=
              "Sign Up"
              or="or"
              countries={countries}
              onChanged={onchanged}
              selectedCountry={selectedCountry}
              input="Enter zip code"
              saveBtnText="Save"
              />
            )}
          </div>
         {/* set current language */}
          <span className="text-white ms-3" 
          onMouseEnter={()=>setCurrenceyAndLang(true)}
          onMouseLeave={()=>setCurrenceyAndLang(false)}
          
          >Currency-PKR
          {currencyAndLang? 
          <GeneralCard
          className="top-50 z-50 position-absolute bg-wheat text-black translate-middle-x d-flex flex-column shadow-lg rounded p-4 w-25"
          title="Specify Your Currency"
          isCurrency={true}
          countries={countries}
          onChanged={onchanged}
          selectedCountry={selectedCountry}
          saveBtnText="Save"
          />:<></>}
          </span>
        
          <i className="bi bi-cart text-white fs-5 mx-3"></i>
          <button className="btn text-white fs-6 mx-2" onClick={() => navigate("/login")}>
            Sign In
          </button>
          <button
            className="btn btn-warning text-white fs-6 mx-3 px-3 rounded-pill"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
      </div>
   

    </nav>
  );
};

export default Header;
