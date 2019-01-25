import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <article>
      <div className="cf pa2">
        {data.pokedex.pokemons.map(pokemon =>
          <div key={pokemon.id} className="fl w-50 w-25-m w-20-l pa2 h5">
            <a href={`/pokemon/${pokemon.name}`} className="db link dim tc">
              <img style={{maxHeight: '150px'}} src={pokemon.image} alt={pokemon.name} className="h-100 db outline black-10"/>
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Name</dt>
                <dd className="ml0 black truncate w-100">{pokemon.name}</dd>
              </dl>
            </a>
          </div>
        )}
      </div>
    </article>
  </Layout>
)

export const query = graphql`
  query {
    pokedex {
      pokemons(first: 1000) {
        name, id, image
      }
    }
  }
`

export default IndexPage
