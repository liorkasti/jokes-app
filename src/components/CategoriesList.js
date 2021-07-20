import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/joke-categories';
import Button from './Button'

const renderGridItem = itemData => {
  return (
      <Button style={{}} >{itemData.title}</Button>
  );
};

const CategoriesList = props => {
  console.log('log CATEGORIES: ', CATEGORIES)
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES[1]}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 50
  }
});

export default CategoriesList;
