import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";

let USER_DATA = {
  username: "BradleyJrichardson",
  authed: true,
  logout: () => alert("Logged-Out!"),
  header: <h1>👋</h1>
};

class App extends React.Component {
  render() {
    // return <Hello first="Brad" last="Richardson" />;
    // return (
    //   <Hello
    //     username="BradleyJrichardon"
    //     authed={true}
    //     logout={() => alert("Logged-Out!")}
    //     header={<h1>👋</h1>}
    //   />
    // );

    /// we can also pass props as objects
    return <Hello data={USER_DATA} />;
  }
}

ReactDOM.render(
  // react element
  <App />,
  document.getElementById("app")
  // where to render the element too
);
