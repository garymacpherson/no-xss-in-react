import React from 'react'

const payload = "javascript:alert('form');"

export const FormComponent: React.FC = () => {
  return (
    <form name='form1' action={payload} method="POST">
      <input type="submit" />
    </form>
  )
}