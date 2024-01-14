import React from 'react'
import { signInWithGooglePopup, createUserDocFromAuth } from 'utils/firebase/firebase.utils'
import SignUpForm from 'components/sign-up-form/SignUpForm.component'
import Button from 'components/button/Button.component'

const SignIn = () => {
  const logGoogleUser = async () => {
    const res = await signInWithGooglePopup()
    createUserDocFromAuth(res.user)
  }
  return (
    <div>
      <h1>Sign in page</h1>
      <Button buttonType='google' onClick={logGoogleUser}>Sign in with Google</Button>
      <SignUpForm />
    </div>
  )
}

export default SignIn