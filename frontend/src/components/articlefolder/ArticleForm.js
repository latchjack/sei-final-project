import React from 'react'

const ArticleForm = ({ data, handleChange, handleSubmit }) => {

  return(
    <div>
      <form onSubmit={handleSubmit}>
      <h2 className="title">Write an Article</h2>
        <div className="field">
          <label className="label">Enter your text</label>
          <div className="control">
            <input 
              className="input"
              name="text"
              required
              placeholder="Whats on your mind?..."
              onChange={handleChange}
              value={data.text}
            />
          </div>
        </div>
        <button type="submit" className="button is-fullwidth is-info">Publish this Article!</button>
      </form>
    </div>
  )
}

export default ArticleForm