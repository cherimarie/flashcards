import React, { Component } from 'react';
import WordsList from './WordsList'
import { getFirstDeck, getCardsFor } from '../modules/firebaseConnector'

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: {
        name: 'Test Deck',
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

  async componentDidMount(){
    const theDeck = await getFirstDeck()
    const theDecksCards = await getCardsFor(theDeck)
    theDeck.cards = theDecksCards
    this.setState({deck: theDeck})
  }

  render() {
    return (
      <div>
        <h1>{this.state.deck.name}</h1>
        <button onClick={() => this.setState({ baseLangDisplayed: !this.state.baseLangDisplayed }) }>
          Show { this.state.baseLangDisplayed ? this.state.deck.targetLang : this.state.deck.baseLang }
        </button>
        <WordsList deck={this.state.deck}/>
      </div>
    );
  }
}

export default Deck;