import React from "react";
import PropTypes from "prop-types";
import { fetchPopularRepos } from "../utils/api";
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
// Validating and checking prop-types
LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired
};
//
//
export default class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: "All",
      repos: {}, //caching the repos once we fetch them
      error: null
    };
    this.updateSelectedLanguage = this.updateSelectedLanguage.bind(this);
    this.isLoading = this.isLoading.bind(this);
  }

  // component did mount lifecycle method
  // in this we want to call updateSelectedLanguages and pass the current selectedLanaguage with will be all as the is the state that is intially constructed with
  componentDidMount() {
    this.updateSelectedLanguage(this.state.selectedLanguage);
  }

  updateSelectedLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage,
      // this enables us to do a loading screen error = null
      error: null
    });

    if (!this.state.repos[selectedLanguage]) {
      fetchPopularRepos(selectedLanguage)
        .then(data => {
          this.setState(({ repos }) => ({
            repos: {
              ...repos,
              [selectedLanguage]: data
            }
          }));
        })
        .catch(() => {
          console.warn("Error fetching repos", error);
          this.setState({
            error: "there was an error fetching the repos"
          });
        });
    }
  }

  isLoading() {
    const { selectedLanguage, repos, error } = this.state;
    return !repos[selectedLanguage] && error === null;
  }
  render() {
    const { selectedLanguage, repos, error } = this.state;

    return (
      <React.Fragment>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateSelectedLanguage}
        />

        {this.isLoading() && <p>Fetching Repositories</p>}

        {error && <p>{error}</p>}

        {repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
      </React.Fragment>
    );
  }
}
