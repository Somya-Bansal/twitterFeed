import React from 'react';
import avatar from '../../images/my-pic.jpg'

import './card.scss';

class Card extends React.Component {
  render() {
    return (
      <div>
        <div className="Card">
          <div className="cardAvatar">
              <img src={avatar} alt="" />
          </div>
          <div className="cardInfo">
            <div className="cardInfoProfile">
              <div className="profileUsername">Somya Bansal</div>
              <div className="profileHandle">@somya</div>
              <div className="timestamp">Wed Jul 25 01:23:32 +0000 2018</div>
            </div>
            <div className="cardInfoTweet">Some tweet</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;