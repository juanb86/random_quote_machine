import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const DATA = [
  {
    quote: "asdasdasd1",
    author: "pepe1",
  },
  {
    quote: "asdasdasd2",
    author: "pepe2",
  },
  {
    quote: "asdasdasd3",
    author: "pepe3",
  },
];

function randomNum(current) {
  let random = Math.floor(Math.random() * 3);
  while (random === current) {
    random = Math.floor(Math.random() * 3);
  }
  return random;
}

class Quote extends React.Component {
  render() {
    const number = this.props.number;
    return (
      <div>
        <div>{DATA[number].quote}</div>
        <div>Author: {DATA[number].author}</div>
      </div>
    );
  }
}

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: -1,
    };
  }

  componentWillMount() {
    this.setQuote(-1)
  }

  setQuote(number) {
    const newquote = randomNum(number);
    this.setState({currentQuote:newquote});
  }

  render() {
    const currentQuote = this.state.currentQuote;
    return (
      <wrapper id="quote-box">
        <div id="text">
          <Quote number={currentQuote} />
        </div>
        <div id="author"> </div>
        <button id="new-quote" onClick={()=>this.setQuote(currentQuote)}>New quote</button>
        <a href="" id="tweet-quote">
          Tweet Quote
        </a>
      </wrapper>
    );
  }
}

// ========================================

ReactDOM.render(<QuoteMachine />, document.getElementById("root"));
