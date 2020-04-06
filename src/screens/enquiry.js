import React from 'react';
import {
  Alert,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Picker
} from 'react-native';
// galio component
import {
  Block, Button, Input, Text, NavBar,Icon
} from 'galio-framework';
import theme from '../theme';
import EnquiryService from '../shard/services/enquiry';
let enquiryService=new EnquiryService();
const { width } = Dimensions.get('window');

const MARGIN_LEFT = '5%';
// const SOCIAL_ICON_SIZE = theme.SIZES.BASE * 1.5;
const SOCIAL_BTN_SIZE = theme.SIZES.BASE * 3;

const cards = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?w=840&q=300',
    avatar: 'https://i.picsum.photos/id/164/200/200.jpg',
    title: 'Aroma Towers',
    caption: '48 minutes ago',
    location: 'Kothrud,Nal stop',
    price:'10,00,000',
    message:'2 BHK startting from $99999',
    noOfMessages:2
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1503631285924-e1544dce8b28?&w=1200&h=1600&fit=crop&crop=entropy&q=300',
    avatar: 'https://i.picsum.photos/id/1040/200/200.jpg',
    title: 'Trump Towers',
    caption: '80 minutes ago',
    location: 'Los Angeles, CA',
    price:'10,00,000',
    message:'3 BHK is going to over',
    noOfMessages:3
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300',
    avatar: 'https://i.picsum.photos/id/1029/200/200.jpg',
    title: 'Gririkund',
    caption: '138 minutes ago',
    location: 'Deccan,J.m.road',
    price:'20,00,000',
    message:'New construction in CA',
    noOfMessages:6
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1490049350474-498de43bc885?&w=1600&h=900&fit=crop&crop=entropy&q=300',
    avatar: 'https://i.picsum.photos/id/1076/200/200.jpg',
    title: 'WOW Fitness',
    caption: '138 minutes ago',
    location: 'Los Angeles, CA',
    price:'30,00,000',
    message:'2 BHK and 3 BHK sold all ',
    noOfMessages:3
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1493612216891-65cbf3b5c420?&w=1500&h=900&fit=crop&crop=entropy&q=300',
    avatar: 'https://i.picsum.photos/id/195/200/200.jpg',
    title: 'Christopher Moon',
    caption: '138 minutes ago',
    price:'40,00,000',
    message:'2 BHK startting from $99999',
    noOfMessages:2
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1506321806993-0e39f809ae59?&w=1500&h=1900&fit=crop&crop=entropy&q=300',
    avatar: 'https://i.picsum.photos/id/195/300/300.jpg',
    title: 'Gharte',
    caption: '58 minutes ago',
    price:'50,00,000',
    message:'2 BHK startting from $99999',
    noOfMessages:5
  },
];

const Header = ({ title }) => (
  <Block left style={styles.header}>
    <Text h3></Text>
  </Block>
);
export default class Enquiry extends React.Component {
  state={
    selectedSite:'',
    name:'',
    email:'',
    contact:'',
    message:'',
    siteId:''
  }
  handleChange(name,value) {
    this.setState({[name]:value})
  }
  submit() {
    let { name,contact,email,message } = this.state;
    let item = {
      "name": name,
      "contact":contact,
      "email": email,
      "feedback": message
    }
    console.log(item);
    
    enquiryService.postnquiryData(item).then((response) => {
      console.log(response);
      this.setState({name:'',email:'',contact:'',message:''})
    })
    
  }
  render() {
    const { navigation } = this.props;
    let { name,contact,email,message } = this.state;

    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <NavBar
          title="Enquiry"
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
          <Text h3>How can we help you?</Text>
        </Block>
        <ScrollView >
          <KeyboardAvoidingView
           behavior="height"
           keyboardVerticalOffset={5}>
          <Block flex middle>
          <Picker
              selectedValue={this.state.selectedSite}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => this.setState({selectedSite:itemValue})}
            >
              <Picker.Item label="Select site" value="" />
              {
                cards.map((item,index) => {
                  return <Picker.Item label={item.title} value={item.title}  key={index}/>
                })
              }
            </Picker>
              <Input
                rounded
                placeholder="Your name"
                value={name}
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
              onChangeText={text => this.handleChange('name', text)}
              />
              <Input
                rounded
                value={email}
                placeholder="Email"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
              onChangeText={text => this.handleChange('email', text)}
              />
                <Input
                rounded
                placeholder="Contact number"
                value={contact}
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
              onChangeText={text => this.handleChange('contact', text)}
              />
              <Input
                rounded
                placeholder="Write your message here"
                value={message}
                autoCapitalize="none"
                style={{ width: width * 0.9 , height: 150}}
              onChangeText={text => this.handleChange('message', text)}
              />
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
  picker: {
    height: 50,
     width: '90%' ,
    //  BORDER
  }
});