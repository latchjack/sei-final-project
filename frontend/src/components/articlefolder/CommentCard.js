// import React from 'react'
// import axios from 'axios'

// class CommentCard extends React.Component {
//   state = {
//       articles: {
//         // comments: []
//       }
    
//   }

//   async componentDidMount() {
//     try {
//       const res = await axios.get('/api/articles/')
//       this.setState({ articles: res.data })
      
//     } catch(err) {
//       console.log(err)
//     }
//   }

//   render() {
//     if(!this.state.articles.length) return null
//     console.log(this.state.articles.map(article => article.comments))
//     return (
//       <>
//         <div className="section">
//           <div className="container">
//             <h1 className="title is-1 has-text-centered">Articles</h1>
//           </div>
//         </div>
//         <div className="section">
//           <div className="container">
//             <div className="columns is-multiline is-2 ">
//               {this.state.articles.comments.map((comment, i) => (
//               <p>key={i} {comment.text} </p>
      
//               ))}
//             </div>
//           </div>
//         </div>
//       </>
//     )
//   }
// }

// export default CommentCard