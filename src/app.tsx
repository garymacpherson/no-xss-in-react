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
      <Warning />
      <header className="App-header">
        <div className="App-title">
          "React is XSS safe"
        </div>
        <div className="App-sub-title">
          An example in React 17
        </div>
        <a className="GithubLink" href="https://github.com/garymacpherson/no-xss-in-react">https://github.com/garymacpherson/no-xss-in-react</a>
        <div className="Info">
          <div>
            This page stands as an example of why XSS is still a concern.
          </div>
          <div>
            PRs with new XSS vectors in React 17+ are always welcome at the repo above.
          </div>
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
      <Warning />
      <div className="BottomLink">
        Brought to you by <a href='https://appsecstudio.com/'>appsecstudio.com</a>
      </div>
    </div>
  )
}

export default App
