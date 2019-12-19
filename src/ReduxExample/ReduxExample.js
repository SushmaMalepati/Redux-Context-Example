import React, { Component } from 'react';
import AddItem from "./AddItem";
import ListItems from "./ListItems";
import DeleteItem from "./DeleteItem";
import { connect } from "react-redux";
import { getAllItems } from "./redux/actions"

class ReduxExample extends React.PureComponent {
    componentDidMount(){
      this.props.getAllItems()
    }

    render() {
        return (
            <div>
              <br/>
              <AddItem />
              <br/>
               <DeleteItem /> 
               <br />
              <ListItems allItems={this.props.allItems}/>
              {/* <EditItems /> */}
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
