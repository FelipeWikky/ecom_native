import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#DDD',
  },

  title:{
    fontSize:30,
    fontWeight:'500',
    color:'#0074C3',
    marginLeft:10,
  },

  formContainer: { 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#BBB', 
    padding: 20, 
    borderRadius: 3 
  },

  inputContainer:{
    marginBottom: 10,
    maxWidth:'100%',
    marginLeft:50,
  },

  input:{
    height:22,
    width:300,
    maxWidth:'50%',

    borderWidth: Number(`${StyleSheet.hairlineWidth}`) ,
    borderRadius:3,
    borderColor:'#AAA',
  },

  textInput:{
    marginRight:5,
    fontWeight:'bold',
    fontSize:15,
    marginBottom:1,
  },

  button:{
    borderWidth:1,
    borderRadius:3,
    paddingVertical:5,
    paddingHorizontal:20,
    backgroundColor:'#002ABCD3'

  },

  textButton:{
    fontSize:22,
    color:'#00C004',
    fontWeight:'bold',
  },
});

export default styles;