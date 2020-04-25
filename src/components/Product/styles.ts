import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card:{
    borderWidth:1,
    borderColor:'#BBB',
    padding:10,
    borderRadius:5,
  },

  titleContainer:{
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
  },

  title:{
    fontWeight:'bold',
    fontSize:18,
    color:'rgb(0, 29, 227)',
  },
  describe:{
    fontWeight:'500',
    fontSize:16,
  },
});