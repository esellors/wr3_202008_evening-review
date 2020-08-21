import React, { Component } from "react";
import "./styles.css";
import { connect } from "react-redux";

class App extends Component {
  state = {
    localBool: false
  };

  componentDidMount() {
    console.log("you are mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.localBool !== this.state.localBool) {
      console.log("local bool updated!");
    }
  }

  componentWillUnmount() {
    // alert('You are now unmounting the component')
  }

  handleClick = () => {
    this.setState({ localBool: !this.state.localBool });
  };

  render() {
    // console.log(!this.props.myBool);
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        {this.state.localBool.toString()}
        {/* <h1>{this.props.myBool.toString()}</h1> */}
        <button onClick={this.handleClick}>click me</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    myStr: reduxState.myStr,
    myBool: reduxState.myBool
  };
};

export default connect(mapStateToProps)(App);
