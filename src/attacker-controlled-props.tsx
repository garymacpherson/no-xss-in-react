import React from 'react'

const AttackerControlledProps = {
  dangerouslySetInnerHTML: {
    "__html": "<img onerror='alert(\"Dangerous Props!\");' src='invalid-image' />"
  }
}

export const AttackerControlledPropsComponent: React.FC = () => {
  return (
    <div {...AttackerControlledProps} />
  )
}