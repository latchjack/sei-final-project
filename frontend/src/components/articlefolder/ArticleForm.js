import React from 'react'

const ArticleForm = ({ data, handleChange, handleSubmit }) => {

  return (
    <div className="columns">
      <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter">
        <h2 className="title">Write an Article</h2>
        <div className="field">
          <label className="label">Article title</label>
          <div className="control">
            <input
              className="input"
              name="title"
              required
              placeholder="Enter Article's title"
              onChange={handleChange}
              // value={data.name}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Enter your text</label>
          <div className="control">
            <input
              className="textarea is-large"
              name="articletext"
              required
              placeholder="Whats on your mind?..."
              onChange={handleChange}
            // value={data.name}
            />
          </div>
        </div>
        <button type="submit" className="button is-fullwidth is-info">Publish this Article!</button>
      </form>
    </div>
  )
}

export default ArticleForm