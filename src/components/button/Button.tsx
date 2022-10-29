import React from 'react'
import { Link } from 'react-router-dom'
import {
  Buttons,
} from './Button.styles'

const Button = () => {
  return (
    <>
    <Link to='/signup'> 
       <Buttons>Request Invite</Buttons>
    </Link>
    </>
  )
}

export default Button