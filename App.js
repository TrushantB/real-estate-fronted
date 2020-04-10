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
export default class App extends React.Component {
 
  componentWillMount=async()=> {
    // AsyncStorage.clear()
   await AsyncStorage.getItem('token').then((token) => {
       environment.token=token;
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
        Signup: {
          screen: Register,
          
        },
        Home: {
          screen: BuilderApp,
          navigationOptions: {
            header: null,
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
