/*
 * @Description:
 * @version:
 * @Company: jinchangxiao
 * @Author: 董荣
 * @Date: 2023-11-10 15:41:44
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RootStackNavigation, RootStackParamList} from '@/navigator';
import {RouteProp} from '@react-navigation/native';

interface IProps {
  route: RouteProp<RootStackParamList, 'Detail'>;
}
const Detail = (props: IProps): JSX.Element => {
  const {route} = props;
  return (
    <View style={sytle.boxcontainer}>
      <Text>详情页</Text>
      <Text>{String(route.params.id)}</Text>
    </View>
  );
};
const sytle = StyleSheet.create({
  boxcontainer: {
    flex: 1,
  },
});
export default Detail;
