import React from 'react'

const payload = "return (5)"

export const FunctionComponent: React.FC = () => {
  const func = new Function(payload);

  return (
    <div>
      {func()}
    </div>
  )
}