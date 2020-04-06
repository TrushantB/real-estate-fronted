import React from 'react';
import axios from 'axios';
import { environment } from '../../../environment/environment';
const headers = {
   'Content-Type': 'application/json',
   
 };
export default class BaseService extends React.Component {
   state={
      token:''
   }

getData(url) {
   return axios.get(`${environment.api}/${url}`);
}

postData(url,data) {
    return axios.post(`${environment.api}/${url}`,data,{
      headers: headers
    });
 }

 setToken(token) {
  this.setState({token})
 }

 getToken() {
    return this.state.token;
 }
}