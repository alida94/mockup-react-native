/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NonAuthNav, navigationRef} from '@route';
import {NavigationContainer} from '@react-navigation/native';

export default () => {

  return (
    <NavigationContainer ref={navigationRef}>
      <NonAuthNav />
    </NavigationContainer>
  );
};
