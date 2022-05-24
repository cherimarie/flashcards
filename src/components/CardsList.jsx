import React, { Component } from 'react';
import {getFirstDeck} from '../modules/firebaseConnector'
class CardsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.deck.cards.map(item => (
          <li key={item.baseText}>{item.emoji} {this.props.baseLangDisplayed ? item.baseText : item.targetText}</li>
        ))}
      </ul>
    );
  }
}

export default CardsList;