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
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    return (
      <>

        <div>
          hello
        </div>

      </>
    )
  }
}

export default ArticleIndex