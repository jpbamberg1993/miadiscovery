import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const baseUrl = 'http://localhost:3000'

const handler = () => {
  Router.push(
    {pathname: '/country',
    query: { id: 1 }}
  )
}

class Discover extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: require('../pages/Json/Country.json'),
      ulStyle: {
        'list-style': 'none',
        'font-family': 'Misses',
        'height': '80%',
        'align': 'center'
      }, 
      blockStyle: {
        'text-align': 'center',
        'background-color': 'black',
        'height': '100%',
        'width': '100%'
      }
    }
  }
  

  render() {
    const countryClick = (id) => {
      this.props.navigation.navigate('country') 
    }

    return (
      <div style={this.state.blockStyle}>
        <ul style={this.state.ulStyle}>
          {this.state.countries.map((country) => (
            <li key={country.id} >
                <img src={baseUrl + country.url} alt={country.country} onClick={handler}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Discover
