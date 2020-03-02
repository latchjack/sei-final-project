import React from 'react'
import { Link} from 'react-router-dom'

class Navbar extends React.Component {

  state = { navbarOpen: false }

  // toggleNavbar = () => {
  //   this.setState({ navbarOpen: !this.state.navbarOpen })
  // }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navbarOpen: false })
    }
  }

  render() {
    // const { navbarOpen } = this.state
    return (
      <nav className="navbar has-background-dark">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">Home </Link>
              <span></span>
              <span></span>
              <span></span>
          </div>
            <div className="navbar-end">
              <Link className="navbar-item" to="/">About Us</Link>
              <Link className="navbar-item" to="/articles">Articles</Link>
              <Link className="navbar-item" to="/register">Register</Link>
              <Link className="navbar-item" to="/login">Login</Link>
              {/* <a onClick={this.handleLogout} className="navbar-item">Logout</a> */}
              {/* <Link className="navbar-item" to="/profile">My Profile</Link> */}
            </div>
          </div>
      </nav>
    )
  }

}

export default Navbar