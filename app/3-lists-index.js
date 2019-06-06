import React from "react";
import ReactDOM from "react-dom";
import List from "./List";

class App extends React.Component {
  render() {
    return <List />;
  }
}

ReactDOM.render(
  // react element
  <App />,
  document.getElementById("app")
  // where to render the element too
);
