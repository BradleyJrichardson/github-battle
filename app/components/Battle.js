import React from "react";
import {
  FaUserFriends,
  FaFighterJet,
  FaTrophy,
  FaTimesCircle
} from "react-icons/fa";
import PropTypes from "prop-types";
import Results from "./Results";
import Tooltip from "./Tooltip";
import { ThemeConsumer } from "../contexts/theme";

function Instructions() {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className="instructions-container">
          <h1 className="center-text header-lg">Instructions</h1>
          <ol className="container-sm grid center-text battle-instructions">
            <li>
              <h3 className="header-sm">Enter two Github users</h3>
              <FaUserFriends
                className={`bg-${theme}`}
                color="rgb(255, 191, 116)"
                size={140}
              />
            </li>
            <li>
              <h3 className="header-sm">Battle</h3>
              <FaFighterJet
                className={`bg-${theme}`}
                color="#727272"
                size={140}
              />
            </li>
            <li>
              <h3 className="header-sm">See the winners</h3>
              <FaTrophy
                className={`bg-${theme}`}
                color="rgb(255, 215, 0)"
                size={140}
              />
            </li>
          </ol>
        </div>
      )}
    </ThemeConsumer>
  );
}

// creating another component to contain the player input state and function.
// it needs to be a class component as it has a state
class PlayerInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state.username);
  }

  handleChange(event) {
    this.setState({
      username: event.target.value
    });
  }
  render() {
    return (
      <ThemeConsumer>
        {({ theme }) => (
          <form className="column player" onSubmit={this.handleSubmit}>
            <label htmlFor="username" className="player-label">
              {this.props.label}
            </label>
            <div className="row player-inputs">
              <input
                type="text"
                id="username"
                className={`input-${theme}`}
                placeholder="github username"
                autoComplete="off"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <button
                className={`btn ${theme === "dark" ? "light-btn" : "dark-btn"}`}
                type="submit"
                disabled={!this.state.username}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </ThemeConsumer>
    );
  }
}
// whenever you have a controlled component the value in the input field is just going to be whatever is on the local state so in order to update the text of the iput field we need to update the lcal state
// this is the handle change

PlayerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

function PlayerPreview({ username, onReset, label }) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className="column player">
          <h3 className="player-label">{label}</h3>
          <div className={`row bg-${theme}`}>
            <div className="player-info">
              <img
                className="avatar-small"
                src={`https://github.com/${username}.png?size=200`}
                alt={`Avatar for ${username}`}
              />
              <a href={`https://github.com/${username}`} className="link">
                {username}
              </a>
            </div>
            <button className="btn-clear flex-center" onClick={onReset}>
              <FaTimesCircle color="rgb(194, 57, 42)" size={26} />
            </button>
          </div>
        </div>
      )}
    </ThemeConsumer>
  );
}
// onClick we are executing the function onReset, which in turn
// executes handlereset which then sets the state
PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default class Battle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOne: null,
      playerTwo: null,
      battle: false
      // this will enable us to render the battle button when both of the form fields are not null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    // everytime we make a method on the class we need to bind it if it changes a state
  }
  handleSubmit(id, player) {
    this.setState({
      [id]: player
    });
  }
  handleReset(id) {
    this.setState({
      [id]: null
    });
  }
  render() {
    const { playerOne, playerTwo, battle } = this.state;

    if (battle === true) {
      return (
        <Results
          playerOne={playerOne}
          playerTwo={playerTwo}
          onReset={() =>
            this.setState({
              battle: false,
              playerOne: null,
              playerTwo: null
            })
          }
        />
      );
    }

    // what this is doing when both of the form field are not null battle will be true
    // this then passes the props to the results.js component and we will then use the names of the players to fetch data gform the github api

    return (
      <React.Fragment>
        <Instructions />

        <div className="players-container">
          <h1 className="center-text header-lig">Players</h1>
          <div className="row space-around">
            {playerOne === null ? (
              <PlayerInput
                label="Player One"
                // on submit is coming in as a prop to player input
                onSubmit={player => this.handleSubmit("playerOne", player)}
              />
            ) : (
              <PlayerPreview
                username={playerOne}
                label="player one"
                onReset={() => this.handleReset("playerOne")}
              />
            )}
            {playerTwo === null ? (
              <PlayerInput
                label="Player Two"
                onSubmit={player => this.handleSubmit("playerTwo", player)}
              />
            ) : (
              <PlayerPreview
                username={playerTwo}
                label="player two"
                onReset={() => this.handleReset("playerTwo")}
              />
            )}
          </div>

          {playerOne && playerTwo && (
            <button
              className="btn dark-btn btn-space"
              onClick={() =>
                this.setState({
                  battle: true
                })
              }
            >
              Battle
            </button>
          )}
        </div>
      </React.Fragment>
    );
  }
}
