import React from 'react';
import { Text, View } from 'react-native';

export class HelloWorld extends React.PureComponent {
    render() {
      const { name } = this.props;
      return (
        <View>
          <Text>
            Hello
            { name }
          </Text>
        </View>
      );
    }
}
