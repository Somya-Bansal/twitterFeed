import React from 'react';

import './card.scss';

class Card extends React.Component {
  render() {
    return (
      <div className="feed">
        {this.props.loading ? 
          <>
            <h2>
              LOADING...
            </h2>
          </>
        :
          this.props.cards.map((card) => (
            <div className="Card" key={card.id}>
              <div className="cardAvatar">
                <img src={card.user.profile_image_url_https} alt="" />
              </div>
              <div className="cardInfo">
                <div className="cardInfoProfile">
                  <div className="profileUsername">{card.user.name}</div>
                  <div className="profileHandle">{card.user.screen_name}</div>
                  <div className="timestamp">{card.created_at}</div>
                </div>
                <div className="cardInfoTweet">{card.text}</div>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}
// const Card = ({ cards }) => {
//   console.log(cards);
//   return (
//     <div>
//       {cards.map((card) => (
//         <div className="Card" key={card.id}>
//           <div className="cardAvatar">
//             <img src={card.user.profile_image_url_https} alt="" />
//           </div>
//           <div className="cardInfo">
//             <div className="cardInfoProfile">
//               <div className="profileUsername">{card.user.name}</div>
//               <div className="profileHandle">{card.user.screen_name}</div>
//               <div className="timestamp">{card.created_at}</div>
//             </div>
//             <div className="cardInfoTweet">{card.text}</div>
//           </div>
//         </div>
//       ))
//       }
//     </div>
//   );
// }

export default Card;