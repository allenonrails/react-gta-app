import React, { Component } from 'react';

class CardButton extends Component {
  actionClick(){
    return null
  }

  render() {
    return (
      <button className="card__btn" onClick={() => this.actionClick}>
        {this.props.text}
      </button>
    );
  }
}

export default CardButton;
