import Button from 'components/button/Button.component'
import FormInput from 'components/form-input/FormInput.component'
import { useState } from 'react'
import { createUserDocFromAuth, signInWithGooglePopup, signUserInWithEmailAndPassword } from 'utils/firebase/firebase.utils'
import './sign-in-form.styles.scss'

const defaultFormValues = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formValues, setFormValues] = useState(defaultFormValues)
  const [errorMsg, setErrorMsg] = useState('')
  const { email, password } = formValues
  
  const logGoogleUser = async () => {
    const res = await signInWithGooglePopup()
    createUserDocFromAuth(res.user)
  }

  const resetFormValues = () => setFormValues(defaultFormValues)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMsg('')
    try {
      const { user } = await signUserInWithEmailAndPassword(email, password) ?? {}
      console.log(user)
      resetFormValues()
    } catch (error: any) {
      console.log('Error signing in user', error)
      if (error.code === 'auth/invalid-credential') {
        setErrorMsg('Invalid credentials')
        return
      }
      if (error.code === 'auth/user-not-found') {
        setErrorMsg('No user associated with this email')
        return
      }

      setErrorMsg('An error occurred. Please try again later')
    }

  }

  return (
    <div className='sign-in-container'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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

        {
          errorMsg && <p className='error-msg'>{errorMsg}</p>
        }

        <div className='buttons-container'>
          <Button type='submit'>Sign in</Button>
          <Button type='button' buttonType='google' onClick={logGoogleUser}>Google Sign In</Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm