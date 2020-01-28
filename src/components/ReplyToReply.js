import React from 'react';
import { Comment, Icon, Tooltip, Avatar } from 'antd';


class ReplyToReply extends React.Component {
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
    const actions = [
        <span onClick={() => this.callCommentForm()}>Reply to</span>
    ]

    return (
    <div>
        
      <Comment style = {{ backgroundColor : '#f7f5f5', width : '600px', borderRadius : '20px'}}
      actions = {actions}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <p>
            {this.props.reply}
            {/* {(this.state.status === 1) && (<ReplyFormContainer func={this.func.bind(this)} depth = {this.props.depth}/>)}
            {this.props.replies.map((reply) => {
                return (
                    <div>
                    <br/>
                    <div style={{marginLeft : "45px", backgroundColor : 'white', borderRadius : '25px'}} >{reply}</div>
                    </div>);
            })} */}
          </p>
        }
      />
    </div>
    );
  }
}

export default ReplyToReply;