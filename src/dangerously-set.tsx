import qs from 'qs'
import React from 'react'
import Gist from 'react-gist'

export const DangerouslySetInnerHTMLComponent: React.FC = () => {
  var dangerously = qs.parse(window.location.search, { ignoreQueryPrefix: true }).dangerously as string ?? "Safe string"

  var guideUrl = window.location.origin + "/?dangerously=<img onerror='alert(\"dangerouslySetInnerHTML based XSS\");' src='invalid-image' />"

  return (
    <div className='Vulnerability'>
      <h3>dangerouslySetInnerHTML</h3>
      <div dangerouslySetInnerHTML={{ "__html": dangerously }} />
      <p>Try browsing to <a href={guideUrl}>{guideUrl}</a></p>
      <Gist id='942f7b23bc4d77cb8710d1afe61812d5' />
    </div>
  )
}