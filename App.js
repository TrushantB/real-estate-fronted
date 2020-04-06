import React from 'react';
import { View, StatusBar , AsyncStorage } from 'react-native';
import { NativeRouter} from "react-router-native";
import AuthRoute from './auth-routes'
import { environment } from './environment/environment';
export default class App extends React.Component {
 
  componentWillMount=async()=> {
   await AsyncStorage.getItem('token').then((token) => {
       environment.token=token;
   })
  }
  render() {
    console.log("Hello");
    return (
      <NativeRouter>

      <View style={{ flex: 1 }}>
        <StatusBar hidden={false} />
        <AuthRoute />
        {/* {
          this.state.token ? <AuthRoute /> : <BuilderApp />
        }
         */}
        {/* {
          AsyncStorage.getItem('token').then((token) =>{
            return 
          })
        } */}
       
        
      </View>
        </NativeRouter>
    );
  }
}
