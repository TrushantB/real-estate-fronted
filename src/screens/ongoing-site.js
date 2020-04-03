import React from 'react';
import {
  ScrollView, StyleSheet, Dimensions, Platform, TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BaseService from '../shard/services/base-service';
// Galio components
import {
  Card, Block, NavBar, Icon,Text
} from 'galio-framework';
import theme from '../theme';
const baseService=new BaseService();
const { width } = Dimensions.get('screen');
const BASE_SIZE = theme.SIZES.BASE;

const cards = [
  {
    id: 1,
    image: 'https://i.picsum.photos/id/195/400/400.jpg',
    avatar: 'http://i.pravatar.cc/100',
    title: 'Aroma Towers',
    caption: '48 minutes ago',
    location: 'Kothrud, Kare Nagar',
    price:'10,00,000',
    rating:4,
    remaining:303,
    sold:201
  },
  {
    id: 2,
    image: 'https://i.picsum.photos/id/1076/300/300.jpg',
    avatar: 'http://i.pravatar.cc/100',
    title: 'Trump Towers',
    caption: '80 minutes ago',
    location: 'Los Angeles, CA',
    price:'10,00,000',
    rating:5,
    remaining:37,
    sold:201
  },
  {
    id: 3,
    image: 'https://i.picsum.photos/id/1075/300/300.jpg',
    avatar: 'http://i.pravatar.cc/100',
    title: 'Gririkund',
    caption: '138 minutes ago',
    location: 'Deccan,J.m.road',
    price:'20,00,000',
    rating:4,
    remaining:327,
    sold:301
    // padded: true,
  },
  {
    id: 4,
    image: 'https://i.picsum.photos/id/1081/400/400.jpg',
    avatar: 'http://i.pravatar.cc/100',
    title: 'WOW Fitness',
    caption: '138 minutes ago',
    location: 'Los Angeles, CA',
    price:'30,00,000',
    rating:4,
    remaining:37,
    sold:201
    // padded: true,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1493612216891-65cbf3b5c420?&w=1500&h=900&fit=crop&crop=entropy&q=300',
    avatar: 'http://i.pravatar.cc/100',
    title: 'Christopher Moon',
    caption: '138 minutes ago',
    price:'40,00,000',
    rating:4.3,
    remaining:37,
    sold:201
    // full: true,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1506321806993-0e39f809ae59?&w=1500&h=1900&fit=crop&crop=entropy&q=300',
    avatar: 'http://i.pravatar.cc/100',
    title: 'Gharte',
    caption: '58 minutes ago',
    price:'50,00,000',
    rating:3,
    remaining:37,
    sold:201
    // full: true,
  },
];

export default class OngoingSite extends React.Component {

  render() {
    // baseService.getData().then((response) => {
    //   console.log(response.data);
      
    // });
    const { navigation } = this.props;
    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <NavBar
          title="Ongoing Sites"
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
                key={`card-${card.image}`}
                flex
                borderless
                shadowColor={theme.COLORS.BLACK}
                titleColor={card.full ? theme.COLORS.WHITE : null}
                style={styles.card}
                title={card.title}
                caption={card.caption}
                location={card.location}
                avatar={`${card.avatar}?${id + 5}`}
                image={card.image}
                imageStyle={[card.padded ? styles.rounded : null]}
                imageBlockStyle={[
                  card.padded ? { padding: theme.SIZES.BASE / 2 } : null,
                  card.full ? null : styles.noRadius,
                ]}
                footerStyle={card.full ? styles.full : null}
              >
                {card.full ? <LinearGradient colors={['transparent', 'rgba(0,0,0, 0.8)']} style={styles.gradient} /> : null}
                <Block flex>
                  <Block row>
                  <Text style={{fontWeight: 'bold',marginLeft: 15,marginBottom: 15}}>Price:</Text>
                  <Text size={BASE_SIZE * 0.875} muted>{card.price}</Text>

                  <Text style={{fontWeight: 'bold',marginLeft: 15}}>Rating:</Text>
                  <Text size={BASE_SIZE * 0.875} muted>{card.rating}</Text>
                  </Block>
                  <Block row>
                  <Text style={{fontWeight: 'bold',marginLeft: 15,marginBottom: 15}}>Sold:</Text>
                  <Text size={BASE_SIZE * 0.875} muted>{card.sold} Flats</Text>

                  <Text style={{fontWeight: 'bold',marginLeft: 15}}>Remaining:</Text>
                  <Text size={BASE_SIZE * 0.875} muted>{card.remaining} Flats</Text>
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
