import React from 'react';
import BaseService from './base-service';
const baseService = new BaseService();
export default class OngoingService extends React.Component {

getOngoingSiteData() {
   return baseService.getData('sites/getAllSites');
}
}