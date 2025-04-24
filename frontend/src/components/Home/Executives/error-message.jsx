import PropTypes from "prop-types";

const ErrorMessage = ({ message, retry }) => (
  <div className="text-red-500 p-5 text-center">
    <p>{message}</p>
    <button
      onClick={retry}
      className="mt-4 px-4 py-2 bg-[#194b88] text-white rounded hover:bg-green-600 transition-colors"
    >
      Retry
    </button>
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  retry: PropTypes.func.isRequired,
};

export default ErrorMessage;
