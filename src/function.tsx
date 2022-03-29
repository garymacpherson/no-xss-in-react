import qs from 'qs';
import React from 'react'
import Gist from 'react-gist'

export const FunctionComponent: React.FC = () => {
  var funcString = qs.parse(window.location.search, { ignoreQueryPrefix: true }).func as string ?? "return (5 * 25)"
  const func = new Function(funcString);

  var guideUrl = "http://noxssinreact.com/?func=javascript:alert('function() based xss');"

  return (
    <div className='Vulnerability'>
      <div className='Vuln-header'>
        XSS via Function()
      </div>
      function result: 5 * 25 = {func()}
      <div className='Vuln-guide'>Try browsing to <a href={guideUrl}>{guideUrl}</a></div>
      <div className='Gist'>
        <Gist id='3db147e0d005e92d66e679173a4354fb' />
      </div>
    </div>
  )
}