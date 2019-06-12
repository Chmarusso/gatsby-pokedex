/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    query {
      pokedex {
        pokemons(first: 5) {
          name, id, image, types, evolutions {
            name
          }
        }
      }
    }
  `).then(result => {
    result.data.pokedex.pokemons.forEach(pokemon => {
      createPage({
        path: `/pokemon/${pokemon.name}`,
        component: path.resolve(`./src/templates/pokemon.js`),
        context: {
          name: pokemon.name,
        },
      })
    })
  })
}
