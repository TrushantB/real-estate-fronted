import React from 'react';
import {
  Alert,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
// galio component
import {
  Block, Button, Input, Text, NavBar,
} from 'galio-framework';
import theme from '../theme';
import AuthService from '../shard/services/auth';
import ValidationComponent from 'react-native-form-validator';
import Loading from '../shard/components/loading';

const authService=new AuthService();
const { height, width } = Dimensions.get('window');

class Register extends ValidationComponent {
  state = {
    name: '',
    contact: '',
    email: '',
    password: '',
    Loading:false
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }

  registration = () => {
    let { name ,contact,email,password} = this.state;
    let item = {
      name:name,
      contact:contact,
      email:email,
      // username:username,
      password:password
    }
    console.log(item);
    this.validate({
      email: {required:true,email: true,},
      password: {required: true,minlength:8},
      name:{required: true},
      contact:{required: true,minlength:10},
    });
    if(this.isFormValid()) {
     this.setState({loading:true});
      authService.registration(item).then((response) => {
        console.log(response);
        this.props.navigation.navigate('Login');
        this.setState({name:'',contact:'',email:'',password:'',loading:true})
      });
    }
  }
  render() {
    const { navigation } = this.props;

    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <NavBar
          title="Sign Up"
          onLeftPress={() => navigation.openDrawer()}
          style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
          />
          <ScrollView>
          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <Block
            flex
            center
            style={{ marginTop: theme.SIZES.BASE * 1.875, marginBottom: height * 0.1 }}
          >
            <Text
              muted
              center
              size={theme.SIZES.FONT * 0.875}
              style={{ paddingHorizontal: theme.SIZES.BASE * 2.3 }}
            >
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
                  onPress={() => Alert.alert('Not implemented')}
                  color={theme.COLORS.FACEBOOK}
                  shadowColor={theme.COLORS.FACEBOOK}
                  iconColor={theme.COLORS.WHITE}
                  style={styles.social}
                />
              </Block>
              <Block flex middle center>
                <Button
                  round
                  onlyIcon
                  iconSize={theme.SIZES.BASE * 1.625}
                  icon=""
                  iconFamily="FontAwesome"
                  onPress={() => Alert.alert('Not implemented')}
                  color={theme.COLORS.TWITTER}
                  shadowColor={theme.COLORS.TWITTER}
                  iconColor={theme.COLORS.WHITE}
                  style={styles.social}
                />
              </Block>
              <Block flex middle left>
                <Button
                  round
                  onlyIcon
                  iconSize={theme.SIZES.BASE * 1.625}
                  icon=""
                  iconFamily="FontAwesome"
                  onPress={() => Alert.alert('Not implemented')}
                  color={theme.COLORS.DRIBBBLE}
                  shadowColor={theme.COLORS.DRIBBBLE}
                  iconColor={theme.COLORS.WHITE}
                  style={styles.social}
                />
              </Block>
            </Block>
            <Text muted center size={theme.SIZES.FONT * 0.875}>
              or be classical
            </Text>
          </Block>

          <Block flex={2} center space="between">
            <Block flex={2}>
            <Input
                rounded
                placeholder="Name"
                value={this.state.name}
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                onChangeText={text => this.handleChange('name', text)}
              />
              <Text style={styles.error}>{this.isFieldInError('name') && this.getErrorsInField('name')[0]}</Text>

            <Input
                rounded
                placeholder="Contact"
                autoCapitalize="none"
                value={this.state.contact}

                style={{ width: width * 0.9 }}
                onChangeText={text => this.handleChange('contact', text)}
              />
              <Text style={styles.error}>{this.isFieldInError('contact') && this.getErrorsInField('contact')[0]}</Text>
              <Input
                rounded
                type="email-address"
                placeholder="Email"
                autoCapitalize="none"
                value={this.state.email}
                style={{ width: width * 0.9 }}
                onChangeText={text => this.handleChange('email', text)}
              />
              <Text style={styles.error}>{this.isFieldInError('email') && this.getErrorsInField('email')[0]}</Text>
              <Input
                rounded
                password
                viewPass
                placeholder="Password"
                value={this.state.password}
                style={{ width: width * 0.9 }}
                onChangeText={text => this.handleChange('password', text)}
              />
              <Text style={styles.error}>{this.isFieldInError('password') && this.getErrorsInField('password')[0]}</Text>
            </Block>
            <Block flex middle>
              <Button
                round
                color="error"
                onPress={() => this.registration()}

              >
                Sign up
              </Button>
              <Button color="transparent" shadowless onPress={() => this.props.navigation.navigate('Login')}>
                <Text center color={theme.COLORS.ERROR} size={theme.SIZES.FONT * 0.75}>
                  Already have an account? Sign In
                </Text>
              </Button>
            </Block>
          </Block>
        </KeyboardAvoidingView>
        <Loading loading={this.state.loading}/>
          </ScrollView>
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
  error:{
    color:theme.COLORS.ERROR
  }
});

export default Register;
