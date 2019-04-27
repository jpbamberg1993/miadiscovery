import React from 'react'
import Link from 'next/link'

const baseUrl = 'http://localhost:3000'
const logo = baseUrl + '/static/logo5.svg'
const flag = baseUrl + '/static/flag.svg'
const historyButton = baseUrl + '/static/history.svg'
const cuisineButton = baseUrl + '/static/countryFood.svg'
const activitiesButton = baseUrl + '/static/activities.svg'
const concertsButton = baseUrl + '/static/concerts.svg'
const landmarkButton = baseUrl + '/static/landmark.svg'

class Country extends React.Component {
  constructor(props) {
    super(props)
  }
  // static async getInitialProps({query}) {
  //   console.log(`id: ${query.id}`)
  //   this.setState({
  //       countryid: query.id
  //   })
  //   return {}
  // }
  render() {
    return (
      <div className="country-page">
        <div className="banner">
          <img src={logo} alt="logo" />
        </div>
        <div className="country-info">
          <img src={flag} alt="Peruvian Flag" className="flag" />
          <h1>PERU</h1>
          <h2>in Miami</h2>
          <img src={historyButton} alt="History of Country Button" className="history-button" />
        </div>
        <div className="button-group">
          <Link href="/restaurants">
            <img src={cuisineButton} alt="Cuisine button" />
          </Link>
          <img src={activitiesButton} alt="Activities" />
          <img src={concertsButton} alt="concerts button" />
          <img src={landmarkButton} alt="Landmark Button" />
        </div>
        <style jsx>
          {`
          @font-face {
            font-family: 'CaviarDreams';
            src: url('${baseUrl}/static/CaviarDreams.ttf');
          }
          .button-group {
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-items: center;
            align-items: end;
          }
          .button-group img {
            width: 150px;
          }
          .country-page {
            background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('${baseUrl}/static/PeruBackground.png');
            background-size: cover;
            height: 100vh;
            font-family: 'CaviarDreams';
          }
          .banner {
            background: #050505;
            display: grid;
            justify-items: center;
          }
          .banner img {
            width: 100px;
            margin-top: -15px;
          }
          .flag {
            width: 50px;
          }
          .country-info {
            display: grid;
            justify-items: center;
            margin-top: 20px;
          }
          h1, h2 {
            color: rgba(255, 255, 255, .9);
            margin: 0;
          }
          .history-button {
            margin-top: 50px;
          }
        `}
        </style>
      </div>
    )
  }
}

export default Country
