import PropTypes from "prop-types";

const Button = ({ onClick }) => {
  return (
    <button
      className="px-3 py-1 bg-black text-white rounded "
      onClick={onClick}
    >
      Add
    </button>
  );
};

Button.propTypes = {
  runME: PropTypes.func,
};
export default Button;
