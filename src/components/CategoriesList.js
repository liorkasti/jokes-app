import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Button from './Button'

// const renderGridItem = itemData => {
//   return (
//       <Button style={{}} >{itemData.item.title}</Button>
//   );
// };

const renderGridItem = itemData => {
  const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id);
  return (
    <MealItem
      title={itemData.item.title}
      image={itemData.item.imageUrl}
      duration={itemData.item.duration}
      complexity={itemData.item.complexity}
      affordability={itemData.item.affordability}
      onSelectMeal={() => {
        props.navigation.navigate({
          routeName: 'MealDetail',
          params: {
            mealId: itemData.item.id,
            mealTitle: itemData.item.title,
            isFav: isFavorite
          }
        });
      }}
    />
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
