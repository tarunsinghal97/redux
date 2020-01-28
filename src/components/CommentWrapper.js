import React from 'react';
import { Comment, Avatar, Icon, Tooltip } from 'antd';
import ReplyFormContainer from '../container/ReplyFormContainer';
import ReplyWrapper from './ReplyWrapper';
class CommentWrapper extends React.Component {
    state = {
        status : 0
    }
    func = () => {
        this.setState({
            status : 0
        })
    }
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
                  type : 'DELETE_COMMENT',
                  depth : this.props.depth,
                  id : (this.props.comments.id + 1)%2
              })
          }}/>
            </span>
        ];
    
    let count = -1
    return (
    <div>
        
      <Comment style = {{ backgroundColor : '#ffc266', width : '600px', borderRadius : '20px'}}
      actions = {actions}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <p>
            <font color='white'><b>{this.props.comment}</b></font>
            {(this.state.status === 1) && (<ReplyFormContainer func={this.func.bind(this)} depth = {this.props.depth}/>)}
          </p>
        }
      />
      
      {this.props.replies.map((reply) => {
        count = count + 1
            return (
                
                <div>
                <br/>
                <div style={{marginLeft : "45px", borderRadius : '25px'}}><ReplyWrapper reply = { reply.reply } depth={this.props.depth} count={count} replyToReply = {reply.replyToreply} {...this.props}/></div>
                </div>);
        })}
    </div>
    );
  }
}

export default CommentWrapper;