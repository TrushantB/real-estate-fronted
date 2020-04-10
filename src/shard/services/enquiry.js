import React from 'react';
import BaseService from './base-service';
const baseService = new BaseService();
export default class EnquiryService extends React.Component {

getEnquiryData() {
   return baseService.getData('enquiry');
}

postEnquiryData(data) {
    return baseService.postData('sendEmail',data);
 }
}