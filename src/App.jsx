import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Siderbar from "./components/Sidebar";
import "./App.css";
import Main from "./Main";

class App extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);
    // Set the state directly. Use props if necessary.
    this.state = {
      sidebarOpen: false
    };
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
        <Navbar
          openSideBar={() => {
            this.setState({
              sidebarOpen: true
            });
          }}
        />
        <Siderbar
          open={this.state.sidebarOpen}
          closeSideBar={() => {
            this.setState({
              sidebarOpen: false
            });
          }}
        />
        <Main />
      </div>
    );
  }
}

export default App;
