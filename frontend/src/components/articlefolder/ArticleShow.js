import React from 'react'
import axios from 'axios'
// import auth from '../auth/'
import { headers } from '../../lib/headers'
import CommentIndex from './CommentCard'
// import CommentCard from './CommentCard'

class ArticleShow extends React.Component {
  state = {
    article: null,
    save: false,
    text: '',
    articleOwner: '',
    username:'',
    data:{
    text: 'this'
    }
  }

  async componentDidMount() {
    const articleId = this.props.match.params.id
    try {
      console.log(articleId)
      const res = await axios.get(`/api/articles/${articleId}`)
      this.setState({ article: res.data })
    } catch(err) {
      console.log(err)
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const articleId = this.props.match.params.id
    try {
      console.log(articleId)
      await axios.post(`/api/articles/${articleId}/comments/`, this.state.data, headers)

      this.props.history.push(`/articles/${articleId}/comments/`)
      // this.setState({ data: null, text: '' })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = e => {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  render() {
    const { article } = this.state
    if (!article) return null
    console.log(this.state.article.comments)
    return(
      <div className="section">
      <div className="container">
        <div className="box">
        <h1 className="title is-2">{article.title}</h1>
        <h6 className="subtitle is-6">This article was written by {article.owner.username}</h6>
        <p>{article.text}</p>
      </div>
      </div>
      <div className="section">
      <div className="container">
      <h2>Article Comments</h2>
      <div className="column">
              {this.state.article.comments.map(comment => (
                <div className="container">
                  <div className="box">
                  <p key={comment.id} {...comment}>{comment.text} </p>
                  </div>
                  </div> 
              ))}
            </div>
      </div>
      </div>
      <div className="section">
      <div className="container">
      <div className="field">
            <label className="label">Add a Comment</label>
            <div className="control">
              <input 
                className="input"
                name="text"
                required
                placeholder="Share your thoughts!"
                onChange={this.handleChange}
                value={this.state.data.text}
              />
            </div>
            <button onClick={this.handleSubmit}>Submit Comment</button>
          </div>
      </div>
      </div>
      </div>
    )
  }

}

export default ArticleShow