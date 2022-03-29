import qs from 'qs';
import React from 'react'
import Gist from 'react-gist'

export const EvalComponent: React.FC = () => {
  var evalString = qs.parse(window.location.search, { ignoreQueryPrefix: true }).eval as string ?? "5 * 25"

  var guideUrl = "https://noxssinreact.com/?eval=alert('eval based XSS')"

  return (
    <div className='Vulnerability'>
      <h3>eval()</h3>
      <p>Eval result: 5 * 25 = {eval(evalString)}</p>
      <p>Try browsing to <a href={guideUrl}>{guideUrl}</a>.</p>
      <Gist id='e27cbb5a12e7b0fd6cc5f66fc99b0c21' />
    </div>
  )
}