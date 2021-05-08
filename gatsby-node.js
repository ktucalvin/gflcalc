'use strict'
const fs = require('fs')
const path = require('path')

exports.onPreBuild = function () {
  // Update last updated date
  const layoutFile = path.join(__dirname, './src/components/Layout.js')
  let layout = fs.readFileSync(layoutFile).toString()
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const date = new Date()
  const dateString = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  
  layout = layout.replace(
    /{\/\* <hook:date> \*\/}(?:[\s\S]+?){\/\* <hook:date> \*\/}/,
    `{/* <hook:date> */}<p><b>Last Updated ${dateString}</b></p>{/* <hook:date> */}`
  )
  
  fs.writeFileSync(layoutFile, layout)
  console.log(`Set last updated date to ${dateString}`)
}
