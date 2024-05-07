/* eslint-disable react/prop-types */
const Footer = (props) => {
  return (
    <footer className="text-muted">
      <div>
        <strong>{props.environment}</strong>
      </div>
    </footer>
  );
};

export default Footer;
