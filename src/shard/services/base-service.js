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
   headers.Authorization=JSON.parse(environment.userDetails).token;
   return axios.get(`${environment.api}/${url}`,{headers:headers});
}

postData(url,data) {
   headers.Authorization=JSON.parse(environment.userDetails).token;
    return axios.post(`${environment.api}/${url}`,data,{headers: headers});
 }
 putData(url,data) {
   headers.Authorization=JSON.parse(environment.userDetails).token;
   return axios.put(`${environment.api}/${url}`,data,{headers:headers});
 }
 
}