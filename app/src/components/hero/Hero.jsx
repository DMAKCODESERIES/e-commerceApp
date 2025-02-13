import { useState } from "react";
import HeroButton from "./heroButton";
import { BackgroundImage } from "./background-image";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="position-relative overflow-hidden">
      <BackgroundImage />

      <div className="position-absolute top-50 start-50 translate-middle z-1 mx-5 text-center">
        <h3 className="text-white">
          The leading B2C ecommerce platform for global trade
        </h3>

        <div className="d-flex align-items-center bg-white rounded-pill shadow p-2 mx-auto w-100" style={{ maxWidth: "500px" }}>
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control me-2 border-0 shadow-none flex-grow-1"
          />
          <button className="btn btn-warning d-flex align-items-center gap-2 text-white px-4 py-2 rounded-pill">
            Search
          </button>
        </div>

        <div className="d-flex mt-3 flex-wrap align-items-center justify-content-center gap-3">
          <h6 className="text-white mb-0">Frequently searched:</h6>
          <HeroButton text="Fashion and apparel" searchTerm={() => setSearchTerm("Fashion and apparel")} />
          <HeroButton text="Beauty and personal care" searchTerm={() => setSearchTerm("Beauty and personal care")} />
          <HeroButton text="Home and living" searchTerm={() => setSearchTerm("Home and living")} />
          <HeroButton text="Health and wellness" searchTerm={() => setSearchTerm("Health and wellness")} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
