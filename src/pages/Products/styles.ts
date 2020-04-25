import { StyleSheet, StatusBar } from 'react-native';
import Header from './../../components/Header/index';

export default StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#DDD',
    marginTop: StatusBar.currentHeight,
  },

  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },

  productContainer:{
    marginVertical:10,
    marginHorizontal:15,
  },

  title:{
    padding:3,
    fontSize:22,
    fontWeight:'600',
    color:'rgb(0, 29, 227)',
    textAlign:'center',
  },

  icon:{
    marginRight:10,
    marginTop:3,
  },
});
