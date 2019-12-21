import React, { Component } from 'react';

const sampleContext = React.createContext({
  allItems:[],
  selectedItem:{}
})

class ContextExample extends Component {
    render() {
        return (
            <div>
                Context
            </div>
        );
    }
}

export default ContextExample;