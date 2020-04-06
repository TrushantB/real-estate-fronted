import React from 'react';
import axios from 'axios';
import { environment } from '../../../environment/environment';
const headers = {
   'Content-Type': 'application/json',
 };

export default class BaseService extends React.Component {
   

login(url,data) {
   return axios.post(`${environment.api}/${url}`,data);
}
getData(url) {
   headers.Authorization=environment.token;
   return axios.get(`${environment.api}/${url}`,{headers:headers});
}

postData(url,data) {
   headers.Authorization=environment.token;
    return axios.post(`${environment.api}/${url}`,data,{headers: headers});
 }

//  setToken(token) {
//   this.setState({token})
//  }

 getToken() {
    return environment;
 }
}