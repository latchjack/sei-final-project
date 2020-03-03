import React from 'react'
import { Link } from 'react-router-dom'

const ArticleCard = ({ title, id, owner, categories }) => (
  <div key={id} className="column easier is-two-fifths is-offset-1 ">
    <div className="box article-card">
    <Link to={`/articles/${id}`}>
      <h1 className="article-card-title title is-4">{title}</h1>
      <h6 className="article-card-owner subtitle is-7">Article created by {owner}</h6>
      {/* <h6>{categories}</h6> */}
    </Link>
    
      <hr className="hori" />
    <div className="is-offset-3">
      <Link to={`/articles/${id}/edit/`}><button className="article-card-button">Edit Article</button></Link>
    </div>
  </div>
  </div>

)

export default ArticleCard
