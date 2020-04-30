import { StyleSheet, StatusBar } from 'react-native';

export default StyleSheet.create({
  header: {
    position:'relative',
    top: 0,
    left: 0,
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth:1,
    width:'100%',
    marginTop: StatusBar.currentHeight,
  },

  icon: {
    marginRight: 10,
    marginTop: 3,
  },
});