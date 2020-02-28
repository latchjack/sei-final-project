import React from 'react'
import axios from 'axios'

class ArticleIndex extends React.Component {
  state = {
    articles: []
  }

  async componentDidMount() {
    try {
      const res = await axios.get('api/articles/')
      console.log(res.data)
      this.setState({ articles: res.data })
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    if(!this.state.articles.length) return null
    return (
      <>

        <div>
          {this.state.articles.map(article => {
            console.log(article)
          return <div>
            <h1 key={article.id}>{article.title}</h1>
          <h3>{article.categories}</h3>
          <h4>{article.date}</h4>
            </div>
          })}
        </div>

      </>
    )
  }
}

export default ArticleIndex