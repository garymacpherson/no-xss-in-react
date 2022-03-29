import qs from 'qs';
import React from 'react'
import Gist from 'react-gist'

export const EvalComponent: React.FC = () => {
  var evalString = qs.parse(window.location.search, { ignoreQueryPrefix: true }).eval as string ?? "5 * 25"

  var guideUrl = "http://noxssinreact.com/?eval=alert('eval based XSS')"

  return (
    <div className='Vulnerability'>
      <div className='Vuln-header'>
        XSS via eval()
      </div>
      Eval result: 5 * 25 = {eval(evalString)}
      <div className='Vuln-guide'>Try browsing to <a href={guideUrl}>{guideUrl}</a></div>
      <div className='Gist'>
        <Gist id='3db147e0d005e92d66e679173a4354fb' />
      </div>
    </div>
  )
}