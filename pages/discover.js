import Link from 'next/link'

const Discover = () => (
  <div>
    <p>Discover Page</p>
    <Link href="/country" as="/discover/country">
      <a>Country Page</a>
    </Link>
  </div>
)

export default Discover
