import React, { Component } from 'react';

class DeckCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseLangDisplayed: true
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ baseLangDisplayed: !this.state.baseLangDisplayed }) }>
            See { this.state.baseLangDisplayed ? this.props.deck.targetLang : this.props.deck.baseLang }
          </button>

          {this.props.deck.cards.map(item => (
            <div className="singleCard" key={item.baseText}>
              <p>{item.emoji}</p>

              <p>{ this.state.baseLangDisplayed ? item.baseText : item.targetText }</p>
            </div>
          ))}

      </div>
    );
  }
}

export default DeckCards;