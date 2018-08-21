import React, { Component } from 'react'

class NewComment extends Component {
    constructor(props) {
        super(props)
        this.handleEnter = this.handleEnter.bind(this)
    }
    handleEnter(event){
        if(event.keyCode === 13) {
            //console.log(event.keyCode)
            this.props.postNewComment({
                //comment: 'test'
                comment: this.refs.comment.value
            })
            this.refs.comment.value = ''
            //console.log(this.refs.comment.value)
            event.preventDefault()
        }
    }

    render() {
        return (
            <div className="row">
                <textarea ref="comment" placeholder="Comente!" className="form-control" onKeyDown={this.handleEnter}></textarea>
            </div>
        )
    }
}

export default NewComment