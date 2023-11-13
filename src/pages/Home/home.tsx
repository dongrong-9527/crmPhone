/*
 * @Description:
 * @version:
 * @Company: jinchangxiao
 * @Author: 董荣
 * @Date: 2023-11-06 15:00:20
 */
import {RootStackNavigation} from '@/navigator';
import React from 'react';
import {StyleSheet, Text, ScrollView, Button} from 'react-native';

interface IProps {
  navigation: RootStackNavigation;
}
const Home = ({navigation}: IProps): JSX.Element => {
  const onPress = () => {
    navigation.navigate('Detail', {id: 100});
  };
  return (
    <ScrollView style={styles.container}>
      <Text>home</Text>
      <Text>home</Text>
      <Button onPress={onPress} title="点击" color="#841584" />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
export default Home;
