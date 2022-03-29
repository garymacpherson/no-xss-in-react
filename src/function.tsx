import qs from 'qs';
import React from 'react'
import Gist from 'react-gist'

export const FunctionComponent: React.FC = () => {
  var funcString = qs.parse(window.location.search, { ignoreQueryPrefix: true }).func as string ?? "return (5 * 25)"
  const func = new Function(funcString);

  var guideUrl = window.location.origin + "/?func=javascript:alert('function() based xss');"

  return (
    <div className='Vulnerability'>
      <h3>Calling new Function()</h3>
      function result: 5 * 25 = {func()}
      <p>Try browsing to <a href={guideUrl}>{guideUrl}</a>.</p>
      <Gist id='4c80c399f551722dba40e0b9aa55cdf4' />
    </div>
  )
}