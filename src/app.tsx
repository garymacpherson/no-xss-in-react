import React from 'react'
import './app.css'
import { AhrefComponent } from './a-href'
import { AttackerControlledPropsComponent } from './attacker-controlled-props'
import { FormComponent } from './form'
import { DangerouslySetInnerHTMLComponent } from './dangerously-set'
import { EvalComponent } from './eval'
import { FunctionComponent } from './function'
import { Warning } from './warning'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">
          "React prevents <strong>all</strong> XSS"
        </h1>
        <h2 className="App-subtitle">
          Some contradictory examples
        </h2>
        <div className="App-info">
          <strong><span className="Warning">WARNING:</span> this page contains multiple XSS vulnerabilities, please be careful.</strong>
          <p>
            React does prevent a lot of Cross-Site Scripting (XSS) vulnerabilities. However, this page contains a few examples of why XSS is still a concern when handling untrusted input.
          </p>
          <p>
            Pull Requests with new XSS vectors in React 17+ are always welcome on Github <a className="GithubLink" href="https://github.com/garymacpherson/no-xss-in-react">here</a>.
          </p>
          <p>
          </p>
        </div>
      </header>
      <div className="Vulnerabilities">
        <AhrefComponent />
        <AttackerControlledPropsComponent />
        <DangerouslySetInnerHTMLComponent />
        <EvalComponent />
        <FormComponent />
        <FunctionComponent />
      </div>
      <div className="App-footer">
        Brought to you by <a href='https://appsecstudio.com/'>appsecstudio.com</a>
      </div>
    </div>
  )
}

export default App
