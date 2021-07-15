import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useNavigation, useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StartScreen, LoginScreen, RegisterScreen, Dashboard, JokeList } from '../screens'
import { theme } from '../core/theme'

const Tabs = createBottomTabNavigator();

const NavigationTabs = (props) => {

    const navigation = useNavigation();
    const route = useRoute();
    console.log('NavigationTabs navigation: ', JSON.stringify(props))
    console.log('NavigationTabs: ', route);

    let detailResult = route.params;

    useEffect(() => {
    }, []);

    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({

                tabBarIcon: ({ COLORS }) => {
                    let iconName = 'like';

                    // if (route.name === 'Movies') {
                    //     iconName = 'film';
                    // } else if (route.name === 'TV Shows') {
                    //     iconName = 'like';
                    // } else if (route.name === 'Search') {
                    //     iconName = 'search';
                    // }

                    return <Icon name={iconName} color={COLORS} size={20} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: theme.colors.thirdary,
                inactiveTintColor: 'white',
                tabStyle: { backgroundColor: theme.colors.secondary },
                borderTopWidth: 0,
                headerShown: true
            }}
            initialRouteName={'Dashboard'}
        >
            <Tabs.Screen name="StartScreen" component={StartScreen}></Tabs.Screen>
            <Tabs.Screen name="Dashboard" component={Dashboard}></Tabs.Screen>
            {/* <Tabs.Screen name="Favorites" component={FavoritesScreen}></Tabs.Screen> */}
        </Tabs.Navigator>
    );
};

export default NavigationTabs;
