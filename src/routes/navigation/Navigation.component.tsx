import { Outlet, Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/crown.svg"
import { UserContext } from "contexts/user.context"
import "./navigation.styles.scss"
import { useContext } from "react"
import { signOutUser } from "utils/firebase/firebase.utils"

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  console.log(currentUser)

  const signOutHandler = async () => {
    await signOutUser()
    setCurrentUser(null)
  }
  return (
    <>
      <nav className="navigation">
        <Link to="/" className="logo-container">
          <Logo />
        </Link>
        <div className="nav-links-container">
          <Link to="/" className="nav-link">
            HOME
          </Link>
          {/* <Link to="/shop" className='nav-link'>SHOP</Link> */}
          {currentUser ? (
            <Link to="/auth" className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </Link>
          ) : (
            <Link to="/auth" className="nav-link">
              SIGN IN
            </Link>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navigation
