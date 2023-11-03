import './ErrorComponent.css';
import PropTypes from 'prop-types';

function ErrorComponent({ error, message }) {
  console.log('ERROR', error);
  console.log('Message', message);
  return (
    <div className="error-cont">
      <h2 className="error-h2">ERROR</h2>
      <h3 className="error-h3">{error} </h3>
      <h3 className="error-h3">{message}</h3>
    </div>
  );
}

export default ErrorComponent;

ErrorComponent.propTypes = {
  error: PropTypes.string,
  message: PropTypes.string,
};
