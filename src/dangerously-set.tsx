import qs from 'qs'
import React from 'react'
import Gist from 'react-gist'

export const DangerouslySetInnerHTMLComponent: React.FC = () => {
  var dangerously = qs.parse(window.location.search, { ignoreQueryPrefix: true }).dangerously as string ?? "Safe string"

  var guideUrl = "http://noxssinreact.com/?dangerously=<img onerror='alert(\"dangerouslySetInnerHTML based XSS\");' src='invalid-image' />"

  return (
    <div className='Vulnerability'>
      <div className='Vuln-header'>
        XSS via dangerouslySetInnerHTML
      </div>
      <div dangerouslySetInnerHTML={{ "__html": dangerously }} />
      <div className='Vuln-guide'>Try browsing to <a href={guideUrl}>{guideUrl}</a></div>
      <div className='Gist'>
        <Gist id='3db147e0d005e92d66e679173a4354fb' />
      </div>
    </div>
  )
}