import React from 'react';
import { View, StatusBar , AsyncStorage } from 'react-native';
import { NativeRouter} from "react-router-native";
import AuthRoute from './auth-routes'
export default class App extends React.Component {
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
