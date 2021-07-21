import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/joke-categories';
import Button from './Button'

const renderGridItem = itemData => {
  return (
    <Button style={{}} >{itemData.title}</Button>
  );
};

const CategoriesList = props => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(CATEGORIES)
    // console.log('data: ', data);
    // console.log('single: ', single);
    // console.log('twopart: ', twopart);
  }, [])

  console.log('categories: ', categories);

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
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
