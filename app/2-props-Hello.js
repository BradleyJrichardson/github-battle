import React from "react";

class Hello extends React.Component {
  render() {
    console.log(this.props);
    return (
      // <React.Fragment>
      //   {this.props.header}
      //   {this.props.username}
      //   {this.props.authed === true ? (
      //     <button onClick={this.props.logout}>Logout</button>
      //   ) : null}
      // </React.Fragment>

      /// returning data from the object passed as a prop
      <React.Fragment>
        {this.props.data.header}
        {this.props.data.username}
        {this.props.data.authed === true ? (
          <button onClick={this.props.data.logout}>Logout</button>
        ) : null}
      </React.Fragment>
    );
  }
}

export default Hello;
