import React, {Component, ReactNode} from 'react';
import {View, Text} from 'react-native';

type FactoryType = {
  id: number,
  name: string,
}

type ProductType = {
  id: number,
  name: string,
  price: number,
  amount:number,
  factory: FactoryType,
}

type Props= {
  data: ProductType,
}

export default class Product extends Component<Props, any> {
  constructor(props: Props) {
    super(props);
  }
  render(): ReactNode {
    const {data} = this.props;


    return(
      <View>
        <Text>{data.name}</Text>
      </View>
    );
  }
}