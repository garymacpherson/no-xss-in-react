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
        <Gist id='1045ef473837aab8a87c3673f54cb656' />
      </div>
    </div>
  )
}