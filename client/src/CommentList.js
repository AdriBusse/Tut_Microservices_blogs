import React from 'react'

export default ({comments})=>{


    const renderComments= comments.map(comment=>{

        if( comment.status==='approved'){
            return (<li key={comment.id}>{comment.content}</li>)
        }else if(comment.status==='rejected'){
        return (<li style={{color:'	#707070'}} key={comment.id}>is rejected: {comment.content}</li>)
        }else if(comment.status==='pending'){
            return (<li style={{color:'	#707070'}} key={comment.id}>your comment will checked: {comment.content}</li>)
            }
    })

    return(
    <div>
        <ul>{renderComments}</ul>
    </div>)
}