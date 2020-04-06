import React from 'react';
import BaseService from './base-service';
const baseService = new BaseService();
export default class DashboardService extends React.Component {

getDashboardData() {
  return  baseService.getData('users');
}
postDashboardData(data) {
  return baseService.postData('users',data);
}
}