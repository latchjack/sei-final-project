import React from 'react'
import axios from 'axios'
// import auth from '../auth/'

class ArticleShow extends React.Component {
  state = {
    article: null,
    save: false,
    text: '',
    articleOwner: ''
  }

  async componentDidMount() {
    const articleId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/articles/${articleId}`)
      this.setState({ article: res.data })
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    const { article } = this.state
    if (!article) return null
    return(
      <section className="section">
      <div className="SHOWPAGE">
        <h1 className='is-size-1'>{article.title}</h1>
        <h6>This article was written by {article.owner} at {article.date}</h6>
        <p>{article.text}</p>
      </div>
      </section>
    )
  }

}

export default ArticleShow