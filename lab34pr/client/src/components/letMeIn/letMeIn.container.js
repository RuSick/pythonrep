import { connect } from "react-redux";
import { authUser } from "../../redux/actions/authActions";
import LetMeIn from "./letMeIn";

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  onGetIn: () => dispatch(authUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LetMeIn);
