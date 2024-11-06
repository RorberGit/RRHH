import PropTypes from "prop-types";
export default function Px({children}) {
  
  return <div>{children}</div>;
}

Px.propTypes = {
  children: PropTypes.any,
};
