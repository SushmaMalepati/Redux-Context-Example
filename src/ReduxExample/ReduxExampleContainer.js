import { connect } from "react-redux";
import { getAllItems } from "./redux/actions"
import ReduxExample from "./ReduxExample"

const mapStateToProps = state => ({
    allItems: state.allItems 
  });
  
const mapDispatchToProps = {
    getAllItems
  };
  
export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(ReduxExample)

