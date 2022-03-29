import qs from 'qs'
import React from 'react'
import Gist from 'react-gist'

export const DangerouslySetInnerHTMLComponent: React.FC = () => {
  var dangerously = qs.parse(window.location.search, { ignoreQueryPrefix: true }).dangerously as string ?? "Safe string"

  var guideUrl = "https://noxssinreact.com/?dangerously=<img onerror='alert(\"dangerouslySetInnerHTML based XSS\");' src='invalid-image' />"

  return (
    <div className='Vulnerability'>
      <div className='Vuln-header'>
        XSS via dangerouslySetInnerHTML
      </div>
      <div dangerouslySetInnerHTML={{ "__html": dangerously }} />
      <div className='Vuln-guide'>Try browsing to <a href={guideUrl}>{guideUrl}</a></div>
      <div className='Gist'>
        <Gist id='942f7b23bc4d77cb8710d1afe61812d5' />
      </div>
    </div>
  )
}