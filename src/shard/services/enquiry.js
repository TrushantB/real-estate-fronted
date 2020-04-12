import React from 'react';
import BaseService from './base-service';
const baseService = new BaseService();
export default class EnquiryService extends React.Component {

getEnquiryData() {
   return baseService.getData('enquiry/getAll');
}

postEnquiryData(data) {
    return baseService.postData('enquiry/Add',data);
 }

 postMailData(data) {
   return baseService.postData('sendEmail',data);
}
}