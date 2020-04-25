import { StyleSheet, StatusBar } from 'react-native';

export default StyleSheet.create({
  container:{
    flex:1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#DDD',
    padding:10,
    paddingHorizontal:30,
  },

  title:{
    fontSize:20,
    textAlign:'center',
    padding:5,

    marginBottom:-1,

    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#AAA',
  },

  formContainer:{
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderRadius:5,
    borderColor:'#AAA',
    padding:5,
  },

  inputContainer:{
    marginBottom:10,
  },

  credentialsContainer:{
    padding:5,
    borderWidth:1,
    borderColor:'#AAA',
    borderRadius:5,
    margin:5,
    justifyContent:'center',
  },

  input:{
    borderWidth:1,
    borderRadius:5,
    borderColor:'#AAA',
    paddingLeft:5,
    height:22,
    maxWidth:'80%',
    width:200,
  },

  labelInput:{
    fontSize:12,
    fontWeight:'700',
  },

  button:{
    borderWidth:4,
    borderColor:'#DDD',
    borderRadius:7,
    backgroundColor:'#555',
    padding:10,
    marginTop:20,
    marginBottom:10,
  },

  buttonText:{
    fontSize:20,
    color:'#FFF',
  },
});