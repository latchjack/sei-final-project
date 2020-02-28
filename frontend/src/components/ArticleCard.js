import React from 'react'

const ArticleCard = ({ title, date, _id }) => (
  <div key={_id}>{title}</div>
)

export default ArticleCard