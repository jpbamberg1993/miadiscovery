import Link from 'next/link'
import { Component } from 'react'

class Restaurant extends Component {
  render() {
    return (
      <div className="Restaurants">
        <h1 className="title"> Peruvian cuisine</h1>
        <div className="List">
          <ul>
            <h2>CVI.CHE 105</h2>
            <Link href="/details">
              <a>
                <li className="Res1" />
              </a>
            </Link>
            <h2>Locura Marina</h2>
            <Link href="/details">
              <a>
                <li className="Res2" />
              </a>
            </Link>
            <h2>GKB</h2>
            <Link href="/details">
              <a>
                <li className="Res3" />
              </a>
            </Link>
            <h2>O'lima Signature Cuisine</h2>
            <Link href="/details">
              <a>
                <li className="Res4" />
              </a>
            </Link>
            <h2>Pollos Y Jarras</h2>
            <Link href="/details">
              <a>
                <li className="Res5" />
              </a>
            </Link>
            <h2>Suviche Sobe</h2>
            <Link href="/details">
              <a>
                <li className="Res6" />
              </a>
            </Link>
            <h2>1111 Peruvian Bistro</h2>
            <Link href="/details">
              <a>
                <li className="Res7" />
              </a>
            </Link>
            <h2>Merkado 31</h2>
            <Link href="/details">
              <a>
                <li className="Res8" />
              </a>
            </Link>
            <h2>La Mar</h2>
            <Link href="/details">
              <a>
                <li className="Res9" />
              </a>
            </Link>
            <h2>Farolito Peruvian Cuisine</h2>
            <Link href="/details">
              <a>
                <li className="Res0" />
              </a>
            </Link>
          </ul>
        </div>
        <style jsx>{`
          .body {
            background-color: black;
          }
          .Restaurants {
            background-color: black;
            margin: -10px;
            padding: -10px;
            margin-top: -10px;
            color: #4bb8ad;
          }
          .List {
            margin: 50px;
          }
          .title {
            display: flex;
            justify-content: center;
          }
          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
          }
          li {
            margin-bottom: 0rem;
            border: solid 1px black;
            height: 20rem;
            color: #4bb8ad;
          }
          .Res1 {
            background-color: pink;
            background-image: url('/static/o.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }
          .Res2 {
            background-color: pink;
            background-image: url('/static/m.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }
          .Res3 {
            background-color: pink;
            background-image: url('/static/n.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }
          .Res4 {
            background-color: pink;
            background-image: url('/static/p.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }
          .Res5 {
            background-color: pink;
            background-image: url('/static/q.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }
          .Res6 {
            background-color: pink;
            background-image: url('/static/r.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }
          .Res7 {
            background-color: pink;
            background-image: url('/static/s.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }
          .Res8 {
            background-color: pink;
            background-image: url('/static/t.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }
          .Res9 {
            background-color: pink;
            background-image: url('/static/u.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }
          .Res0 {
            background-color: pink;
            background-image: url('/static/v.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }
        `}</style>
      </div>
    )
  }
}

export default Restaurant
