/*
 * @Description: 
 * @version: 
 * @Company: jinchangxiao
 * @Author: 董荣
 * @Date: 2023-11-03 10:14:10
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import HomeScreen from './HomeScreen';
// import MessageScreen from './MessageScreen';
// import MyScreen from './MyScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <Tab.Screen name="首页" component={HomeScreen} />
        <Tab.Screen name="消息" component={MessageScreen} />
        <Tab.Screen name="我的" component={MyScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
