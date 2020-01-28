import { connect } from "react-redux";
import ReplytoReplyForm from "../components/ReplytoReplyForm";
import Comments from '../components/Comments';

const mapStatetoProps = (state) => {
    return {...state,type:'ADD_REPLY_TO_REPLY'};
}
export default connect(mapStatetoProps)(ReplytoReplyForm)