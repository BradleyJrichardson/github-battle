import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const name = "Brad";

function isAuthed() {
  return true;
}

// function isNew() {
//   return true;
// }

function showWarning() {
  return true;
}

class App extends React.Component {
  render() {
    const authed = isAuthed();
    const firstLogin = isNew();
    const showWarning = showWarning();

    // return (
    //   <div>
    //     <h1>💦</h1>
    //     {authed === true ? (
    //       <h1>Welcome Back!</h1>
    //     ) : (
    //       <h1>Login to see your dashboard</h1>
    //     )}
    //   </div>
    // );
    // // example of conditional rendering
    // if (firstLogin === true) {
    //   return <h1>👋 Hello</h1>;
    // } else if (authed === true) {
    //   return <h1>welcome back</h1>;
    // } else {
    //   return <h1>Please log in</h1>;
    // }

    // // we can use javascript inside of curly braces
    return (
      <React.Fragment>
        <h1>Hello, {name}</h1>
        <p>Today is {new Date().toLocaleString()}</p>
        <p>What is 2 + 2 = {2 + 2}</p>
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  // react element
  <App />,
  document.getElementById("app")
  // where to render the element too
);
