import React from 'react'
// import { Link } from 'react-router-dom'

const ArticleCard = ({ title, date, id, text, categories, owner }) => (
  <div key={id} className="">
    {/* <Link to={`/articles/${id}`}></Link> */}
    <h1 className="article_title">{title}</h1>
    <h6 className="article_owner">Article created by {owner}</h6>
    <p>{text}</p>
    <h6 className="article_date">{date}</h6>
    <h6>{categories}</h6>
  </div>
)

export default ArticleCard
