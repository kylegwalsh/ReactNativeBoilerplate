import React, { Component } from 'react';
import { ListView } from 'react-native';

// Class that only renders list items as needed (for performance reasons)
export class List extends Component {

  // Set up ListView beforehand
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    // this.props.data should be replaced with whatever prop contains your list data
    this.dataSource = ds.cloneWithRows(this.props.data);
  }

  // Describe how each element in the list should be rendered (current item is 'item')
  renderRow(item) {
    // Render another component in here using the item's data
    // Ex:
    // return <ListItem item={item}/>
  }

  // Render the list component
  render() {
    return (
      // This element generates our list
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}
