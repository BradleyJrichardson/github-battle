# passing props example 1

```javascript
class Badge extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.img} />
        <h1>Name:{this.props.name} </h1>
        <h3>username:{this.props.username} </h3>
      </div>
    );
  }
}

ReactDOM.render(
  <Badge
    name="Tyler McGinnis"
    username="tylermcginnis"
    img="https://avatars0.githubusercontent.com/u/2933430?v=3&s=460"
  />,
  document.getElementById("app")
);
```

# passing props example 2

```javascript
var USER_DATA = {
  name: "Tyler McGinnis",
  img: "https://avatars0.githubusercontent.com/u/2933430?v=3&s=460",
  username: "tylermcginnis"
};

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.user.img} />
        <h1>Name: {this.props.user.name} </h1>
        <h3>username: {this.props.user.username} </h3>
      </div>
    );
  }
}

ReactDOM.render(<Badge user={USER_DATA} />, document.getElementById("app"));
```

# passing props example 3

```javascript
class Avatar extends React.Component {
  render() {
    return <img src={this.props.img} />;
  }
}

class Label extends React.Component {
  render() {
    return <h1>Name: {this.props.name} </h1>;
  }
}

class ScreenName extends React.Component {
  render() {
    return <h3>Username: {this.props.username} </h3>;
  }
}

class Badge extends React.Component {
  render() {
    return (
      <div>
        <Avatar img={this.props.user.img} />
        <Label name={this.props.user.name} />
        <ScreenName username={this.props.user.username} />
      </div>
    );
  }
}

ReactDOM.render(
  <Badge
    user={{
      name: "Tyler McGinnis",
      img: "https://avatars0.githubusercontent.com/u/2933430?v=3&s=460",
      username: "tylermcginnis"
    }}
  />,
  document.getElementById("app")
);
```
