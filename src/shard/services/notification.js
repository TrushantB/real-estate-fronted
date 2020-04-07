import React from 'react';
import BaseService from './base-service';
const baseService = new BaseService();

export default class NotificationService extends React.Component {

getNotificationData() {
   return baseService.getData('notifications');
}
}