import qs from 'qs'
import React from 'react'
import Gist from 'react-gist'

export const AhrefComponent: React.FC = () => {
  var ahref = qs.parse(window.location.search, { ignoreQueryPrefix: true }).ahref as string ?? ""

  var guideUrl = window.location.origin + "/?ahref=javascript:alert('a href based XSS');"
  return (
    <div className='Vulnerability'>
      <h3 className='Vuln-header'>
        Anchor href
      </h3>
      <a href={ahref}>Click me!</a>
      <p>Try browsing to <a href={guideUrl}>{guideUrl}</a> and then clicking on the above link.</p>
      <Gist id='3db147e0d005e92d66e679173a4354fb' />
    </div>
  )
}