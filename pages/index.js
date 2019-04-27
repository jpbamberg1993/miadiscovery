import React from 'react';
import Link from 'next/link'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import PageTransition from 'react-router-page-transition';

const baseUrl = 'http://localhost:3000'

function Home() {
  return<div class="landing">
    <Link href="/discover">
      <div class="focus-in-contract-bck">
      <a>Discover the World in <br /><span class="span">Miami</span></a>
      </div>
    </Link>

    <style jsx>{`
      a {
      display: grid;
      color: white;
      text-decoration: none;
      font-size: 35px;
      margin-top: 550px;
     }
     @font-face {
     font-family: 'CaviarDreams';
     src: url('${baseUrl}/static/CaviarDreams.ttf');
    }

  `}
    </style>
    <style global jsx>{`
       body {
         margin: 0;
         background-color: #231F20;
         background-repeat: no-repeat;
         background-size: 100% 100%;
         background-attachment: fixed;
         background-position: center;
         background-image: url("/static/LOGO4.svg");
         text-align: center;
       }

       .span {
         color: #E984B5;
       }

       .focus-in-contract-bck {
	      -webkit-animation: focus-in-contract-bck 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) alternate ;
	      animation: focus-in-contract-bck 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) alternate ;
      }

@-webkit-keyframes focus-in-contract-bck {
      0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(300px);
     transform: translateZ(300px);
     -webkit-filter: blur(12px);
     filter: blur(12px);
     opacity: 0;
      }
      100% {
    -webkit-transform: translateZ(12px);
     transform: translateZ(12px);
     -webkit-filter: blur(0);
     filter: blur(0);
     opacity: 1;
   }
 }
@keyframes focus-in-contract-bck {
    0% {
      letter-spacing: 1em;
      -webkit-transform: translateZ(300px);
      transform: translateZ(300px);
      -webkit-filter: blur(12px);
     filter: blur(12px);
     opacity: 0;
   }
   100% {
     -webkit-transform: translateZ(12px);
     transform: translateZ(12px);
     -webkit-filter: blur(0);
     filter: blur(0);
     opacity: 1;
   }
 }

    `}
      </style>
  </div>
}

export default Home
