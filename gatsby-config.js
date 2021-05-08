'use strict'

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    { resolve: 'gatsby-source-filesystem', options: { path: './src/res/' } }
  ]
}
