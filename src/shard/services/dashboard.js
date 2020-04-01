import React from 'react';
import BaseService from './base-service';
const baseService = new BaseService();
export default class DashboardService extends React.Component {

getDashboardData() {
    baseService.getData('projects');
}
}