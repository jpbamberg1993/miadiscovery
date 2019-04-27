import Link from 'next/link'


const Discover = () => (
  <div>
    <Link href="/country" as="/discover/country">


    <video id="background-video" height="736" loop autoPlay>
    <source src="/static/miami_1.mp4" type="video/mp4" />
    Your browser does not support the video tag.
</video>
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
