import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {Store} from './src/Store/Store';
import Nav from './src/Components/Nav';
import AnimatedSplash from 'react-native-animated-splash-screen';
import {navigationRef} from './src/Utils/HelperNav';
import {StatusBar} from 'react-native';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  //lifecycle for animated splash screen
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  return (
    <Provider store={Store}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar hidden={isLoaded ? false : true} />
        <AnimatedSplash
          logoWidht={240}
          logoHeight={240}
          isLoaded={isLoaded}
          backgroundColor={'white'}
          logoImage={require('./src/Assets/fastfood.png')}>
          <Nav />
        </AnimatedSplash>
      </NavigationContainer>
    </Provider>
  );
}
