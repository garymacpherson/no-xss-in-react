import React from 'react'
import qs from 'qs'
import Gist from 'react-gist'

export const AttackerControlledPropsComponent: React.FC = () => {
  var props = qs.parse(window.location.search, { ignoreQueryPrefix: true }).props as string ?? "{}"
  var propsObject = JSON.parse(props)

  var guideUrl = window.location.origin + "/?props={\"dangerouslySetInnerHTML\":{\"__html\":\"<img onerror='alert(\\\"props based XSS\\\");' src='invalid-image' />\"}}"

  return (
    <div className='Vulnerability'>
      <h3>Controllable Component Props</h3>
      <div {...propsObject} />
      <p>Try browsing to <a href={guideUrl}>{guideUrl}</a></p>
      <Gist id='1045ef473837aab8a87c3673f54cb656' />
    </div>
  )
}