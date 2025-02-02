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

  // selectedCountry.currencies;

 
// var selectedOption;


// if(isCurrency){
// const getName = (item) => {
//   // Loop through keys of each object and return the first found `nameG`
//   for (const key in item) {
//     return item[key];
//   }
//   return "No name found"; // Default if no `nameG` exists
// };

// selectedOption=getName(selectedCountry.currencies);
// countries.map((c)=> {
  // console.log("map country name ======================"+getName(c.currencies).name);
// });

console.log("get currency obj ======================"+currencies);
// }



  return (
    <div className={className}>
      <h4>{title}</h4>
      <p className="fs-5">{description}</p>
      {isCurrency?<></>: <button  className="btn btn-warning text-white fs-6 px-3 rounded-pill w-100">
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
       isCurrency?              
      <select
      className="form-select border-0 shadow-none"
      onChange={onChanged}
      value={selectedCurrency.name }
     >
      {currencies.map((c) => (
        <option key={c.name} value={c.name}>
          {c.name}
        </option>
      ))}

           </select>:
           ///coutnry dropdown
 <select
 className="form-select border-0 shadow-none"
 onChange={onChanged}
 value={selectedCountry.name }
>
 {countries.map((country) => (
   <option key={country.flag} value={country.name}>
     {country.name}
   </option>
 ))}
      </select>}
      </div>
      <div>{ isCurrency? <></> :  <input className=" my-3 form-control" placeholder={input}/>}</div>
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
  currencies:PropTypes.array,
  selectedCurrency:PropTypes.object,
};

export default GeneralCard;