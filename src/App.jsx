import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Siderbar from "./components/Sidebar"
import "./App.css";
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Siderbar />
        <Main />
      </div>
    );
  }
}

export default App;
