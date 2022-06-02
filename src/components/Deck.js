import React, { Component } from 'react'
import WordsList from './WordsList'
import ErrorMessage from './ErrorMessage'
import { getFirstDeck, getCardsFor } from '../modules/firebaseConnector'

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: {name: '', cards: []},
      baseLangDisplayed: true
    }
  }

  async componentDidMount(){
    try{
      const theDeck = await getFirstDeck()
      const theDecksCards = await getCardsFor(theDeck)
      theDeck.cards = theDecksCards
      this.setState({deck: theDeck})
    } catch (error) {
      console.log("ERROR getting deck and cards: ", error.message)

      this.setState({error: true})
    }
  }

  render() {
    if (this.state.error){
      return <ErrorMessage />
    }

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