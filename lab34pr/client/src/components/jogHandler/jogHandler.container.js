import { connect } from "react-redux";
import { addJog, editJog } from "../../redux/actions/jogActions";
import JogHandler from "./jogHandler";

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  onAddJog: (data) => dispatch(addJog(data)),
  onEditJog: (data) => dispatch(editJog(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(JogHandler);
