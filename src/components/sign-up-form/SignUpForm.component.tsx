import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from 'utils/firebase/firebase.utils'
import FormInput from 'components/form-input/FormInput.component'
import './sign-up-form.styles.scss'
import Button from 'components/button/Button.component'

const defaultFormValues = {
  display_name: '',
  email: '',
  password: '',
  confirm_password: ''
}

const SignUpForm = () => {

  const [formValues, setFormValues] = useState(defaultFormValues)
  const { display_name, email, password, confirm_password } = formValues

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const resetFormValues = () => setFormValues(defaultFormValues)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (password !== confirm_password) {
      alert("Passwords don't match")
      return
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword({ email, password }) ?? {}
      if (!user) throw new Error('User object is undefined')
      createUserDocFromAuth(user, { displayName: display_name })
      resetFormValues()
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user. Email already in use')
      }
      console.log('User creation encountered an error', error)
    }
  }

  return (
    <div className='sign-up-container'>
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='display_name'
          label='Display name'
          onChange={handleChange}
          value={display_name}
          type='text'
          required
        />

        <FormInput
          name='email'
          label='Email'
          onChange={handleChange}
          value={email}
          type='email'
          required
        />

        <FormInput
          name='password'
          label='Password'
          onChange={handleChange}
          value={password}
          type='password'
          required
        />

        <FormInput
          name='confirm_password'
          label='Confirm password'
          onChange={handleChange}
          value={confirm_password}
          type='password'
          required
        />
        <Button type='submit'>Sign up</Button>
      </form>
    </div>
  )
}

export default SignUpForm
