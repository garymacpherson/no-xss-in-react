import React from 'react'

const payload = "javascript:alert('a href!');"

export const AhrefComponent: React.FC = () => {
  return (
    <a href={payload}>My Website</a>
  )
}