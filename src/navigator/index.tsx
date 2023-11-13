/*
 * @Description:
 * @version:
 * @Company: jinchangxiao
 * @Author: 董荣
 * @Date: 2023-11-06 14:06:43
 */
// navigator 导航器

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  HeaderStyleInterpolators,
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import Home from '@/pages/Home/home';
import MyInfo from '@/pages/MyInfo/myInfo';
import Detail from '@/pages/Detail/Detail';
export type RootStackParamList = {
  Home: undefined;
  MyInfo: undefined;
  Detail: {
    id: Number;
  };
};
export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();
function navigationIndex(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
        initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{headerTitle: '首页'}}
          component={Home}
        />
        <Stack.Screen
          options={{headerTitle: '我的'}}
          name="MyInfo"
          component={MyInfo}
        />
        <Stack.Screen
          name="Detail"
          options={{headerTitle: '详情页'}}
          component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    height: 40,
    backgroundColor: 'red',
  },
});

export default navigationIndex;
