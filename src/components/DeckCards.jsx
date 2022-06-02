import React, { Component } from 'react';

class DeckCards extends Component {
  constructor(props) {
    super(props);
    this.getNewCard = this.getNewCard.bind(this)

    this.state = {
      baseLangDisplayed: true,
      lastCard: 9,
      currentCard: 0
    }
  }

  getNewCard(){
    let currentIndex = this.state.currentCard
    let newIndex = this.state.lastCard
    while(newIndex == this.state.lastCard || newIndex == this.state.currentCard){
      newIndex = Math.floor(Math.random() * this.props.deck.cards.length)
    }
    this.setState({lastCard: currentIndex, currentCard: newIndex})
  }

  render() {
    const theCard = this.props.deck.cards[this.state.currentCard]
    return (
      <div>
        <button onClick={() => this.setState({ baseLangDisplayed: !this.state.baseLangDisplayed }) }>
            See { this.state.baseLangDisplayed ? this.props.deck.targetLang : this.props.deck.baseLang }
          </button>


          <div className="singleCard" key={theCard.baseText}>
            <p>{theCard.emoji}</p>

            <p>{ this.state.baseLangDisplayed ? theCard.baseText : theCard.targetText }</p>
          </div>

          <button onClick={this.getNewCard}>Next</button>
      </div>
    );
  }
}

export default DeckCards;