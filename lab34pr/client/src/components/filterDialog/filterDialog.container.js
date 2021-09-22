import { connect } from "react-redux";
import {
  removeFilterValues,
  setFilterValues,
} from "../../redux/actions/filterActions";
import FilterDialog from "./filterDialog";

const mapStateToProps = (state) => ({
  filterValues: state.filter.filterValues,
});

const mapDispatchToProps = (dispatch) => ({
  onSetFilterValues: (filterValues) => dispatch(setFilterValues(filterValues)),
  onRemoveFilterValues: (filterValues) => dispatch(removeFilterValues()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterDialog);
