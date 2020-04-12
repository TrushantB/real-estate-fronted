import React from 'react';
import { View, StatusBar , AsyncStorage } from 'react-native';
import { NativeRouter} from "react-router-native";
import { environment } from './environment/environment';
import { createStackNavigator } from 'react-navigation';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import BuilderApp from './routes';
import OngoingSiteDetails from './src/screens/ongoing-sites/site-details';
import NotificationDetails from './src/screens/notification/notification-details';
import Confirmation from './src/shard/components/confirmation';
import Enquiry from './src/screens/enquiry';
export default class App extends React.Component {
 
  componentWillMount=async()=> {
    // AsyncStorage.clear()
   await AsyncStorage.getItem('userDetails').then((userDetails) => {
       environment.userDetails=userDetails;
   })
  }
  render() {
   const NavigationItem= createStackNavigator({
        Login: {
          screen: Login,
          navigationOptions: {
            header: null,
        },
        },
        Register: {
          screen: Register,
          navigationOptions: {
            header: null,
        }
        },
        Home: {
          screen: BuilderApp,
          navigationOptions: {
            header: null,
        },
        },
        Enquiry: {
          screen:Enquiry,
          navigationOptions: {
            title: 'Enquiry',
        }, 
        },
        
        OngoingSiteDetails: {
          screen: OngoingSiteDetails,
          navigationOptions: {
            title: 'Ongoing Details',
        }, 
        },
        NotificationDetails: {
          screen: NotificationDetails,
          navigationOptions: {
            title: 'Notification Details',
        }, 
        },
        Confirmation:{
         screen:Confirmation,
         navigationOptions: {
          title: 'Thank You',
      }, 
        }
      });
    return (
      <NativeRouter>
        <View style={{ flex: 1 }}>
          <StatusBar hidden={false} />
          <NavigationItem />
       </View>
      </NativeRouter>
    );
  }
}
