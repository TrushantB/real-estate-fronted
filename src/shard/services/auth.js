import React from 'react';
import BaseService from './base-service';
const baseService = new BaseService();
export default class AuthService extends React.Component {


registration(data) {
 return  baseService.postData('signup',data);
}

login(data) {
    return baseService.postData('login',data)
}
}