import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

export const FirstScreen = ({navigation}) => {
  return (
    <View style={[styles.container, {backgroundColor: 'red'}]}>
      <Text>This is first screen</Text>
      <Button
        backgroundColor="blue"
        onPress={() => navigation.navigate('screen2')}
        title="Navigate to Second Screen"
      />
    </View>
  );
};

export const SecondScreen = () => {
  return (
    <View style={[styles.container, {backgroundColor: 'green'}]}>
      <Text>This is second screen</Text>
    </View>
  );
};

export const ThirdScreen = () => {
  return (
    <View style={[styles.container, {backgroundColor: 'yellow'}]}>
      <Text>This is third screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
