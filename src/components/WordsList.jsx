import React, { Component } from 'react';

class WordsList extends Component {
  render() {
    return (
      <div className="wordsList">
        {this.props.deck.cards.map(item => (
          <p key={item.baseText}>
            <span>{item.baseText}</span>
            <span>{item.emoji}</span>
            <span>{item.targetText}</span>
          </p>
        ))}
      </div>
    );
  }
}

export default WordsList;