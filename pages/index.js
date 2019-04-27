import React from 'react'
import Link from 'next/link'

class Home extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome muda fuckas. Prais ubuntu</p>
        <Link href="/discover">
          <a>Discover the world in miami</a>
        </Link>
        <style jsx>{`
          body {
            margin: 0;
          }
        `}</style>
        <style global jsx>{`
          body {
            margin: 0;
          }
        `}</style>
      </div>
    )
  }
}

export default Home
