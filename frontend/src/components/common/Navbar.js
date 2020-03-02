import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import auth from '../../lib/auth'

class Navbar extends React.Component {

  state = { 
    navbarOpen: false 
  }

  toggleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }


  handleLogout = () => {
    auth.logout()
    this.props.history.push('/')
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navbarOpen: false })
    }
  }

  render() {
    const { navbarOpen } = this.state
    return (
      <nav className="navbar has-background-dark">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">Home </Link>
            <a className={`navbar-burger ${navbarOpen ? 'is-active' : ''}`} onClick={this.toggleNavbar} >
              <span></span>
              <span></span>
              <span></span>
              </a>
          </div>
          <div className={`navbar-menu ${navbarOpen ? 'is-active' : ''}`}>
            <div className="navbar-end">
              <Link className="navbar-item" to="/">About Us</Link>
              {auth.isAuthenticated() && <Link className="navbar-item" to="/articles">Articles</Link>}
              {auth.isAuthenticated() &&<Link className="navbar-item" to="/articles/new">New Article</Link>}
              {!auth.isAuthenticated() &&<Link className="navbar-item" to="/register">Register</Link>}
              {!auth.isAuthenticated() &&<Link className="navbar-item" to="/login">Login</Link>}
              {auth.isAuthenticated() && <a onClick={this.handleLogout} className="navbar-item">Logout</a>}
              {auth.isAuthenticated() && <Link className="navbar-item" to="/profile">My Profile</Link>}
            </div>
          </div>
        </div>
      </nav>
    )
  }

}

export default withRouter(Navbar)