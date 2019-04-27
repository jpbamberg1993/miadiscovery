import Link from 'next/link'


const Discover = () => (
  <div>
    <Link href="/country" as="/discover/country">
      <a>Country Page</a>
    </Link>



    <style jsx>{`
      a {
       color: white;
       text-decoration: none;

     }
  `}
    </style>
    <style global jsx>{`
       body {
         margin: 0;
         background-color: black;
    `}
    </style>
  </div>
)

export default Discover
