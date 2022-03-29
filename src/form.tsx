import qs from 'qs'
import React from 'react'
import Gist from 'react-gist'

export const FormComponent: React.FC = () => {
  var form = qs.parse(window.location.search, { ignoreQueryPrefix: true }).form as string ?? "safe string"

  var guideUrl =  window.location.origin + "/?form=javascript:alert('form action based XSS');"

  return (
    <div className='Vulnerability'>
      <h3>Form Action</h3>
      <form name='form1' action={form} method="GET">
        <input type="submit" />
      </form>
      <p>Try browsing to <a href={guideUrl}>{guideUrl}</a> then click on the above form submit button.</p>
      <Gist id='89c9c8fcf0e6bc20cf5950e56c31e338' />
    </div>
  )
}