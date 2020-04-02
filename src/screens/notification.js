import React from 'react';
import {
  ScrollView, StyleSheet, Dimensions, Platform, TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Galio components
import {
  Card, Block, NavBar, Icon,Text
} from 'galio-framework';
import theme from '../theme';

const { width } = Dimensions.get('screen');
const BASE_SIZE = theme.SIZES.BASE;

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

export default class Notification extends React.Component {
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
            {cards && cards.map((card, id) => (
              <Card
                key={`notification-${id}`}
                flex
                borderless
                shadowColor={theme.COLORS.BLACK}
                titleColor={card.full ? theme.COLORS.WHITE : null}
                style={styles.card}
                title={card.title}
                caption={card.caption}
                location={card.location}
                avatar={`${card.avatar}?${id}`}
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
                    <Text style={{fontWeight: 'bold',marginLeft: 15,marginBottom: 15}} >{card.message}</Text>
                  </Block>
                  <Block row>
                    <Text style={{fontWeight: 'bold',marginLeft: 15,marginBottom: 15}} muted>{card.noOfMessages} New</Text>
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
