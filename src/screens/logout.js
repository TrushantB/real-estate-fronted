import React from 'react';
import ValidationComponent from 'react-native-form-validator';
import { AsyncStorage } from 'react-native';
// galio component
import {
  Block
} from 'galio-framework';
import AuthService from '../shard/services/auth';
import Loading from '../shard/components/loading';
import SharedComponent from '../shard/components/shared';
let sharedComponent=new SharedComponent();
let authService=new AuthService();
export default class Logout extends ValidationComponent {
  state={
    loading:true
  }
  componentDidMount() {
    authService.logout().then((response) => {
      AsyncStorage.clear();
      this.props.navigation.navigate("Login");
      this.setState({loading:false})
    }).catch((err) => {sharedComponent.errorMessages('Logout',err.response.status); this.setState({loading:false})})
  }
 
  render() {
    return (
      <Block safe flex >
        <Loading loading={this.state.loading}/>
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

