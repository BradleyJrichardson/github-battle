import React from "react";

export default function withHover(Component, propName = "hovering") {
  return class WithHover extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        hovering: false
      };

      this.mouseOver = this.mouseOver.bind(this);
      this.mouseOut = this.mouseOut.bind(this);
    }
    mouseOver() {
      this.setState({
        hovering: true
      });
    }
    mouseOut() {
      this.setState({
        hovering: false
      });
    }
    render() {
      const props = {
        [propName]: this.state.hovering,
        ...this.props
      };
      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <Component {...props} />
        </div>
      );
    }
  };
}

// the props are being passed to withHover, we then pass them ALL to the component (which is tooltip) using the object spread syntax thing {...this.props}
// so we can then reuse this withHover higher order function again if we wanted hover events on other things

// just a function that returns another component
