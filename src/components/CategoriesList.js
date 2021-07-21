import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Platform } from 'react-native';

import { CATEGORIES } from '../data/joke-categories';
import Button from './Button'

const CategoriesList = props => {

  return (
    <FlatList
    keyExtractor={(item, index) => item.id}
    data={CATEGORIES}
      renderItem={(item) => {
        // console.log(`item: ${item.item.id}`, item);

        return (
          <Button mode="outlined" style={styles.gridItem} >{item.item.title}</Button>
        )
      }}
      numColumns={2}
      style={styles.screen}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '120%',    
  },
  gridItem: {
    flex: 1,
    margin: 4,
    height: 50,
    borderRadius: 10,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    elevation: 5,
  }
});

export default CategoriesList;
