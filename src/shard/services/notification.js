import React from 'react';
import BaseService from './base-service';
const baseService = new BaseService();

export default class NotificationService extends React.Component {

getNotificationData() {
   return baseService.getData('notification/getAllNotification');
}

readNotificationData(id,data) {
   return baseService.putData(`notification/readNotification/${id}`,data);
}
}