import React from 'react'
import axios from 'axios'
import auth from '../../lib/auth'

class ArticleNew extends React.Component {
  
  state = {
    data: {
      title: '',
      text: ''
    }     
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    const data = {...this.state.data, [name]: value}
    this.setState( { data })
    // const data = ({ ...this.state.data })
    // this.setState({ data })
  }

  handleSubmit = async e => {
    e.preventDefault() 
    try {
      const res = await axios.post('/api/articles/', this.state.data, {
        headers: { Authorization: `Bearer ${auth.getToken()}` }
      })
      this.props.history.push(`/articles/${res.data.id}`)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    console.log(this.state.data)
    return(
      <div className="section">
      <div className="container">
      <div className="box" id="articleNewBox">
          <div className="columns">
            <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter">
              <h2 className="title">Write a new article</h2>
              <div className="field">
                <label className="label">Title</label>
                <div className="control">
                  <input 
                    className="input"
                    name="title"
                  
                    placeholder="The title of this article.."
                    onChange={this.handleChange}
                    value={this.state.data.title}
                  />
                </div>
              </div> 
              <div className="field">
                <label className="label">Article</label>
                <div className="control">
                  <input 
                    className="input"
                    name="text"
                    required
                    placeholder="Write article here"
                    onChange={this.handleChange}
                    value={this.state.data.text}
                  />
                </div>
              </div> 

              
              <button type="submit" className="button is-fullwidth is-link">Publish!!</button>
            
            </form>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default ArticleNew