import React, { Component, ReactNode } from 'react';
import { FlatList, View, Text, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

import styles from './styles';

import Product from '../../components/Product';

import api from '../../services/api';
import axios from 'axios';

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

type State = {
  data: ProductType[],
  loaded: boolean,
}

export default class Products extends Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
    }
  }
  async componentDidMount() {
    await this.requestData();
  }

  async requestData() {
    console.log('Refresh products..');
    this.setState({loaded:false});

    try {
      // const response = await axios.get('http://example-ecommerce.herokuapp.com/product/list');
      const response = await api.get('/product/list');
      this.setState({ data: response.data, loaded: true });
    } catch (error) {
      console.log(error);
    }
  }

  render(): ReactNode {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.openDrawer()}
          >
            <View style={[styles.icon, { marginLeft: -4 }]}>
              <FontAwesome name='list' size={30} color='#AAA' />
            </View>
          </TouchableWithoutFeedback>

          <Text style={styles.title}>Produtos disponíveis</Text>

          <TouchableWithoutFeedback
            onPress={async () => this.requestData()}
          >
            <View style={styles.icon}>
              <MaterialIcons name='refresh' size={33} color='#AAA' />
            </View>
          </TouchableWithoutFeedback>
        </View>

        {this.state.loaded ?
          <View>
            <FlatList
              data={this.state.data}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <View style={styles.productContainer}>
                  <Product data={item} />
                </View>
              )}
            />
          </View>
          :
          <View style={styles.loading}>
            <ActivityIndicator color='#0000ff' size='large' />
          </View>
        }
      </View>
    );

  }
}