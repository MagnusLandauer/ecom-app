import React from 'react'
import './form-input.styles.scss'

interface Props {
  name: string
  label: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  value: string
  type: string
  required?: boolean
}

const FormInput = ({ label, ...inputProps }: Props) => {
  return (
    <div className='group'>
      <input className='form-input' {...inputProps} />
      {
        label && (
          <label 
            htmlFor={inputProps.name} 
            className={`${inputProps.value.length ? 'shrink' : ''} form-input-label`}
            >{label}</label>
        )
      }
    </div>
  )
}

export default FormInput