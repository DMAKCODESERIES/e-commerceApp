import PropTypes from "prop-types"

const HeroButton = ({ text, searchTerm }) => {
    return (
        <div>
            <button className="btn d-flex  border border-white d-flex align-items-center gap-2 text-white px-4 py-2 rounded-pill" onClick={searchTerm}>
                {text}
            </button>
        </div>
    )
}

HeroButton.propTypes = {
    text: PropTypes.string,
    searchTerm: PropTypes.func,

}
export default HeroButton
