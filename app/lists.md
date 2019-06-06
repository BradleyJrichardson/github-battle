# List Example 1

```javascript
class List extends React.Component {
  render() {
    // Render a list using the "friends" being passed in.

    return (
      <ul>
        {this.props.friends.map(friend => (
          <li key={friend.id}>{friend.name}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(
  <List
    friends={[
      { id: 893, name: "Mikenzi" },
      { id: 871, name: "Cash" },
      { id: 982, name: "Steven" },
      { id: 061, name: "Kimmy" },
      { id: 117, name: "Doug" }
    ]}
  />,
  document.getElementById("app")
);
```

# List Example 2

```javascript
class List extends React.Component {
  render() {
    // Render a list using the "friends" being passed in.

    return (
      <ul>
        {this.props.friends.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(
  <List friends={["Mikenzi", "Cash", "Steven", "Kimmy", "Doug"]} />,
  document.getElementById("app")
);
```
