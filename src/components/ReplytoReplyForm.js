import React from 'react';
import {Input} from 'antd';
const {Search} = Input;
export default (props) => {
    const {dispatch} = props
    let id = props.comments.id
    return (
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
    );
}