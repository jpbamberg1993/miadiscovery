import React from 'react'
import Link from 'next/link'

const baseUrl = 'http://localhost:3000'

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
        <p>Discover Country</p>
        <Link href="/restaurants" as="/discover/country/restaurants">
          <a>Restaurants Page</a>
        </Link>
        <style jsx>{`
          .country-page {
            background-image: url('${baseUrl}/static/PeruBackground.png');
            background-size: cover;
            height: 100vh;
          }
        `}
        </style>
      </div>
    )
  }
}

export default Country