import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

const Layout = ({ children }) => {
  useEffect(() => {
    if (window && window.Modernizr) { document.querySelector('html').classList.add('webp') }
    if (document) { document.documentElement.classList.remove('no-js') }
  })

  return (
    <>
      <Helmet>
        <html lang='en' class='no-js' />
        <title>Girls' Frontline Recipe Calculator</title>
        <meta charset='UTF-8' />
        <meta name='description' content='Get all the T-dolls a recipe can produce and their timers. Supports all servers, standard and heavy production, with recipe presets.' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <link rel='apple-touch-icon' sizes='180x180' href='apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='favicon-16x16.png' />
        <link rel='manifest' href='site.webmanifest' />
        <link rel='mask-icon' href='safari-pinned-tab.svg' color='#ffaa00' />
        <meta name='msapplication-TileColor' content='#2b5797' />
        <meta name='theme-color' content='#ffffff' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link rel='dns-prefetch' href='https://fonts.gstatic.com' />
      </Helmet>
      <noscript id='no-js-warning'>
        <strong>JavaScript must be enabled make the calculator interactive. Otherwise, only dolls and their timers are shown but not their corresponding recipe.</strong>
      </noscript>
      {children}
      <footer>
        <div id='reference'>
          <h3>Community Wiki Links</h3>
          <ul>
            <li><a href='https://en.gfwiki.com/wiki/Girls%27_Frontline_Wiki'>EN/Global Server</a></li>
            <li><a href='https://zh.moegirl.org/%E5%B0%91%E5%A5%B3%E5%89%8D%E7%BA%BF'>CN Server</a></li>
            <li><a href='https://namu.wiki/w/%EC%86%8C%EB%85%80%EC%A0%84%EC%84%A0'>KR Server</a></li>
            <li><a href='https://gf.fws.tw/'>TW Server</a></li>
            <li><a href='https://wiki.gamerclub.jp/dfwiki/index.php'>JP Server</a></li>
          </ul>
        </div>
        <div>
          {/* <hook:date> */}<p><b>Last Updated May 5, 2021</b></p>{/* <hook:date> */}
        </div>
        <div>
          <p><a href='https://github.com/ktucalvin/gflcalc'>Github Link</a></p>
        </div>
      </footer>
    </>
  )
}

export default Layout
