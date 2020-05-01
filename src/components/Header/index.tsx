import React, { Component, ReactNode } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

import styles from './styles';

import { HeaderInterface } from '../../models/Interfaces';

export default class Header extends Component<HeaderInterface, any> {
  constructor(props: HeaderInterface) {
    super(props);
  }

  render(): ReactNode {
    const title = this.props.title;
    const leftButton = this.props?.leftButtonIcon || null;
    const leftButtonPress = this.props.leftButtonPress ? this.props.leftButtonPress : () => { };

    const rightButton = this.props?.rightButtonIcon || null;
    const rightButtonPress = this.props.rightButtonPress ? this.props.rightButtonPress : () => { };

    return (
      <View style={styles.header}>
        <TouchableWithoutFeedback
          onPress={async () => await leftButtonPress()}
        >
          <View style={[styles.icon]}>
            {leftButton}
          </View>
        </TouchableWithoutFeedback>

        {this.props.titleComponent ?
          this.props.titleComponent 
        :
          <View> 
            <Text>{title}</Text> 
          </View>
        }

        <TouchableWithoutFeedback
          onPress={ async () => await rightButtonPress() }
        >
          <View style={styles.icon}>
            {rightButton}
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}