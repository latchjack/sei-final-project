import React from 'react'
import { Link } from 'react-router-dom'

const ArticleCard = ({ title, date, id, categories, owner, handleDelete }) => (
  <div key={id} className="column easier is-two-fifths is-offset-1 ">
    <div className="box">
    <Link to={`/articles/${id}`}>
      <h1 className="article-card-title">{title}</h1>
      <h6 className="article-card-owner">Article created by {owner}</h6>
      {/* <h6 className="article_date">{date}</h6> */}
      <h6>{categories}</h6>
    </Link>
    
      <hr />
    <div className="">
      <Link to={`/articles/${id}/edit/`}><button className="article-card-button">Edit Article</button></Link>
    </div>
  </div>
  </div>

)

export default ArticleCard
