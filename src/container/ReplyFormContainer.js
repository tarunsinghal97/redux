import { connect } from "react-redux";
import ReplyForm from "../components/ReplyForm";
import Comments from '../components/Comments';

const mapStatetoProps = (state) => {
    return {...state,type:'ADD_REPLY'};
}
export default connect(mapStatetoProps)(ReplyForm)