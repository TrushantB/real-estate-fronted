import React from 'react';
import {
  Alert, Dimensions, KeyboardAvoidingView, StyleSheet, Platform,AsyncStorage
} from 'react-native';

// galio component
import {
  Block, Button, Input, NavBar, Text,Icon
} from 'galio-framework';
import theme from '../theme';
// import BaseService from '../shard/services/base-service';
import AuthService from '../shard/services/auth';
import { environment } from '../../environment/environment';
import Loading from '../shard/components/loading';
const authService=new AuthService();
const { height, width } = Dimensions.get('window');

class Login extends React.Component {

  state = {
    email: '',
    password: '',
    loading:true

  }
  componentWillMount() {
    // AsyncStorage.clear()
    AsyncStorage.getItem('token').then((token) => {
      // this.setState({token})
      // baseService.setToken(token)
      if(token) {
        this.props.navigation.navigate('Home');
        this.setState({loading:false})
      }
    })
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }
  login() {
    this.setState({loading:true})
    authService.login({username:this.state.email,password:this.state.password}).then(async(response) => {
     console.log(response.data);
     if(response.data) {
       environment.token=response.data.token
       await AsyncStorage.setItem('token',response.data.token).then((res) => {
        this.setState({loading:false})
        this.props.navigation.navigate('Home');
       });
     }
     else {
       Alert.alert(response);
     }
    })
  }
  render() {
    const { navigation } = this.props;
    const { email, password } = this.state;

    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <NavBar
          title="Sign In"
          onLeftPress={() => navigation.openDrawer()}
          style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
        />
        <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
          <Block flex center style={{ marginTop: theme.SIZES.BASE * 1.875, marginBottom: height * 0.1 }}>
            <Text muted center size={theme.SIZES.FONT * 0.875} style={{ paddingHorizontal: theme.SIZES.BASE * 2.3 }}>
              This is the perfect place to write a short description
              of this step and even the next steps ahead
            </Text>
            <Block row center space="between" style={{ marginVertical: theme.SIZES.BASE * 1.875 }}>
              <Block flex middle right>
                <Button
                  round
                  onlyIcon
                  iconSize={theme.SIZES.BASE * 1.625}
                  icon=""
                  iconFamily="FontAwesome"
                  color={theme.COLORS.FACEBOOK}
                  shadowColor={theme.COLORS.FACEBOOK}
                  iconColor={theme.COLORS.WHITE}
                  style={styles.social}
                  onPress={() => Alert.alert('Not implemented')}
                />
              </Block>
              <Block flex middle center>
                <Button
                  round
                  onlyIcon
                  iconSize={theme.SIZES.BASE * 1.625}
                  icon=""
                  iconFamily="FontAwesome"
                  color={theme.COLORS.TWITTER}
                  shadowColor={theme.COLORS.TWITTER}
                  iconColor={theme.COLORS.WHITE}
                  style={styles.social}
                  onPress={() => Alert.alert('Not implemented')}
                />
              </Block>
              <Block flex middle left>
                <Button
                  round
                  onlyIcon
                  iconSize={theme.SIZES.BASE * 1.625}
                  icon=""
                  iconFamily="FontAwesome"
                  color={theme.COLORS.DRIBBBLE}
                  shadowColor={theme.COLORS.DRIBBBLE}
                  iconColor={theme.COLORS.WHITE}
                  style={styles.social}
                  onPress={() => Alert.alert('Not implemented')}
                />
              </Block>
            </Block>
            <Text muted center size={theme.SIZES.FONT * 0.875}>
              or be classical
            </Text>
          </Block>

          <Block flex={2} center space="evenly">
            <Block flex={2}>
              <Input
                rounded
                type="email-address"
                placeholder="Email"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                onChangeText={text => this.handleChange('email', text)}
              />
              <Input
                rounded
                password
                viewPass
                placeholder="Password"
                style={{ width: width * 0.9 }}
                onChangeText={text => this.handleChange('password', text)}
              />
              <Text
                color={theme.COLORS.ERROR}
                size={theme.SIZES.FONT * 0.75}
                onPress={() => Alert.alert('Not implemented')}
                style={{ alignSelf: 'flex-end', lineHeight: theme.SIZES.FONT * 2 }}
              >
                Forgot your password?
              </Text>
            </Block>
            <Block flex middle>
              <Button
                round
                color="error"
                onPress={() => this.login()}
              >
                Sign in
              </Button>
              <Button color="transparent" shadowless onPress={() => this.props.navigation.navigate('Register')}>
                <Text center color={theme.COLORS.ERROR} size={theme.SIZES.FONT * 0.75}>
                  {"Don't have an account? Sign Up"}
                </Text>
              </Button>
            </Block>
          </Block>
        </KeyboardAvoidingView>
        <Loading loading={this.state.loading}/>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: theme.SIZES.BASE * 0.3,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
  },
});

export default Login;
