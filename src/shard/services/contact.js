import React from 'react';
import BaseService from './base-service';
const baseService = new BaseService();
export default class ContactService extends React.Component {

geContactData() {
    baseService.getData('projects');
}
}