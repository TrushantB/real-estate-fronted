import React from 'react';
import {
  ScrollView, StyleSheet, Dimensions, Platform, TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Galio components
import {
  Card, Block, NavBar, Icon,Text
} from 'galio-framework';
import theme from '../../theme';
import NotificationService from '../../src/shard/services/notification';
let notificationService=new NotificationService();
const { width } = Dimensions.get('screen');
const BASE_SIZE = theme.SIZES.BASE;


export default class Notification extends React.Component {
  state={
    dataSource:[]
  }

  componentDidMount() {
    notificationService.getNotificationData().then((response) => {
       this.setState({dataSource:response.data})
    })
  }

  calculateTime(date) {
    const date1 = new Date(date);
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60)); 
    return diffDays;
  }

  render() {
    const { navigation } = this.props;
    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <NavBar
          title="Notifications"
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
        <ScrollView contentContainerStyle={styles.cards}>
          <Block flex space="between">
            {this.state.dataSource.map((card, id) => (
              <Card
                key={`notification-${id}`}
                flex
                borderless
                shadowColor={theme.COLORS.BLACK}
                titleColor={card.full ? theme.COLORS.WHITE : null}
                style={styles.card}
                title={card.notificationName}
                caption={`${this.calculateTime(card.createdDt)} minutes ago.`}
                location={card.location}
                avatar={`http://i.pravatar.cc/100?${id + 5}`}
                // image={card.image}
                // imageStyle={[card.padded ? styles.rounded : null]}
                // imageBlockStyle={[
                //   card.padded ? { padding: theme.SIZES.BASE / 2 } : null,
                //   card.full ? null : styles.noRadius,
                // ]}
                // footerStyle={card.full ? styles.full : null}
              >
                  <Block flex>
                  <Block row>
                    <Text style={{fontWeight: 'bold',marginLeft: 15,marginBottom: 15}} >{card.notificationDetails}</Text>
                  </Block>
                  <Block row>
                    <Text style={{fontWeight: 'bold',marginLeft: 15,marginBottom: 15}} muted>{card.noOfMessages}2 New message</Text>
                  </Block>
                  </Block>
              </Card>
            ))}
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  cards: {
    width,
    backgroundColor: theme.COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  card: {
    backgroundColor: theme.COLORS.WHITE,
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
    elevation: theme.SIZES.BASE / 2,
  },
  full: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  noRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  rounded: {
    borderRadius: theme.SIZES.BASE * 0.1875,
  },
  gradient: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    position: 'absolute',
    overflow: 'hidden',
    borderBottomRightRadius: theme.SIZES.BASE * 0.5,
    borderBottomLeftRadius: theme.SIZES.BASE * 0.5,
  },
});
