import React from 'react';
import { View, StatusBar  } from 'react-native';
import Login from './src/screens/Login';
import { NativeRouter, Route } from "react-router-native";
import Register from './src/screens/Register';
import BuilderApp from './routes';

export default class AuthRoute extends React.Component {
  render() {
    return (
      <NativeRouter>
      <View style={{ flex: 1 }}>
        <StatusBar hidden={false} />
        <NativeRouter>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/drawer" component={BuilderApp} />
        </NativeRouter>
      </View>
        </NativeRouter>
    );
  }
}
