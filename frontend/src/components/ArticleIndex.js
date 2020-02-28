import React from 'react'
import axios from 'axios'

import ArticleCard from './ArticleCard'

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
          {this.state.articles.map(article => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>

      </>
    )
  }
}

export default ArticleIndex