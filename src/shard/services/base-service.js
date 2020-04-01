import React from 'react';
import axios from 'axios';
import { environment } from '../../../environment/environment';

export default class BaseService extends React.Component {

getData(url) {
   return axios.get(`${environment.api}/${url}`);
}

postData(url,data) {
    return axios.post(`${environment.api}/${url}`,data);
 }
}