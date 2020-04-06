import React from 'react';
import BaseService from './base-service';
const baseService = new BaseService();
export default class EnquiryService extends React.Component {

getEnquiryData() {
   return baseService.getData('enquiry');
}

postnquiryData() {
    return baseService.postData('enquiry');
 }
}