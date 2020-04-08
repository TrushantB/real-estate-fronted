import React from 'react';
import BaseService from './base-service';
const baseService = new BaseService();
export default class ContactService extends React.Component {

getContactData() {
   return baseService.getData('enquiry');
}
postContactData(data) {
    return baseService.postData('enquiry',data);
 }
}