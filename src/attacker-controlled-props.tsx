import React from 'react'
import qs from 'qs'

export const AttackerControlledPropsComponent: React.FC = () => {
  var props = qs.parse(window.location.search, { ignoreQueryPrefix: true }).props as string ?? "{}"
  var propsObject = JSON.parse(props)

  var guideUrl = "http://localhost:3000/?props={\"dangerouslySetInnerHTML\":{\"__html\":\"<img onerror='alert(\\\"props based XSS\\\");' src='invalid-image' />\"}}"

  return (
    <div className='Vulnerability'>
      <div className='Vuln-header'>
        XSS via attacker controlled component props
      </div>
      <div {...propsObject} />
      <div className='Vuln-guide'>Try browsing to <a href={guideUrl}>{guideUrl}</a></div>
    </div>
  )
}