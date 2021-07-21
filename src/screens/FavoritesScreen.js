import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';

const SupportScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#1f65ff' barStyle="light-content" />

      <Text>Support Screen</Text>
      <Button
        title="Click Here"
        onPress={() => alert('Button Clicked!')}
      />
    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
