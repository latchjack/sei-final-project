import React from 'react'
import axios from 'axios'

import auth from '../../lib/auth'

class Login extends React.Component {

  state = {
    data: {
      email: '',
      password: ''
    },
    errors: ''
    
  }

  handleChange = ({ target: { username, value } } ) => {
    const data = ({ ...this.state.data, [username]: value })
    this.setState({ data, error: '' })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/login/', this.state.data)
      auth.setToken(res.data.token)
      
    } catch (err) {
      this.setState({ error: 'Incorrect Credentials' })
    }
    this.props.history.push('api/articles/')
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
          <form className="column is-half is-offset-one-quarter">
            <h2 className="title">Login</h2>
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left"> 
                  <input 
                    className="input"
                    name="email"
                    placeholder="email"
                    required
                    onChange={this.handleChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                  </div>
                  <div className="field">
                <label className="label">Password</label>
                <div className="control has-icons-left"> 
                  <input 
                    className="input"
                    name="password"
                    placeholder="password"
                    type="password"
                    required
                    onChange={this.handleChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <button type="submit" className="button is-fullwidth has-background-dark has-text-white">Login</button>
                </div>
            </div>
          </form>
          </div>
        </div>
      </section>

    )
  }

}

export default Login