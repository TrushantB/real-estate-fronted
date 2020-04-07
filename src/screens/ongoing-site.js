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
import OngoingService from '../shard/services/ongoing-site';
let ongoingService=new OngoingService();
const { width } = Dimensions.get('screen');
const BASE_SIZE = theme.SIZES.BASE;
export default class OngoingSite extends React.Component {
  state={
    dataSource:[]
  }
  componentDidMount() {
    ongoingService.getOngoingSiteData().then((response) => {
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
            { this.state.dataSource.map((card, id) => (
              <Card
                key={`card-${id}`}
                flex
                borderless
                shadowColor={theme.COLORS.BLACK}
                titleColor={card.full ? theme.COLORS.WHITE : null}
                style={styles.card}
                title={card.sitename}
                caption={`${this.calculateTime(card.createdDt)} minutes ago.`}
                avatar={`http://i.pravatar.cc/100?${id + 5}`}
                image={`https://i.picsum.photos/id/1076/400/400.jpg`}
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
                    <Icon name="map-marker"family="font-awesome" size={theme.SIZES.FONT}  style={{fontWeight: 'bold',marginLeft: 15,marginBottom: 10}}/>
                    <Text muted> {card.address}</Text>
                 </Block>
                  <Block row>
                    <Text style={{fontWeight: 'bold',marginLeft: 15,marginBottom: 10}}>Site Type: </Text>
                    <Text size={BASE_SIZE * 0.875} muted>{card.SiteType}</Text>
                  </Block>

                  <Block row>
                    <Text style={{fontWeight: 'bold',marginLeft: 15,marginBottom: 10}}>Contact: </Text>
                    <Text size={BASE_SIZE * 0.875} muted>{card.supervisorContact1} / {card.supervisorContact2}</Text>
                  </Block>

                  <Block row>
                  <Text style={{fontWeight: 'bold',marginLeft: 15,marginBottom: 10}}>Amenities: </Text>
                  <Text size={BASE_SIZE * 0.875} muted>{card.amenities}</Text>
                  </Block>

                  <Block row>
                  <Text style={{fontWeight: 'bold',marginLeft: 15,marginBottom: 10}}>Available Loans: </Text>
                  <Text size={BASE_SIZE * 0.875} muted>{card.BanksLoanProvidedBy}</Text>
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
