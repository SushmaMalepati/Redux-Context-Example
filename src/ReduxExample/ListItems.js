import React from 'react';
import "./styles.css"
class ListItems extends React.PureComponent {
    render() {
        console.log(this.props.allItems,"allItems")
        return (
            <div style={{background:"#F8F8F8"}}>
             <table>
                 <thead>
                 <tr>
                  <td>ID</td>
                  <td>USER ID</td>
                  <td>TITLE</td>
                </tr>
                </thead>
                {this.props.allItems.map(item => {
                return <tr>
                        <td>{item.id}</td>
                        <td>{item.userId}</td>
                        <td>{item.title}</td>
                    </tr>
                })}
              </table>
            </div>
        );
    }
}

export default ListItems;