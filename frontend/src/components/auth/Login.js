import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
// import { headers } from '../../lib/headers'

class Login extends React.Component {

  state = {
    data: {
      email: '',
      password: ''
    },
    errors: ''
    
  }

  handleChange = ({ target: { name, value } } ) => {
    const data = ({ ...this.state.data, [name]: value })
    this.setState({ data, error: '' })
  }

  handleSubmit = async e => {
    e.preventDefault()
    console.log(this.state.data)
    try {
      const res = await axios.post('/api/login/', this.state.data)
      Auth.setToken(res.data.token)

      this.props.history.push('/articles')
      
    } catch (err) {
      console.log(err.response.data)
      this.setState({ error: 'Incorrect Credentials' })
    }
    
  }

  render() {
    // console.log(this.state.data)
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
          <form className="column is-half is-offset-one-quarter" onSubmit={this.handleSubmit}>
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