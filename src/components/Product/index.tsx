import React, { Component, ReactNode } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

import { currencyBR as currencyMask } from '../../utils/Currency';

type FactoryType = {
  id: number,
  name: string,
}

type ProductType = {
  id: number,
  name: string,
  price: number,
  amount: number,
  factory: FactoryType,
}

type Props = {
  data: ProductType,
}

type State = {
  expansive: boolean,
}

export default class Product extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      expansive: false,
    }
  }
  render(): ReactNode {
    const { data } = this.props;

    return (
      <View style={styles.card}>
        <TouchableWithoutFeedback
          onPress={() => this.setState({...this.state, expansive: !this.state.expansive}) }
        >
          <View style={styles.titleContainer}>

            <Text style={styles.title}>
              {data.name} - R${data.price}
              {/* {
                Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(data.price)
              } */}
            </Text>

            <View>
              {this.state.expansive
                ?
                <Ionicons name='md-arrow-dropup-circle' size={35} color='#AAA' />
                :
                <Ionicons name='md-arrow-dropdown-circle' size={35} color='#AAA' />
              }
            </View>
          </View>
        </TouchableWithoutFeedback>

        {this.state.expansive?
          <View>
            <Text style={styles.describe}>Disponível: <Text style={{fontWeight:'bold'}}>{data.amount}</Text> unidades</Text>
            <Text style={styles.describe}>Fabricante: <Text style={{fontWeight:'bold'}}>{data.factory.name}</Text> </Text>
          </View>
        :
          null  
        }
      </View>
    );
  }
}