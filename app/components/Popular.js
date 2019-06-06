import React from "react";
//
//
//
//
function LanguagesNav({ selected, onUpdateLanguage }) {
  const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];
  return (
    <ul className="flex-center">
      {languages.map(language => (
        <li key={language}>
          <button
            className="btn-clear nav-link"
            style={language === selected ? { color: "#c78ef2" } : null}
            onClick={() => onUpdateLanguage(language)}
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  );
}
//
//
//
//
//
export default class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: "All"
    };
    this.updateSelectedLanguage = this.updateSelectedLanguage.bind(this);
  }

  updateSelectedLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage
    });
  }

  render() {
    const { selectedLanguage } = this.state;

    return (
      <React.Fragment>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateSelectedLanguage}
        />
      </React.Fragment>
    );
  }
}
