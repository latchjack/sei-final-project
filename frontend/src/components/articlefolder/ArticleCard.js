import React from 'react'
import { Link } from 'react-router-dom'

const ArticleCard = ({ title, date, id, categories, owner, handleDelete }) => (
  <div key={id} className="">
    <Link to={`/articles/${id}`}>
      <h1 className="article_title">{title}</h1>
      <h6 className="article_owner">Article created by {owner}</h6>
      <h6 className="article_date">{date}</h6>
      <h6>{categories}</h6>
    </Link>
    <div>
      <Link to={`/articles/${id}/edit/`}><button>Edit Article</button></Link>
    </div>
  </div>
)

export default ArticleCard
