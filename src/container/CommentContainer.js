import { connect } from "react-redux";
import Comments from '../components/Comments';

const mapStatetoProps = (state) => {
    return {...state,type : 'ADD_COMMENT'};
}



export default connect(mapStatetoProps)(Comments)