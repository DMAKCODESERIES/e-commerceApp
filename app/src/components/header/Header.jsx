
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GeneralCard from "./GeneralCard";

const Header = () => {
  const [showLocationCard, setShowLocationCard] = useState(false);
  const [countries, setCountries] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [currencyAndLang, setCurrenceyAndLang] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    name: "Pakistan",
    flag: "",
  });
  const [selectedCurrency, setSelectedCurrency] = useState({
    cname: "Pakistan",
    csymbol: "Rs",
  });

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await axios.get("https://restcountries.com/v3.1/all");
        const countryList = res.data.map((c) => ({
          name: c.name.common,
          flag: c.flags?.svg || "",
          currencies: c.currencies
            ? {
              code: Object.keys(c.currencies)[0] || "",
              cname: Object.values(c.currencies)[0]?.name || "",
              csymbol: Object.values(c.currencies)[0]?.symbol || "",
            }
            : null,
        }));

        setCountries(countryList);

        const filteredCurrencies = countryList
          .filter((c) => c.currencies)
          .map((c) => ({
            cname: c.currencies.cname,
            csymbol: c.currencies.csymbol,
          }));

        setCurrencies(filteredCurrencies);

        // Set default country and currency
        const pakistan = countryList.find((c) => c.name === "Pakistan");
        if (pakistan) {
          setSelectedCountry(pakistan);
          setSelectedCurrency({
            cname: pakistan.currencies?.cname || "Pakistan",
            csymbol: pakistan.currencies?.csymbol || "Rs",
          });
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const onchanged = (e) => {
    const selected = countries.find((c) => c.name === e.target.value);
    setSelectedCountry(selected);

    if (selected && selected.currencies) {
      setSelectedCurrency({
        cname: selected.currencies.cname,
        csymbol: selected.currencies.csymbol,
      });
    }
  };


  const onCurrencychange = useCallback(
    (e) => {
      const selected = currencies.find((c) => c.cname === e.target.value);
      setSelectedCurrency(selected);
    },
    [currencies]
  );

  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
      <div className="container-fluid d-flex justify-content-between align-items-center px-3 overflow-hidden">
        <a className="navbar-brand text-white" href="/">
          <img src="/logo.jpg" height={40} width={40} alt="Logo" />
        </a>

        <div className="d-flex align-items-center position-relative w-full" id="navbarSupportedContent">
          <div
            className="navbar-nav d-flex align-items-center"
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
              <GeneralCard
                className="top-50 z-50 position-absolute bg-white text-black translate-middle-x d-flex flex-column shadow-lg rounded p-4 w-75 mt-2"
                title="Specify Your Location"
                description="Shipping options and fees vary based on your location"
                signupBtnText="Sign Up"
                or="or"
                countries={countries}
                onChanged={onchanged}
                selectedCountry={selectedCountry}
                input="Enter zip code"
                saveBtnText="Save"
              />
            )}
          </div>

          {/* Set current currency */}
          <span
            className="text-white ms-3"
            onMouseEnter={() => setCurrenceyAndLang(true)}
            onMouseLeave={() => setCurrenceyAndLang(false)}
          >
            Currency - {selectedCurrency.csymbol ?? "Rs"}
            {currencyAndLang && (
              <GeneralCard
                className="top-50 z-50 position-absolute bg-white text-black translate-middle-x d-flex flex-column shadow-lg rounded p-4 w-75 mt-2"
                title="Specify Your Currency"
                isCurrency
                currencies={currencies}
                onChanged={onCurrencychange}
                selectedCurrency={selectedCurrency}
                saveBtnText="Save"
              />
            )}
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
