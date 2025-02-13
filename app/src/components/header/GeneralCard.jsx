import PropTypes from "prop-types";

const GeneralCard = ({
  className,
  title,
  description,
  or,
  signupBtnText,
  countries,
  currencies,
  onChanged,
  selectedCountry,
  selectedCurrency,
  isCurrency,
  input,
  saveBtnText,
}) => {


  return (
    <div className={className}>
      <h4>{title}</h4>
      <p className="fs-5">{description}</p>
      {isCurrency ? <></> : <button className="btn btn-warning text-white fs-6 px-3 rounded-pill w-100">
        {signupBtnText}
      </button>}

      <p className="text-center text-muted small my-3">{or}</p>
      <div className="d-flex align-items-center border rounded p-2">
        {selectedCountry?.flag && (
          <img
            src={selectedCountry.flag}
            width={20}
            height={20}
            className="me-2"
            alt="flag"
          />
        )}
        {/* check if currency is selected */}
        {
          isCurrency ?
            <select
              className="form-select border-0 shadow-none"
              onChange={onChanged}
              value={selectedCurrency.cname}
            >
              {currencies.map((c, index) => (
                <option key={`${c.cname}${index}`} value={c.cname}>
                  {c.cname}
                </option>
              ))}

            </select> :
            ///coutnry dropdown
            <select
              className="form-select border-0 shadow-none"
              onChange={onChanged}
              value={selectedCountry.name}
            >
              {countries.map((country) => (
                <option key={country.flag} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>}
      </div>
      <div>{isCurrency ? <></> : <input className=" my-3 form-control" placeholder={input} />}</div>
      <button className="btn btn-warning text-white fs-6 px-3 rounded-pill w-100 mt-3">
        {saveBtnText}
      </button>
    </div>
  );
};

GeneralCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  or: PropTypes.string,
  signupBtnText: PropTypes.string,
  countries: PropTypes.array,
  onChanged: PropTypes.func,
  selectedCountry: PropTypes.object,
  input: PropTypes.string,
  saveBtnText: PropTypes.string,
  isCurrency: PropTypes.bool,
  currencies: PropTypes.array,
  selectedCurrency: PropTypes.object,
};

export default GeneralCard;