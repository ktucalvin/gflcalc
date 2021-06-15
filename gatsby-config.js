'use strict'

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    { resolve: 'gatsby-source-filesystem', options: { path: './src/res/' } }
  ]
}
