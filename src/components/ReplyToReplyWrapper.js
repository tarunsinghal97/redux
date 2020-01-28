import React from 'react';
import { Comment, Icon, Tooltip, Avatar } from 'antd';
class ReplyToReplyWrapper extends React.Component {
  state = {
    likes: 0,
    dislikes: 0,
    action: null,
    status : 0
  };
  func = () => {
    this.setState({
        status : 0
    })
}
  like = () => {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: 'liked',
    });
  };

  dislike = () => {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: 'disliked',
    });
  };
 
  render() {
    const { likes, dislikes, action } = this.state;

    const actions = [
        <span key="comment-basic-like">
          <Tooltip title="Like">
            <Icon
              type="like"
              theme={action === 'liked' ? 'filled' : 'outlined'}
              onClick={this.like}
            />
          </Tooltip>
        </span>,
        <span key=' key="comment-basic-dislike"'>
          <Tooltip title="Dislike">
            <Icon
              type="dislike"
              theme={action === 'disliked' ? 'filled' : 'outlined'}
              onClick={this.dislike}
            />
          </Tooltip>
        </span>,
        <span>
        <Icon type='delete' onClick = {() => {
            this.props.dispatch({
                type : 'DELETE_REPLY_TO_REPLY',
                id : (this.props.comments.id + 1)%2,
                depth : this.props.depth,
                replyDepth : this.props.replyDepth,
                count : this.props.count
            })
        }}/>
          </span>
      ];
    return (
        <div>
      <Comment style = {{ backgroundColor : '#ffb84d', width : '600px', borderRadius : '20px'}}
        actions={actions}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <p>
             <font color='white'><b>{this.props.reply}</b></font>
          </p>
        }
        
      />
      
      </div>
    );
  }
}

export default ReplyToReplyWrapper