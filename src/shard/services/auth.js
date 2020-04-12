import React from 'react';
import BaseService from './base-service';
const baseService = new BaseService();
export default class AuthService extends React.Component {


registration(data) {
 return  baseService.postData('user/signup',data);
}

login(data) {
    return baseService.login('user/login',data)
}
}