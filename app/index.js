import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Popular from "./components/Popular";
import Battle from "./components/Battle";
import { ThemeProvider } from "./contexts/theme";
import Nav from "./components/Nav";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "light",
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === "light" ? "dark" : "light"
        }));
      }
    };
  }
  // in order for us to consume this method from inside of the component tree we are attaching it to the state value of themeprovider context thingy
  render() {
    return (
      <ThemeProvider value={this.state}>
        <div className={this.state.theme}>
          <div className="container">
            <Nav />
            <Popular />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
