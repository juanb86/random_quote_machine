import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Quote extends React.Component {
  render() {
    return <div> </div>;
  }
}

class QuoteMachine extends React.Component {
  render() {
    return (
      <wrapper id="quote-box">
        <div id="text">
          <Quote />
        </div>
        <div id="author"> </div>
        <button id="new-quote"> </button>
      </wrapper>
    );
  }
}

// ========================================

ReactDOM.render(<QuoteMachine />, document.getElementById("root"));
