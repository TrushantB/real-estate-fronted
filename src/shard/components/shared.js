import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { Alert } from 'react-native';

export default class SharedComponent extends React.Component {
    constructor() {
        super()
        this.state={
            token:null,
            loading:false
        }
    }
    flag=false;

errorMessages(name,code) {
    switch(code) {
        case 404 : Alert.alert(`${name} data not found`);
        break;
        case 401: Alert.alert(`You are not authonticated user.`);
        break;
        case 403: Alert.alert(`The request was refused by the server.`);
        break;
        case 400: Alert.alert(`Bad request.`);
        break;
        case 511: Alert.alert(`Authentication required for the client to gain network access.`);
        break;
        case 500: Alert.alert(`Internal server error for ${name}`)
    }
}

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