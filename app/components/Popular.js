import React from "react";

export default class Popular extends React.Component {
  render() {
    const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];
    return (
      <ul className="flex-center">
        {languages.map(element => (
          <li key={element}>
            <button className="btn-clear nav-link">{element}</button>
          </li>
        ))}
      </ul>
    );
  }
}
