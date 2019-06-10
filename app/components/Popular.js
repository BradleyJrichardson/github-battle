import React from "react";
import PropTypes from "prop-types";
import { fetchPopularRepos } from "../utils/api";
import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle
} from "react-icons/fa";
import Card from "./Card";
import Loading from "./Loading";
import Tooltip from "./Tooltip";

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
  onUpdateLanguage: PropTypes.func.isRequired
};
//
//

function ReposGrid({ repos }) {
  return (
    <ul className="grid space-around">
      {repos.map((repo, index) => {
        const {
          name,
          owner,
          html_url,
          stargazers_count,
          forks,
          open_issues
        } = repo;
        const { login, avatar_url } = owner;

        return (
          <li key={html_url}>
            <Card
              header={`#${index + 1}`}
              avatar={avatar_url}
              href={html_url}
              name={login}
            >
              <ul className="card-list">
                <li>
                  <Tooltip text="Github username">
                    <FaUser color="rgb(255, 191, 116)" size={22} />
                    <a href={`https://github.com/${login}`}>{login}</a>
                  </Tooltip>
                </li>
                <li>
                  <FaStar color="rgb(255, 215, 0)" size={22} />
                  {stargazers_count.toLocaleString()}
                </li>
                <li>
                  <FaCodeBranch color="rgb(129, 195, 245)" size={22} />
                  {forks.toLocaleString()}
                </li>
                <li>
                  <FaExclamationTriangle color="rgb(241, 138, 147)" size={22} />
                  {open_issues.toLocaleString()}
                </li>
              </ul>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}
ReposGrid.propTypes = {
  repos: PropTypes.array.isRequired
};
//
//
export default class Popular extends React.Component {
  state = {
    selectedLanaguage: "All",
    repos: {},
    error: null
  };
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     selectedLanguage: "All",
  //     repos: {}, //caching the repos once we fetch them
  //     error: null
  //   };
  //   this.updateSelectedLanguage = this.updateSelectedLanguage.bind(this);
  //   this.isLoading = this.isLoading.bind(this);
  // }

  // component did mount lifecycle method
  // in this we want to call updateSelectedLanguages and pass the current selectedLanaguage with will be all as the is the state that is intially constructed with
  componentDidMount() {
    this.updateSelectedLanguage(this.state.selectedLanguage);
  }

  updateSelectedLanguage = selectedLanguage => {
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
  };

  isLoading = () => {
    const { selectedLanguage, repos, error } = this.state;
    return !repos[selectedLanguage] && error === null;
  };
  render() {
    const { selectedLanguage, repos, error } = this.state;

    return (
      <React.Fragment>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateSelectedLanguage}
        />

        {this.isLoading() && (
          <Loading text="Fetching Repositories" speed={300} />
        )}

        {error && <p className="center-text error">{error}</p>}

        {repos[selectedLanguage] && (
          <ReposGrid repos={repos[selectedLanguage]} />
        )}
      </React.Fragment>
    );
  }
}
