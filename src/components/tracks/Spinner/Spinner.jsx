import React from 'react'
import spinner from '../../../assets/images/spinner.gif'

const MyComponent = () => {
  return (
    <img
      src={spinner}
      alt="Loading..."
      style={{ width: '200px', margin: '40px auto', display: 'block' }}
    />
  )
}

export default MyComponent
