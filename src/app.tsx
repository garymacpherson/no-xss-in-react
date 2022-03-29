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
        <p>
          "React is XSS safe"
        </p>
        <p className="App-sub-header">
          An example in React 17
        </p>
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
    </div>
  )
}

export default App
