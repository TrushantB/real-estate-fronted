import React from 'react';

export default class SharedComponent extends React.Component {
    constructor() {
        super()
        this.state={
            token:null
        }
    }

 setToken(token) {
  this.setState({token:token})
 }

 getToken() {
    return this.state.token;
 }
}