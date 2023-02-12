import React from "react";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor");
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Namaste React");
    }, 1000);
    console.log("Component Did Mount");
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component Will UnMount");
  }

  render() {
    //const { count } = this.state;
    console.log("rendering");
    return (
      <>
        <p>{this.state.count}</p>
        <h1>Hello World with class Based component</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click Me!🧡
        </button>
        <h4>{this.state.count}</h4>
      </>
    );
    //Windows+dot = emoji)
  }
}

export default AboutClass;
