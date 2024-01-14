import SignInForm from 'components/sign-in-form/SignInForm.component'
import SignUpForm from 'components/sign-up-form/SignUpForm.component'
import './auth-page.styles.scss'

const Authentication = () => {
  
  return (
    <div className='auth-page'>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication