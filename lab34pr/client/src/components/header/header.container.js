import { connect } from "react-redux";
import {
  closeFilterDialog,
  openFilterDialog,
  removeFilterValues,
} from "../../redux/actions/filterActions";
import Header from "./header";

const mapStateToProps = (state) => ({
  isUserAuthorised: state.auth.isUserAuthorised,
  isFilterDialogOpen: state.filter.isDialogOpen,
});

const mapDispatchToProps = (dispatch) => ({
  onOpenFilterDialog: () => dispatch(openFilterDialog()),
  onCloseFilterDialog: () => {
    dispatch(closeFilterDialog());
    dispatch(removeFilterValues());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
