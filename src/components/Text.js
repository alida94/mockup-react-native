import React from 'react';
import {Text} from 'react-native';

export default props => {
  if (!props.children) {
    return null;
  }
  return (
    <Text
      {...props}
      style={[
        {color: props.color || 'black', fontSize: props.size || 14},
        props.style,
        props.center && {textAlign: 'center'},
        props.cut && {textDecorationLine: 'line-through'},
        props.bold && {fontWeight: 'bold'},
        props.italic && {fontStyle: 'italic'},
        props.grey && {color: '#9F9F9F'},
      ]}
      children={
        typeof props.children === 'string'
          ? props.children
          : JSON.stringify(props.children)
      }
    />
  );
};
