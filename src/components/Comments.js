import React from 'react';
import {Input} from 'antd';
import CommentWrapper from './CommentWrapper';
const {Search} = Input;

const Comments = (props) => {
    const {index, dispatch} = props
    let comments = props.comments['comment'][index]
    let id = props.comments.id
    let count = -1;
    return (
        <div>
            {(props.type === 'ADD_COMMENT') && 
                <div >
                    <Search allowClear = 'true' style={{ width: 500 }} placeholder="..." onSearch={(value)=> {
                        ((value !== '') && dispatch({
                            type : 'ADD_COMMENT',
                            comment : value,
                            id : (id + 1)%2
                        }))
                    }} enterButton = 'comment' />
                    {comments.map((comment) => {
                        count = count + 1
                        return (
                            <div style={{marginLeft : "30px"}} ><br/><CommentWrapper comment={comment.comment} replies = {comment.reply} depth = {count} {...props}/></div>
                            );
                    })}
                </div>
            }
            {(props.type === 'ADD_REPLY') && 
                <div>
                    <Search allowClear = 'true' style={{ width: 500 }} placeholder="..." onSearch={(value)=> {
                        ((value !== '') && dispatch({
                            type : 'ADD_REPLY',
                            reply : value,
                            depth : props.depth,
                            id : (id + 1)%2
                        }))
                        props.func()
                    }}
                    enterButton = 'Reply' />
                </div>
            }
            {(props.type === 'ADD_REPLY_TO_REPLY') &&
                <div>
                    <Search allowClear = 'true' style={{ width: 500 }} placeholder="..." onSearch={(value)=> {
                        ((value !== '') && dispatch({
                            type : 'ADD_REPLY_TO_REPLY',
                            reply : value,
                            depth : props.depth,
                            count : props.count,
                            id : (id + 1)%2
                        }))
                        props.func()
                    }}
                    enterButton = 'Reply' />
                </div>
            }
        </div>
    );
}

export default Comments;