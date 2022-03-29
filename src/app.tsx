import React from 'react'
import { AhrefComponent } from './a-href'
import './app.css'
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
      </header>
      <Warning />
    </div>
  )
}

export default App
