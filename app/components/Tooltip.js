import React from "react";
import PropTypes from "prop-types";

//importing the higher order function
import withHover from "./withHover";

const styles = {
  container: {
    position: "relative",
    display: "flex"
  },
  tooltip: {
    boxSizing: "border-box",
    position: "absolute",
    width: "160px",
    bottom: "100%",
    left: "50%",
    marginLeft: "-80px",
    borderRadius: "3px",
    backgroundColor: "hsla(0, 0%, 20%, 0.9)",
    padding: "7px",
    marginBottom: "5px",
    color: "#fff",
    textAlign: "center",
    fontSize: "14px"
  }
};

function Tooltip({ text, children, hovering }) {
  return (
    <div style={styles.container}>
      {hovering === true && <div style={styles.tooltip}>{text}</div>}
      {children}
    </div>
  );
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  hovering: PropTypes.bool.isRequired
};

// using and exporting the higher order function
export default withHover(Tooltip);
// so we are actually exporting the invokation fo withHover

// a higher order component is just a component that takes in a component as it's argument
// it returns a new component
// and the component it returns can render the original compone thats [assed in]
