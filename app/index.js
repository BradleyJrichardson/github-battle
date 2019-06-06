import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Component
/// state
// each component can have its own state
/// lifecycle
/// UI
class App extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}

ReactDOM.render(
  // react element
  <App />,
  document.getElementById("app")
  // where to render the element too
);
