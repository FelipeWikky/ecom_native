import { StyleSheet, StatusBar } from 'react-native';

export default StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#DDD',
  },

  titleHeader:{
  fontSize: 30,
  fontWeight: '500',
  color: '#0074C3',
  marginLeft: 10,
},

  title:{
    fontSize:20,
    textAlign:'center',
    padding:5,

    marginBottom:-2,

    borderTopWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    
    borderTopLeftRadius:5,
    borderTopRightRadius:5,

    borderColor: '#AAA',
  },

  formContainer:{
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderRadius:3,
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