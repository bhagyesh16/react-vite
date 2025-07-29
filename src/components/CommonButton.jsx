import React from 'react'

const CommonButton = ({label,onClick}) => {
  return (
    <button onClick={onClick }>{label}</button>
  )
}

export default CommonButton