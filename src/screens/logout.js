import React from 'react';
import ValidationComponent from 'react-native-form-validator';
import { AsyncStorage } from 'react-native';
// galio component
import {
  Block
} from 'galio-framework';

export default class Logout extends ValidationComponent {
  componentWillMount() {
  AsyncStorage.clear();
  this.props.navigation.navigate("Login");
  }
 
  render() {
    return (
      <Block safe flex >
        
      </Block>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     paddingTop: theme.SIZES.BASE * 0.3,
//     paddingHorizontal: theme.SIZES.BASE,
//     backgroundColor: theme.COLORS.WHITE,
//   },
//   social: {
//     width: theme.SIZES.BASE * 3.5,
//     height: theme.SIZES.BASE * 3.5,
//     borderRadius: theme.SIZES.BASE * 1.75,
//     justifyContent: 'center',
//   },
//   error:{
//     color:theme.COLORS.ERROR
//   }
// });

