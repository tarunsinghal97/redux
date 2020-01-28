import { connect } from "react-redux";
import Display from "../components/Display";

const mapStatetoProps = (state) => {
    return state;
}
export default connect(mapStatetoProps)(Display)