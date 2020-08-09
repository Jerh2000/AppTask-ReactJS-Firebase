import React, { Component } from "react";
import { Tasks } from "../../task.json";

class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Home 
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link text-white" href="#">
                Pending tasks
              </a>
              <a className="nav-item nav-link text-white" href="#">
                Completed Tasks
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
