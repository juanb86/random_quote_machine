import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const DATA = [
  {
    quote: "I need the secure packaging of Jockeys. My boys need a house!",
    author: "Kramer",
  },
  {
    quote:
      "Boxers! How do you wear these things!! They’re baggin’ up, they’re rising in! And there’s nothing holding me in place! I’m flippin’! I’m floppin’!",
    author: "Kramer",
  },
  {
    quote:
      "Looking at cleavage is like looking at the sun. You don't stare at it. It's too risky. Ya get a sense of it and then you look away.",
    author: "Jerry Seinfeld",
  },
  {
    quote:
      "Breaking up is like knocking over a Coke machine. You can’t do it in one push; you got to rock it back and forth a few times, and then it goes over.",
    author: "Jerry Seinfeld",
  },
  {
    quote:
      "I don't think I've ever been to an appointment in my life where I wanted the other guy to show up.",
    author: "George Costanza",
  },
  {
    quote: "It's not a lie if you believe it.",
    author: "George Costanza",
  },
  {
    quote: "I’m not a lesbian! I hate men, but I’m not a lesbian.",
    author: "Elaine Benes",
  },
  {
    quote: "I'm not a lesbian. I hate men, but I'm not a lesbian",
    author: "Elaine Benes",
  },
];

function randomNum(current) {
  const maxQuotes = DATA.length;
  let random = Math.floor(Math.random() * maxQuotes);
  while (random === current) {
    random = Math.floor(Math.random() * maxQuotes);
  }
  return random;
}

class Quote extends React.Component {
  render() {
    const number = this.props.number;
    return (
      <div>
        <div id="text">"{DATA[number].quote}"</div>
        <div id="author">{DATA[number].author}</div>
      </div>
    );
  }
}

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: randomNum(-1),
    };
  }

  setQuote(number) {
    const newquote = randomNum(number);
    this.setState({ currentQuote: newquote });
  }

  render() {
    const currentQuote = this.state.currentQuote;
    const quoteText =
      '"' + DATA[currentQuote].quote + '" - ' + DATA[currentQuote].author;
    const quoteText2 = quoteText.replace(/\s/g, "%20");
    const href = "https://twitter.com/intent/tweet?text=" + quoteText2;
    return (
      <wrapper id="quote-box">
        <div>
          <Quote number={currentQuote} />
        </div>
        <button id="new-quote" onClick={() => this.setQuote(currentQuote)}>
          New quote
        </button>
        <a id="tweet-quote" href={href} target="_blank">
          Tweet Quote
        </a>
      </wrapper>
    );
  }
}

// ========================================

ReactDOM.render(<QuoteMachine />, document.getElementById("root"));
