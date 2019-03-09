import React from 'react';
import ListItem from './ListItem'

const List = (props) =>
  <div className="center vertical" id="list">
  {props.name.map(function(item, index) {
    return <ListItem
      item={ item }
      index={ index }
      deleteItem={ props.deleteItem }
      updateItem={ props.updateItem }
    />
  })}
  </div>

export default List;