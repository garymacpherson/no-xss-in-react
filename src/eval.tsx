import React from 'react'

const payload = "5 * 6"

export const EvalComponent: React.FC = () => {
  const doTheMath = () => {
    return eval(payload);
  }

  return (
    <div>
      {doTheMath()}
    </div>
  )
}