import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

export default class SharedComponent extends React.Component {
    constructor() {
        super()
        this.state={
            token:null,
            loading:false
        }
    }
    flag=false;

 setToken(token) {
  this.setState({token:token})
 }

 getToken() {
    return this.state.token;
 }
 setSpinner(loading) {
  this.setState({loading:loading})
  this.flag=loading;

 }
 getpinner() {
     return(
        <Spinner
        visible={this.flag}
        textContent={'Loading...'}
        textStyle={{color: '#FFFF'}}
        animation={'slide'}
      />
     )
 }
}