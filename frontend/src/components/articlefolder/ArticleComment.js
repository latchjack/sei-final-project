import React from 'react'
import axios from 'axios'
import auth from '../../lib/auth'


class ArticleComment extends React.Component{

  state = {
    data: {
      comments: '',
      commentOwner: ''
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

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    const data = {...this.state.data, [name]: value}
    this.setState( { data })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const articleId = this.props.match.params.id
    try {
      const { data } = await axios.put(`/api/articles/${articleId}`, this.state.data, {
        headers: { Authorization: `Bearer ${auth.getToken()}` }
      })
      this.props.history.push(`/articles/${data.id}`)
    } catch (err) {
      console.log(err.response.data.errors)
    }
  }

  render() {
    return (

      <section className="section">
        <div className="columns">
          <form onSubmit={this.handleSubmit} className="column is-half">
            <h2 className="title">Comment on article</h2>
            <div className="field">
              <label className="label">Tell us your thoughts?</label>
              <div className="control">
                <input
                  className="input"
                  name="comments"
                  required
                  placeholder="Comment"
                  onChange={this.handleChange}               
                />
              </div>
            </div>
            <button type="submit" className="button is-fullwidth is-warning">Submit comment</button>
          </form>
        </div>
      </section>
    )
    
  }


}

export default ArticleComment 