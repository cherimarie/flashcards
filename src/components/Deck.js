import React, { Component } from 'react'
import WordsList from './WordsList'
import DeckCards from './DeckCards'
import ErrorMessage from './ErrorMessage'
import { getFirstDeck, getCardsFor } from '../modules/firebaseConnector'

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: {name: '', cards: []},
      toggleWordList: true
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
    let body
    if (this.state.error){
      return <ErrorMessage />
    }
    if (this.state.toggleWordList){
      body = <WordsList deck={this.state.deck} />
    } else {
      body = <DeckCards deck={this.state.deck} />
    }

    return (
      <div>
        <h1>{this.state.deck.name}</h1>
        <button onClick={() => this.setState({ toggleWordList: !this.state.toggleWordList }) }>
          Show { this.state.toggleWordList ? "Cards" : "Vocabulary List" }
        </button>
        {body}
      </div>
    );
  }
}

export default Deck;