import React from 'react'
import qs from 'qs'
import Gist from 'react-gist'

export const AttackerControlledPropsComponent: React.FC = () => {
  var props = qs.parse(window.location.search, { ignoreQueryPrefix: true }).props as string ?? "{}"
  var propsObject = JSON.parse(props)

  var guideUrl = "http://noxssinreact.com/?props={\"dangerouslySetInnerHTML\":{\"__html\":\"<img onerror='alert(\\\"props based XSS\\\");' src='invalid-image' />\"}}"

  return (
    <div className='Vulnerability'>
      <div className='Vuln-header'>
        XSS via attacker controlled component props
      </div>
      <div {...propsObject} />
      <div className='Vuln-guide'>Try browsing to <a href={guideUrl}>{guideUrl}</a></div>
      <div className='Gist'>
        <Gist id='3db147e0d005e92d66e679173a4354fb' />
      </div>
    </div>
  )
}