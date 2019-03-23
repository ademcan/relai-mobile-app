import React from 'react';
var ReactNative = require('react-native');
var {
  StyleSheet,
  View
} = ReactNative;

class PaginationIndicator extends React.Component {
  constructor(props) {
    super(props);
  }

  _renderItem(index, selected) {
    let style = [styles.base];
    if (selected)
      style.push(styles.selected);
    return (
      <View key={index} style={style}/>
    )
  }

  _renderIndicators() {
    let length = this.props.length;
    let current = this.props.current;

    let indicators = [];
    for (let i = 0; i < length; i++) {
      indicators.push(this._renderItem(i, i === current))
    }

    return indicators
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderIndicators()}
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  base: {
      marginBottom:30,
    width: 8,
    height: 8,
    borderRadius: 5,
    borderColor: '#253041',
    borderWidth: 1,
    marginHorizontal: 5
  },
  selected: {
    backgroundColor: '#253041'
  }
});

export default PaginationIndicator;
