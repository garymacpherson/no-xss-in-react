import qs from 'qs';
import React from 'react'
import Gist from 'react-gist'

export const EvalComponent: React.FC = () => {
  var evalString = qs.parse(window.location.search, { ignoreQueryPrefix: true }).eval as string ?? "5 * 25"

  var guideUrl = "https://noxssinreact.com/?eval=alert('eval based XSS')"

  return (
    <div className='Vulnerability'>
      <div className='Vuln-header'>
        XSS via eval()
      </div>
      Eval result: 5 * 25 = {eval(evalString)}
      <div className='Vuln-guide'>Try browsing to <a href={guideUrl}>{guideUrl}</a></div>
      <div className='Gist'>
        <Gist id='e27cbb5a12e7b0fd6cc5f66fc99b0c21' />
      </div>
    </div>
  )
}