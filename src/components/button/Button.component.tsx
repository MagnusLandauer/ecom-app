import React from 'react'
import './button.styles.scss'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  buttonType?: 'google' | 'inverted'
}

const BUTTON_TYPE_CLASSES = {
  'google' : 'google-sign-in',
  'inverted': 'inverted',
}

const Button = ({ children, buttonType, ...buttonProps }: Props) => {
  return (
    <button className={`button-container ${buttonType ? BUTTON_TYPE_CLASSES[buttonType] : ''}`}>
      {children}
    </button>
  )
}

export default Button