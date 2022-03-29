import qs from 'qs'
import React from 'react'
import Gist from 'react-gist'

export const AhrefComponent: React.FC = () => {
  var ahref = qs.parse(window.location.search, { ignoreQueryPrefix: true }).ahref as string ?? ""

  var guideUrl = "http://noxssinreact.com/?ahref=javascript:alert(%27a%20href%20based%20XSS%27);"
  return (
    <div className='Vulnerability'>
      <div className='Vuln-header'>
        XSS via a href
      </div>
      <a href={ahref}>Click me!</a>
      <div className='Vuln-guide'>Try browsing to <a href={guideUrl}>{guideUrl}</a> and then clicking on the above link</div>
      <div className='Gist'>
        <Gist id='3db147e0d005e92d66e679173a4354fb' />
      </div>
    </div>
  )
}