import React from 'react'

const payload = "<img onerror='alert(\"DangerouslySetInnerHTMLComponent!\");' src='invalid-image' />"

export const DangerouslySetInnerHTMLComponent: React.FC = () => {
  return (
    <div dangerouslySetInnerHTML={{ "__html": payload }} />
  )
}