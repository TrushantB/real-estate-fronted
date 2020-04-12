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
import EnquiryService from '../shard/services/enquiry';
import Loading from '../shard/components/loading';
import { environment } from '../../environment/environment';

let enquiryService=new EnquiryService();

const { width } = Dimensions.get('window');

const MARGIN_LEFT = '5%';
const SOCIAL_ICON_SIZE = theme.SIZES.BASE * 1.5;
const SOCIAL_BTN_SIZE = theme.SIZES.BASE * 3;

const Header = ({ title }) => (
  <Block left style={styles.header}>
    <Text h3></Text>
  </Block>
);
export default class Email extends React.Component {
  state={
    to:'',
    from:'',
    body:'',
    subject:'',
    loading:false
  }

  send() {
    let { to,from,subject,body } = this.state;
    
    let item = {
      to:to,
      from:JSON.parse(environment.userDetails).email,
      subject:subject,
      body:body
    }
    this.setState({loading:true});
    enquiryService.postMailData(item).then((response) => {
      this.setState({to:'',subject:'',body:'',loading:false});
      this.props.navigation.navigate("Confirmation")
    }).catch((err) => {console.log(err); this.setState({loading:false})})
  }

  handleChange (name,text)  {
    this.setState({[name]:text})
  }
  render() {
    let { to,from,subject,body } = this.state;
    const { navigation } = this.props;
    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <NavBar
          title="Email"
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
        <ScrollView >
          <KeyboardAvoidingView
           behavior="height"
           keyboardVerticalOffset={5}>
          <Block flex middle>
            <Input
            rounded
            placeholder="To"
            autoCapitalize="none"
            style={{ width: width * 0.9 }}
            value={to}
            onChangeText={text => this.handleChange('to', text)}
            />
            <Input
            rounded
            placeholder="From"
            autoCapitalize="none"
            style={{ width: width * 0.9 }}
            value={JSON.parse(environment.userDetails).email}
            editable={false}
            // onChangeText={text => this.handleChange('from', text)}
            />
            <Input
            rounded
            placeholder="Subject"
            autoCapitalize="none"
            style={{ width: width * 0.9 }}
            value={subject}
            onChangeText={text => this.handleChange('subject', text)}
            />
            <Input
            rounded
            placeholder="Write your message here."
            autoCapitalize="none"
            style={{ width: width * 0.9 , height: 150}}
            value={body}
            onChangeText={text => this.handleChange('body', text)}
            />
            </Block>
            <Block flex center style={{ marginBottom: 20 }}>
            <Button
              shadowless
              style={styles.button}
              round
              color="info"
              onPress={() => this.send()}
            >
              Send
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
  }
});