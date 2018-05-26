import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import GetAuthDetails from "./GetAuthDetails";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: ""
    };
  }

  search = () => {
    let query = document.getElementById("input").value;
    this.props.update("SEARCH_STRING", { query: query });
    this.props.history.push("/search");
  };

  render() {
    return (
      <div>
        <GetAuthDetails />
        <div className="Container">
          <div className="topWrapper">
            {!this.props.uid ? (
              <Link to="/login">
                <button id="button">Login</button>
              </Link>
            ) : (
              <Link to="/user">
                <button id="button">Profile</button>
              </Link>
            )}
            <center>
              <h1 id="head">
                Books<span id="watch">Watch</span>
              </h1>
            </center>
            <form onSubmit={this.search}>
              <input id="input" type="text" placeholder="Search for Books" />
            </form>
            <div id="tagLine">
              An Official KTU book exchange platform For MECians!
            </div>
            <div id="bottom">
              <Link
                to="/credits"
                style={{ textDecoration: "none", color: "white" }}
              >
                Developed by Students of Govt. Model Engineering College
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  store => {
    return store;
  },
  dispatch => {
    return {
      update: (dispatchType, dispatchPayload) => {
        dispatch({ type: dispatchType, payload: dispatchPayload });
      }
    };
  }
)(Home);
