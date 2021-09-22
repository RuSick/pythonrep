import { connect } from "react-redux";
import { getUserJogs } from "../../redux/actions/jogActions";
import Jogs from "./jogs";

const mapStateToProps = (state) => ({
  jogs: state.jogs.jogs,
  user: state.auth.user,
  filterValues: state.filter.filterValues,
});

const mapDispatchToProps = (dispatch) => ({
  onMount: () => dispatch(getUserJogs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Jogs);
