import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CategoriesCard = ({ category, cardStyle }) => {
    return (
        <div className={cardStyle}>
            <Link to="#" className="card text-decoration-none text-center bg-warning p-4 hover:p-6">
                <div>
                    <img
                        src="https://s.alicdn.com/@img/imgextra/i1/O1CN01tbfptg1Fv1tsyww7q_!!6000000000548-2-tps-96-96.png"
                        width={50}
                        height={50}
                        alt={category.name || "Category Image"}
                        className="rounded-circle bg-black m-3 p-2"
                    />
                    {category.name && <h3>{category.name}</h3>}
                    {category.description && <p>{category.description}</p>}
                </div>
            </Link>
        </div>
    );
};

// PropTypes
CategoriesCard.propTypes = {
    category: PropTypes.arrayOf(PropTypes.object).isRequired,
    cardStyle: PropTypes.string,
};

// Default Export
export default CategoriesCard;
