import React from 'react'
import { Link } from 'react-router-dom'

const ArticleCard = ({ title, date, id, text, categories, owner }) => (
  <div key={id}>
    {/* <Link to={`/articles/${id}`}></Link> */}
    <h1>{title}</h1>
    <h6>Article created by {owner}</h6>
    <p>{text}</p>
    <h6>{date}</h6>
    <h6>{categories}</h6>
  </div>
)

export default ArticleCard