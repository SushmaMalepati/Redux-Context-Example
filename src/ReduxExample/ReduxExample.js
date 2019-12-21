import React from 'react';
import AddItem from "./AddItem";
import ListItems from "./ListItems";
import DeleteItem from "./DeleteItem";
import EditItems from "./EditItems";
import { connect } from "react-redux";
import { getAllItems } from "./redux/actions"
import "./styles.css"
import {
    Link
  } from "react-router-dom";
class ReduxExample extends React.PureComponent {
    componentDidMount(){
      this.props.getAllItems()
    }

    render() {
        return (
            <div>
              <br/>
              <ListItems allItems={this.props.allItems}/>
              <br/>
              <AddItem />
              <br/>
               <DeleteItem /> 
               <br />
              <br />
              <EditItems />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    allItems: state.itemsReducer.allItems 
  });
  
const mapDispatchToProps = {
    getAllItems
  };
  
export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(ReduxExample)
