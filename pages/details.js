import React from 'react'

const baseUrl = 'http://localhost:3000'

class Details extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: ['/static/peru-restaurant-1.jpg', '/static/peru-restaurant-2.jpg', '/static/peru-restaurant-3.jpg'],
      imageIndex: 0,
      title: 'Merkado 31',
      foodType: 'Seafood',
      cost: ['$', '$'],
      orientation: [
        { icon: '/static/signpost.svg', title: 'Directions' },
        { icon: '/static/phone.svg', title: 'Call' },
        { icon: '/static/location-target.svg', title: 'Website' },
        { icon: '/static/save.svg', title: 'Save' },
        { icon: '/static/reviews.svg', title: 'Reviews' },
      ],
    }
  }

  render() {
    return (
      <div className="restaurant-detail">
        <div className="restaurant-image" />
        <h1 className="restaurant-name">{this.state.title}</h1>
        <div className="restaurant-info">
          <h3 className="restaurant-type">{this.state.foodType} |</h3>
          <h3 className="cost">
            {this.state.cost.map((dollar, index) => (
              <span key={index}>{dollar}</span>
            ))}{' '}
            |
          </h3>
          <div className="rating">
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
          </div>
        </div>
        <div className="orientation">
          {this.state.orientation.map(contact => (
            <div key={contact.title} className="contact-item">
              <img src={contact.icon} alt={contact.title} />
              <hr />
              <p>{contact.title}</p>
            </div>
          ))}
        </div>
        <div className="slot address">
          <img src={baseUrl + '/static/location.svg'} alt="address" />
          <h4>231 Convention Center Ave., Miami Beach, 33140</h4>
        </div>
        <hr />
        <div className="slot open">
          <img src={baseUrl + '/static/clock.svg'} alt="Open or Closed" />
          <h4>Open</h4>
        </div>
        <hr />
        <div className="slot menu">
          <img src={baseUrl + '/static/menu.svg'} alt="Menu" />
          <h4>Menu</h4>
        </div>
        <hr />
        <div className="slot reviews">
          <img src={baseUrl + '/static/reviews.svg'} alt="Reviews" />
          <h4>All Reviews</h4>
        </div>
        <style jsx>
          {`
            @font-face {
              font-family: 'CaviarDreams';
              src: url('${baseUrl}/static/CaviarDreams.ttf');
            }
            .restaurant-image {
              background: url("${baseUrl}${this.state.images[this.state.imageIndex]}");
              background-size: cover;
              height: 40vh;
            }
            .restaurant-detail {
              font-family: 'CaviarDreams';
              color: #918E8E;
            }
            h1,
            h3 {
              margin: 0;
            }
            .restaurant-info {
              display: flex;
              flex-direction: row;
            }
            .orientation {
              display: grid;
              grid-template-columns: repeat(5, 1fr);
              grid-gap: 10px;
              justify-items: center;
              background-color: rgba(233, 132, 181, .5);
              border: #00B5EE;
              padding: 10px 5px 0 10px;
              margin-top: 10px;
            }
            hr {
              width: 100%;
              color: #E37BAF;
            }
            .contact-item {
              display: grid;
              justify-items: center;
            }
            p {
              color: #000;
              margin-top: -3px;
            }
            .slot {
              display: grid;
              grid-template-columns: auto 1fr;
              align-items: center;
              grid-gap: 20px;
            }
            h4 {
              margin: 10px 0;
            }
          `}
        </style>
      </div>
    )
  }
}

export default Details
