import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import { headers } from '../../lib/headers'

class ArticleEdit extends React.Component{
  state = {
    data:{
      title: '',
      text: '',
      categories: ''
    }
  }

  async componentDidMount() {
    const articleId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/articles/${articleId}`)
      this.setState({ data: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  handleSubmit = async () => {
    //e.preventDefault()
    const articleId = this.props.match.params.id
    try {
      await axios.put(`/api/articles/${articleId}/`, this.state.data,
        {
          headers: { Authorization: `Bearer ${Auth.getToken()}` }
        })
      // this.setState({ data: null, text: '' })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = e => {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }
// _______________________________________________________________________________________________________

  handleDelete = async () => {
    const articleId = this.props.match.params.id
    try {
      await axios.delete(`/api/articles/${articleId}`, this.state.data, headers)
      
      this.props.history.push('/articles')
    
    } catch (err) {
      console.log(err)
    }
  }

  render(){
    return (
      <div className="columns">
      <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter">
        <h2 className="title">Edit an Article</h2>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input 
              className="input"
              name="title"
              required
              placeholder="Title"
              onChange={this.handleChange}
              value={this.state.data.title}
            />
          </div>
        </div> 
        <div className="field">
            <label className="label">Text</label>
            <div className="control">
              <input 
                className="input"
                name="text"
                required
                placeholder="Text"
                onChange={this.handleChange}
                value={this.state.data.text}
              />
            </div>
          </div> 

          <button onClick={this.handleSubmit}>Submit</button>
          <button onClick={this.handleDelete}>Delete Article</button>

        </form>
        </div>
    )
  }

}

export default ArticleEdit

