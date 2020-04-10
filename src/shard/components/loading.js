import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

export default Loading = ({loading}) => {
    console.log(loading);
    
return (
    <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={{color: 'rgb(179, 0, 179)'}}
        color={'rgb(179, 0, 179)'}
        overlayColor={'rgba(0, 0, 0,0.40)'}
        // animation={'slide'}
      />
)
} 
    