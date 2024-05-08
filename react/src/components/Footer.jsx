/* eslint-disable react/prop-types */
const Footer = (props) => {
  const env = import.meta.env.VITE_ENVIRONMENT;
  let bgcolor;
  bgcolor = env === "development" ? "bg-yellow" : "bg-green";
  return (
    <footer className="text-muted">
      <div className={bgcolor}>
        <strong>{props.environment}</strong>
      </div>
    </footer>
  );
};

export default Footer;
