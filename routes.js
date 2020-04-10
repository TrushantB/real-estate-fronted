import React from 'react';
import PropTypes from 'prop-types';
import {
  Image, StyleSheet, ScrollView, SafeAreaView, Platform,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerItems,
} from 'react-navigation';

// import email from 'react-native-email'

import { Block, Icon, Text,Accordion } from 'galio-framework';
// screens
import Login from './src/screens/Login';
import Register from './src/screens/Register';
// import OngoingSite from './src/screens/ongoing-sites';
// import Notification from './src/screens/notification';
import theme from './src/theme';
// import Matrix from './src/screens/matrix';
import Contact from './src/screens/contact';
import Dashboard from './src/screens/dashboard';
import Enquiry from './src/screens/enquiry';
import Email from './src/screens/email';
import SMS from './src/screens/sms';
import OngoingSite from './src/screens/ongoing-sites/index';
import Notification from './src/screens/notification/index';
const GalioDrawer = props => (
  <SafeAreaView style={styles.drawer} forceInset={{ top: 'always', horizontal: 'never' }}>
    <Block space="between" row style={styles.header}>
      <Block flex={0.3}><Image source={{ uri: 'http://i.pravatar.cc/100' }} style={styles.avatar} /></Block>
      <Block flex style={styles.middle}>
        <Text size={theme.SIZES.FONT * 0.875}>Real Estate Builder</Text>
        <Text muted size={theme.SIZES.FONT * 0.875}>@iVisionWebStudio</Text>
      </Block>
    </Block>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);


const styles = StyleSheet.create({
  drawer: {
    flex: 1,
  },
  header: {
    paddingHorizontal: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 0.6875,
    paddingBottom: theme.SIZES.BASE * 1.6875,
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 0.5,
    marginTop: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : null,
  },
  avatar: {
    width: theme.SIZES.BASE * 2.5,
    height: theme.SIZES.BASE * 2.5,
    borderRadius: theme.SIZES.BASE * 1.25,
  },
  middle: {
    justifyContent: 'center',
  },
});

const MenuIcon = ({ name, family, focused }) => (
  <Icon
    name={name}
    family={family}
    size={theme.SIZES.FONT}
    color={focused ? theme.COLORS.WHITE : '#5D5D5D'}
  />
);

MenuIcon.defaultProps = {
  name: null,
  family: null,
  focused: false,
};

MenuIcon.propTypes = {
  name: PropTypes.string,
  family: PropTypes.string,
  focused: PropTypes.bool,
};

const screens = {
  OngoingSite: {
    screen: OngoingSite,
    navigationOptions: {
      drawerLabel: 'Ongoing Sites',
      
      drawerIcon: props => <MenuIcon name="hourglass-half" family="font-awesome" focused={props.focused} />,
      
    },
  },
  Enquiry: {
    screen: Enquiry,
    navigationOptions: {
      drawerLabel: 'Enquiry',
      drawerIcon: props => <MenuIcon name="phone" family="font-awesome" focused={props.focused} />,
    },
  },
  Notification: {
    screen: Notification,
    navigationOptions: {
      drawerLabel: 'Notification',
      drawerIcon: props => <MenuIcon name="bell" family="font-awesome" focused={props.focused} />,
    },
  },
  Contact: {
    screen: Contact,
    navigationOptions: {
      drawerLabel: 'Contact',
      drawerIcon: props => <MenuIcon name="address-book-o" family="font-awesome" focused={props.focused} />,
    },
  },
  Email: {
    screen: Email,
    navigationOptions: {
      drawerLabel: 'Email',
      drawerIcon: props => <MenuIcon name="envelope" family="font-awesome" focused={props.focused} />,
    },
    
  },
  SMS: {
    screen: SMS,
    navigationOptions: {
      drawerLabel: 'SMS',
      drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
    },
    
  },
  Login: {
    screen: Login,
    navigationOptions: {
      drawerLabel: 'Login',
      drawerIcon: props => <MenuIcon name="user" family="font-awesome" focused={props.focused} />,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      drawerLabel: 'Register',
      drawerIcon: props => <MenuIcon name="user-plus" family="font-awesome" focused={props.focused} />,
    },
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      drawerLabel: 'Dashboard',
      drawerIcon: props => <MenuIcon name="area-chart" family="font-awesome" focused={props.focused} />,
    },
  },
  
  // OrderConfirmed: {
    //   screen: OrderConfirmed,
    //   navigationOptions: {
      //     drawerLabel: 'Order Confirmed',
      //     drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
      //   },
      // },
      // Presentation: {
        //   screen: Presentation,
        //   navigationOptions: {
          //     drawerLabel: 'Presentation Screen',
          //     drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
          //   },
          // },
          
          // Registerv2: {
  //   screen: Registerv2,
  //   navigationOptions: {
  //     drawerLabel: 'Register Screen v2',
  //     drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
  //   },
  // },
  // Grid: {
  //   screen: Grid,
  //   navigationOptions: {
  //     drawerLabel: 'Grid Screen',
  //     drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
  //   },
  // },
};

const options = {
  contentComponent: props => <GalioDrawer {...props} />,
  contentOptions: {
    labelStyle: {
      fontWeight: '500',
      color: theme.COLORS.GREY,
      fontSize: theme.SIZES.FONT * 0.875,
      marginLeft: theme.SIZES.BASE * 0.75,
    },
    activeLabelStyle: {
      color: theme.COLORS.WHITE,
    },
    activeBackgroundColor: theme.COLORS.THEME,
    itemsContainerStyle: {
      paddingVertical: 0,
    },
    iconContainerStyle: {
      marginHorizontal: 0,
      marginLeft: theme.SIZES.BASE * 1.65,
      // marginRight: theme.SIZES.BASE * 0.76,
    },
  },
};

const BuilderApp = createDrawerNavigator(screens, options,);

export default BuilderApp;
