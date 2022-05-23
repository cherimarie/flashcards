import React, { Component } from 'react';

class CardsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: {
        baseLang: 'English',
        targetLang: 'French',
        cards: [
          {baseText: 'Earth', targetText: 'La Terre', emoji: '🌎'},
          {baseText: 'I have two sisters', targetText: "j'ai deux soeur", emoji: '👯‍♀️'}
          ]
        },
      baseLangDisplayed: true
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ baseLangDisplayed: !this.state.baseLangDisplayed }) }>
          Show { this.state.baseLangDisplayed ? this.state.deck.targetLang : this.state.deck.baseLang }
        </button>
        <ul>
          {this.state.deck.cards.map(item => (
            <li key={item.baseText}>{item.emoji} {this.state.baseLangDisplayed ? item.baseText : item.targetText}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CardsList;