import React, { useState } from 'react';
import {
  View,Text
} from 'react-native';

// Galio components
import {
  Block,
} from 'galio-framework';
import ImageView from 'react-native-image-view';
const images = [
  {
      source: {
          uri: 'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
      },
      title: 'Paris',
      width: 806,
      height: 720,
  },
  {
    source: {
        uri: 'http://knittingisawesome.com/wp-content/uploads/2012/12/cat-wearing-a-reindeer-hat1.jpg',
    },
    title: 'Paris',
    width: 806,
    height: 720,
},
];

class  ImageViewers extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      visible:true
    }
  }
  // console.log(visible);
render() {
  return (
   <Block safe flex>
     <ImageView
     images={images}
     imageIndex={0}
     isVisible={this.props.visible}
     renderFooter={(currentImage) => (<View><Text>My footer</Text></View>)}
     onClose={() => this.props.closeLightbox()}
 />
   </Block>
 );
}
} 
export default ImageViewers;