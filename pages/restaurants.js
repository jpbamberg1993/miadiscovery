import Link from 'next/link'
import React, { Component } from 'react';

class Restaurant extends Component {
  render() {
    return (
      <div className="Restaurants">
        <h1> Peruvian cuisine</h1>
        <div className="List">
          <ul>
            <Link href="/description">
              <a><li>CVI.CHE 105</li></a>
            </Link>
            <Link href="/description">
              <a><li>Locura Marina</li></a>
            </Link>
            <Link href="/description">
              <a><li>Ola</li></a>
            </Link>
            <Link href="/description">
              <a><li>O'lima Signature Cuisine</li></a>
            </Link>
            <Link href="/description">
              <a><li>Pollos Y Jarras</li></a>
            </Link>
            <Link href="/description">
              <a><li>Suviche Sobe</li></a>
            </Link>
            <Link href="/description">
              <a><li>1111 Peruvian Bistro</li></a>
            </Link>
            <Link href="/description">
              <a><li>Merkado 31</li></a>
            </Link>
            <Link href="/description">
              <a><li>La Mar</li></a>
            </Link>
            <Link href="/description">
              <a><li>Farolito Peruvian Cuisine</li></a>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default Restaurant;

