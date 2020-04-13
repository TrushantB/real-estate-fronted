import React from 'react';
import {
  Alert,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
// galio component
import {
  Block, Button, Input, Text, NavBar,Icon
} from 'galio-framework';
import theme from '../theme';
import ContactService from '../shard/services/contact';
import Loading from '../shard/components/loading';
import { environment } from '../../environment/environment';
import ValidationComponent from 'react-native-form-validator';
import SharedComponent from '../shard/components/shared';

let sharedComponent=new SharedComponent();
const contactService=new ContactService();

const { width } = Dimensions.get('window');

const MARGIN_LEFT = '5%';
const SOCIAL_ICON_SIZE = theme.SIZES.BASE * 1.5;
const SOCIAL_BTN_SIZE = theme.SIZES.BASE * 3;

const Header = ({ title }) => (
  <Block left style={styles.header}>
    <Text h3></Text>
  </Block>
);
export default class Contact extends ValidationComponent {
  state={
    name:'',
    email:'',
    contact:'',
    message:'',
    loading:false
  }
  submit() {
    this.validate({
      contact: {required:true,minlength:10},
      message: {required: true},
    });
    
    if(this.isFormValid()) {
      let { contact,message } = this.state;
      let item = {
        name: JSON.parse(environment.userDetails).name,
        contact:contact,
        email: JSON.parse(environment.userDetails).email,
        feedback: message,
        isEquiry: false,
        actiontaken: false,
      }

      this.setState({loading:true});
      contactService.postContactData(item).then((response) => {
        this.setState({contact:'',message:'',loading:false});
        this.props.navigation.navigate("Confirmation");
      }).catch((err) => {sharedComponent.errorMessages('',err.response.status); this.setState({loading:false})})
    }
  }

  handleChange(name,value) {
    this.setState({[name]:value})
  }

  render() {
    let { name,contact,email,message } = this.state;
    const { navigation } = this.props;
    console.log(navigation);
    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <NavBar
          title="Contact"
          left={(
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon 
                name="menu"
                family="feather"
                size={theme.SIZES.BASE}
                color={theme.COLORS.ICON}
              />
            </TouchableOpacity>
          )}
          style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
        />
        <Block left style={styles.header}>
          <Text h3>Get in touch.</Text>
        </Block>
        <ScrollView keyboardDismissMode='on-drag'>
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

          <Block flex middle>
          <Input
                rounded
                placeholder="Your name"
                value={JSON.parse(environment.userDetails).name}
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                editable={false}
              // onChangeText={text => this.handleChange('name', text)}
              />
              <Input
                rounded
                value={JSON.parse(environment.userDetails).email}
                placeholder="Email"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                editable={false}
              // onChangeText={text => this.handleChange('email', text)}
              />
                <Input
                rounded
                placeholder="Contact number"
                value={contact}
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
              onChangeText={text => this.handleChange('contact', text)}
              />
              <Text style={styles.error}>{this.isFieldInError('contact') && this.getErrorsInField('contact')[0]}</Text>
              <Input
                rounded
                placeholder="Write your message here"
                value={message}
                autoCapitalize="none"
                style={{ width: width * 0.9 , height: 150}}
              onChangeText={text => this.handleChange('message', text)}
              />
              <Text style={styles.error}>{this.isFieldInError('message') && this.getErrorsInField('message')[0]}</Text>

            </Block>
            <Block flex center style={{ marginBottom: 20 }}>
            <Button
              shadowless
              style={styles.button}
              round
              color="info"
              onPress={() => this.submit()}
            >
              Submit
            </Button>
            </Block>
            </KeyboardAvoidingView>
          </ScrollView>
          <Loading loading={this.state.loading}/>
        </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.WHITE,
    paddingTop: 15,
  },
  flex: {
    flex: 1,
  },
  social: {
    width: SOCIAL_BTN_SIZE,
    height: SOCIAL_BTN_SIZE,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
  },
  socialContainer: {
    marginVertical: theme.SIZES.BASE * 1.875,
  },
  input: {
    alignSelf: 'center',
    width: width * 0.89,
    borderBottomColor: theme.COLORS.BLACK,
    borderWidth: theme.SIZES.BASE * 0.04,
    borderRadius: 0,
    paddingHorizontal: 0,
  },
  button: {
    marginVertical: 10,
    width: width * 0.89,
  },
  borderColor: {
    borderColor: theme.COLORS.GREY,
  },
  header: {
    // width: '50%',
    marginLeft: MARGIN_LEFT,
  },
  textArea: {
    height: 150,
    // justifyContent: "flex-start"
  },
  error:{
    color:theme.COLORS.ERROR
  }
});