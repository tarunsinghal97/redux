import React from 'react';
import { Comment, Icon, Tooltip, Avatar } from 'antd';
import ReplytoReplyFormContainer from '../container/ReplytoReplyFormContainer';
import ReplyToReplyWrapper from './ReplyToReplyWrapper';
class ReplyWrapper extends React.Component {
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
  callCommentForm = () => {
    // console.log("hhhi")
    this.setState({status : 1})
}
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
      <span key="comment-basic-reply-to"><Icon type='message' onClick = {() => 
        this.callCommentForm()
    } /></span>,
      <span>
      <Icon type='delete' onClick={() => {
          this.props.dispatch({
              id : (this.props.comments.id + 1)%2,
              type : 'DELETE_REPLY',
              depth : this.props.depth,
              count : this.props.count
          })
      }}/>
        </span>
    ];
    let count = -1;
    return (
        <div>
      <Comment style = {{ backgroundColor : '#ffc266', width : '600px', borderRadius : '20px'}}
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
            {(this.state.status === 1) && (<ReplytoReplyFormContainer func={this.func.bind(this)} depth = {this.props.depth} count={this.props.count}/>)}
          </p>
        }
        
      />
      {this.props.replyToReply.map((replyToReply) => {
          console.log(replyToReply)
          count = count + 1
        return <div style={{marginLeft : '55px'}}><br/><ReplyToReplyWrapper reply={replyToReply} {...this.props} replyDepth={count}/></div>
      })}
      </div>
    );
  }
}

export default ReplyWrapper