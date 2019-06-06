import React from "react";

const tweets = [
  {
    id: 1,
    stars: 13,
    text: 'Turns out "git reset --hard HEAD^" was a terrible idea.'
  },
  { id: 2, stars: 87, text: "Tech conferences are too expensive." },
  {
    id: 3,
    stars: 51,
    text: "Clean code is subjective. Optimize for deletion."
  },
  {
    id: 4,
    stars: 19,
    text:
      "Maybe the real benefit of open source was the friendships we made along the way?"
  }
];

class List extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul id="tweets">
          {tweets.map(tweet => (
            <li key={tweet.id}>{tweet.text}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default List;
