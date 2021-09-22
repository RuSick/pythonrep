import { connect } from "react-redux";
import App from "./App";
import { authUser, getUserByToken } from "./redux/actions/authActions";

const mapStateToProps = (state) => ({
  isPending: state.auth.isAuthPending,
  isUserAuthorised: state.auth.isUserAuthorised,
});

const mapDispatchToProps = (dispatch) => ({
  onMount: () => dispatch(getUserByToken()),
  authUser: () => dispatch(authUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
