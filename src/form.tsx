import qs from 'qs'
import React from 'react'
import Gist from 'react-gist'

export const FormComponent: React.FC = () => {
  var form = qs.parse(window.location.search, { ignoreQueryPrefix: true }).form as string ?? "safe string"

  var guideUrl = "http://noxssinreact.com/?form=javascript:alert('form action based XSS');"

  return (
    <div className='Vulnerability'>
      <div className='Vuln-header'>
        XSS via form action
      </div>
      <form name='form1' action={form} method="GET">
        <input type="submit" />
      </form>
      <div className='Vuln-guide'>Try browsing to <a href={guideUrl}>{guideUrl}</a> then click on the above form submit button</div>
      <div className='Gist'>
        <Gist id='3db147e0d005e92d66e679173a4354fb' />
      </div>
    </div>
  )
}