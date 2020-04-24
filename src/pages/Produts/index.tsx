import React, { Component, ReactNode } from 'react';
import { FlatList, Button } from 'react-native';

import Product from '../../components/Product';

import api from '../../services/api';


export default class Products extends Component<any, any> {
  constructor(props: any){
    super(props);
    this.state = {
      data: []
    }
  }
  async componentDidMount(){
    const response = await api.get('/product/list');
    this.setState({data: response.data});
  }

  render(): ReactNode {
    return (
      <>
        <Button title='clique' onPress={()=>console.log(this.state)} />
        <FlatList
          data={this.state.data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Product data={item} />
          )}
        />
      </>
    );
  }
}