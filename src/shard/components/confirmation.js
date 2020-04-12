import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity
} from 'react-native';

// galio components
import {
  Text, Button, Block, NavBar, Icon
} from 'galio-framework';
import theme from '../../theme';
import { environment } from '../../../environment/environment';

const { height } = Dimensions.get('window');
const orderConfirmedImage = require('../../../assets/order_confirmed.png');

class Confirmation extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Block safe flex>
        <Block flex center  style={styles.container}>
          <Block center flex={2}>
            <Block center style={{ marginBottom: theme.SIZES.BASE * 2 }}>
              <Image
                source={orderConfirmedImage}
                style={{ marginBottom: theme.SIZES.BASE * 2 }}
              />
              <Text h4 color={theme.COLORS.BLACK}>
                Well done! {JSON.parse(environment.userDetails).name}
              </Text>
            </Block>
            <Text
              color={theme.COLORS.BLACK}
              style={{ marginBottom: theme.SIZES.BASE }}
            >
              {/* <Text
                size={theme.SIZES.FONT * 1.675}
                bold
              >
                #45C23B&nbsp;
              </Text> */}
              <Text >
              You have missing any query then go back other wise go to home page.
              </Text>
            </Text>
            {/* <Text color={theme.COLORS.INFO}>
              Track your order
            </Text> */}
          </Block>
          <Button size="large" color="info" round onPress={() => navigation.navigate("Home")}>
            Go To Home
          </Button>
        </Block>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: theme.SIZES.BASE * 0.3,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
    marginTop: theme.SIZES.BASE ,
    marginBottom: height * 0.1
  }
});

export default Confirmation;