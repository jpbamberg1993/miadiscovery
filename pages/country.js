import Link from 'next/link'

const Country = () => (
  <div>
    <p>Discover Country</p>
    <Link href="/restaurants" as="/discover/country/restaurants">
      <a>Restaurants Page</a>
    </Link>
  </div>
)

export default Country