import React, { Component } from 'react';
import { Button as GrommetButton, Card, CardBody } from 'grommet';

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
    while(newIndex === this.state.lastCard || newIndex === this.state.currentCard){
      newIndex = Math.floor(Math.random() * this.props.deck.cards.length)
    }
    this.setState({lastCard: currentIndex, currentCard: newIndex})
  }

  render() {
    const theCard = this.props.deck.cards[this.state.currentCard]
    let langLabel = `See ${this.state.baseLangDisplayed ? this.props.deck.targetLang : this.props.deck.baseLang}`
    return (
      <div>
        <GrommetButton margin="medium" size="medium" label={langLabel} onClick={() => this.setState({ baseLangDisplayed: !this.state.baseLangDisplayed }) }/>


          <Card pad="large" background="veryLightAqua">
            <CardBody>
              <p>{theCard.emoji}</p>

              <p>{ this.state.baseLangDisplayed ? theCard.baseText : theCard.targetText }</p>
            </CardBody>
          </Card>

          <GrommetButton primary margin="xlarge" size="large" label="Next" onClick={this.getNewCard}/>
      </div>
    );
  }
}

export default DeckCards;