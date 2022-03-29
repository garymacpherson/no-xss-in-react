import qs from 'qs';
import React from 'react'

export const EvalComponent: React.FC = () => {
  var evalString = qs.parse(window.location.search, { ignoreQueryPrefix: true }).eval as string ?? "5 * 25"

  var guideUrl = "http://localhost:3000/?eval=alert('eval based XSS')"

  return (
    <div className='Vulnerability'>
      <div className='Vuln-header'>
        XSS via eval()
      </div>
      Eval result: 5 * 25 = {eval(evalString)}
      <div className='Vuln-guide'>Try browsing to <a href={guideUrl}>{guideUrl}</a></div>
    </div>
  )
}