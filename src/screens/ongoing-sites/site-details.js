import React from 'react';
import PropTypes from 'prop-types';
import {
  Image, StyleSheet, ScrollView
} from 'react-native';

import Constants from 'expo-constants';

// Galio components
import {
  Button, Block, Text, Icon,
} from 'galio-framework';
import theme from '../../theme';

const Author = props => (
  <Block row shadow middle space="between" style={styles.author}>
    <Block flex={0.25}>
      <Image source={{ uri: props.avatar }} style={styles.avatar} />
    </Block>
    <Block flex={0.7} style={styles.middle}>
      <Text style={{ fontWeight: '500' }}>{props.title}</Text>
      <Text p muted>{props.caption}</Text>
    </Block>
    <Block flex={0.5} row middle space="around">
      <Block row middle>
        <Icon name="eye" family="material-community" color={theme.COLORS.MUTED} size={theme.SIZES.FONT * 0.8} />
        <Text size={theme.SIZES.FONT * 0.7} p muted style={{ marginLeft: theme.SIZES.FONT * 0.25 }}>25.6k</Text>
      </Block>
      <Block row middle>
        <Icon name="heart-outline" family="material-community" color={theme.COLORS.MUTED} size={theme.SIZES.FONT * 0.8} />
        <Text size={theme.SIZES.FONT * 0.7} p muted style={{ marginLeft: theme.SIZES.FONT * 0.25 }}>936</Text>
      </Block>
    </Block>
  </Block>
);

Author.defaultProps = {
  author: null,
  title: null,
  caption: null,
};

Author.propsTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  caption: PropTypes.string,
};


const OngoingSiteDetails = props =>{
  const { state } = props.navigation;
console.log(state.params.user);
 return (
  <Block safe flex>
    <ScrollView style={{ flex: 1 }}>
      <Block flex style={styles.news}>
        <Image
          source={{ uri: state.params.user.image}}
          style={styles.articleImage}
        />
        <Block style={styles.article}>
          <Text h4>
            {state.params.user.sitename}
          </Text>
          <Text muted style={[styles.text, { marginVertical: theme.SIZES.BASE * 1.3 }]}>
          <Icon name="map-marker"family="font-awesome" size={theme.SIZES.FONT}  style={{fontWeight: 'bold'}}/>
            { " " + state.params.user.address}
          </Text>
          <Text style={styles.text}>
            Amenities:
          </Text>
          <Text muted style={styles.text}>
          {state.params.user.amenities}
          </Text>
          <Text style={styles.text}>
           Features Plans:
          </Text>
          <Text muted style={styles.text}>
          {state.params.user.features}
          </Text> 
          <Text style={styles.text}>
          Available Banks Loans:
          </Text>
          <Text muted style={styles.text}>
          {state.params.user.BanksLoanProvidedBy}
          </Text> 
          <Text style={styles.text}>
          Get In Touch:
          </Text>
          <Text muted style={styles.text}>
           For more information about {state.params.user.sitename}, to contact with Mr/Ms: {state.params.user.supervisorName} on  {state.params.user.supervisorContact1} Or {state.params.user.supervisorContact2}.
          </Text>
        </Block>
      </Block>
    </ScrollView>
  </Block>
);

} 

const styles = StyleSheet.create({
  article: {
    marginTop: theme.SIZES.BASE * 1.75,
  },
  articleImage: {
    borderRadius: theme.SIZES.BASE / 2,
    height: theme.SIZES.BASE * 13.75,
  },
  news: {
    marginTop: theme.SIZES.BASE / 2,
    paddingBottom: theme.SIZES.BASE / 2,
    justifyContent: 'flex-start',
    paddingHorizontal: theme.SIZES.BASE,
  },
  button: {
    width: theme.SIZES.BASE * 2,
    borderColor: 'transparent',
  },
  author: {
    position: 'absolute',
    right: theme.SIZES.BASE,
    left: theme.SIZES.BASE,
    bottom: Constants.statusBarHeight,
    backgroundColor: theme.COLORS.WHITE,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: theme.SIZES.BASE / 2,
  },
  text: {
    fontWeight: '400',
    fontSize: theme.SIZES.FONT * 0.875,
    lineHeight: theme.SIZES.BASE * 1.25,
    letterSpacing: 0.3,
    marginBottom: theme.SIZES.BASE,
  },
});

export default OngoingSiteDetails;