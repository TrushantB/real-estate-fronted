import React, { useState } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { theme } from 'galio-framework';
export default Loading = ({loading}) => {
  console.log(loading);
  
    const [loadingFlag, setloadingFlag]=useState(false);

    // if(loading) {
    //    let timeout= setTimeout(() => {
    //         setloadingFlag(false) ;
    //       }, 10000);
    //  }
    //   else {
    //     setloadingFlag(true) ;
    //  }
    
 
return (
    <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={{color: theme.COLORS.INFO}}
        color={theme.COLORS.INFO}
        overlayColor={'rgba(0, 0, 0,0.40)'}
        // animation={'slide'}
      />
)
} 
    