import React from 'react'
import { Link } from 'react-router-dom'

const ArticleCard = ({ title, date, id, text, categories, owner }) => (
  <div key={id}>
    <Link to={`/articles/${id}`}></Link>
    <h1>{title}</h1>
    <h4>Article created by {owner}</h4>
    <p>{text}</p>
    <h6>{date}</h6>
  </div>
)

export default ArticleCard