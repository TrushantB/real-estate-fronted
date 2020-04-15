import React, { useState } from 'react';
import {
  Image, StyleSheet, ScrollView,Linking,TouchableOpacity,FlatList,Modal
} from 'react-native';

import Constants from 'expo-constants';
// Galio components
import {
  Button, Block, Text, Icon,
} from 'galio-framework';
import theme from '../../theme';
import ImageViewers from '../../shard/components/image-viewer';

const OngoingSiteDetails = props =>{
  const { state } = props.navigation;
  const [visible , setvisible]  = useState(false);

  function closeLightbox() {
    setvisible(false);
  }
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
          <Block row>
          <Text muted style={[styles.text, { marginVertical: theme.SIZES.BASE * 1.3 }]}>
          <Icon name="map-marker"family="font-awesome" size={theme.SIZES.FONT}  style={{fontWeight: 'bold',color:theme.COLORS.GREY}}/>
            { " " + state.params.user.address}
          </Text>

          <TouchableOpacity  onPress={() => state.params.navigation.navigate("Enquiry",{siteData:{id:state.params.user._id,name:state.params.user.sitename}})}>
          <Text muted style={[styles.text, { marginVertical: theme.SIZES.BASE * 1.3 , marginLeft:30,color:theme.COLORS.INFO}]}>
          <Icon name="envelope"family="font-awesome" size={theme.SIZES.FONT}  style={{fontWeight: 'bold',color:theme.COLORS.GREY}}/>
            Enquiry now
          </Text>
          </TouchableOpacity>
          </Block>
          <Text style={styles.textTopic}>
            Amenities:
          </Text>
          <FlatList
                data = {state.params.user.amenities.split(",")}
                renderItem={  
                    (rowData) => 
                    <Block >
                      <TouchableOpacity onPress={() => setvisible(true)}>
                        <Text muted style={styles.textContent} key={rowData.item} >
                          {`\u2022 ${rowData.item}`} {" "}
                         
                        </Text>
                         <Text  style={styles.textContent,{color:theme.COLORS.INFO,textAlign:'right' , position: 'absolute', top: 7, right: 10 }} >View</Text>
                      </TouchableOpacity>
                      </Block>
                      }  
                      keyExtractor={((item,index) => index.toString())}
            />
          <Text style={styles.textTopic}>
           Features Plans:
          </Text>
          <FlatList
                data = {state.params.user.features.split(",")}
                renderItem={  
                    (rowData) =>  
                        <Text muted style={styles.textContent} key={rowData.item}>{`\u2022 ${rowData.item}`}</Text>
                      }  
                      keyExtractor={((item,index) => index.toString())}
            />
          <Text style={styles.textTopic}>
          Available Banks Loans:
          </Text>
          <FlatList
                data = {state.params.user.BanksLoanProvidedBy.split(",")}
                renderItem={  
                    (rowData) =>  
                        <Text muted style={styles.textContent} key={rowData.item}>{`\u2022 ${rowData.item}`}</Text>
                      }  
                      keyExtractor={((item,index) => index.toString())}
            />
          <Text style={styles.textTopic}>
          Get In Touch:
          </Text>
          <Text muted style={styles.text}>
           For more information about {state.params.user.sitename}, 
           to contact with Mr/Ms: {state.params.user.supervisorName} on 
           <Text onPress={() =>  Linking.openURL(`tel:${state.params.user.supervisorContact1}`)}> {state.params.user.supervisorContact1} </Text>Or
            <Text onPress={() =>  Linking.openURL(`tel:${state.params.user.supervisorContact2}`)}> {state.params.user.supervisorContact2} </Text>.
          </Text>
        </Block>
      </Block>
      <ImageViewers visible={visible} closeLightbox={closeLightbox}/>
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
  
  textContent: {
    fontWeight: '400',
    fontSize: theme.SIZES.FONT * 0.875,
    lineHeight: theme.SIZES.BASE * 1.25,
    letterSpacing: 0.3,
    marginBottom: theme.SIZES.BASE,
    backgroundColor:'hsl(0, 0%, 96%)',
    padding:8
  },

  textTopic:{
    backgroundColor:'hsl(0, 6%, 85%)',
    padding:8,
    fontWeight: '400',
    fontSize: theme.SIZES.FONT * 0.875,
    lineHeight: theme.SIZES.BASE * 1.25,
    letterSpacing: 0.3,
    marginBottom: theme.SIZES.BASE,
},
});

export default OngoingSiteDetails;