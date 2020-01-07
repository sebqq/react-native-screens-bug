import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

const getIconName = routeName => {
  if (routeName === 'First') {
    return 'home';
  } else if (routeName === 'Second') {
    return 'bookmark';
  }
  return '';
};

const TapBarIcon = ({navigation, horizontal, tintColor}) => (
  <Icon
    name={getIconName(navigation.state.routeName)}
    size={horizontal ? 24 : 22}
    color={tintColor}
    type="feather"
  />
);

export default TapBarIcon;
