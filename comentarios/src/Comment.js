import React, { Component } from 'react'

//stateless

// class Comment extends Component {
//     render() {
//         return(
//             <p className="card">{this.props.comment.comment}</p>
//         )
//     }
// }
//functional stateless components
const Comment = props => 
        <p className="card">{props.comment.comment}</p>

export default Comment