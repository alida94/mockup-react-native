import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '@screens/home';

export const navigationRef = React.createRef();
export const navigate = (r, d) => navigationRef?.current?.navigate(r, d);
export const goBack = () => navigationRef?.current?.goBack();

const { Navigator, Screen } = createStackNavigator();
const options = {headerShown: false};

export const NonAuthNav = () => (
  <Navigator
    // headerMode="none"
    children={[
      { name: 'Home', component: Home },
    ].map(s => <Screen key={s.name} name={s.name} component={s.component} options={options} />)}
  />
);
