/*
 * @Description:
 * @version:
 * @Company: jinchangxiao
 * @Author: 董荣
 * @Date: 2023-11-06 15:00:20
 */
import {Text, ScrollView, Button, Alert, StyleSheet} from 'react-native';

const MyInfo = ({navigation}: {navigation: any}) => {
  const onPressLearnMore = () => {
    console.log(navigation);
  };
  return (
    <ScrollView style={styles.container}>
      <Text>myinfo</Text>
      <Text>myinfo</Text>
      <Text>myinfo</Text>
      <Text>myinfo</Text>
      <Text>myinfo</Text>
      <Text>myinfo</Text>
      <Text>myinfo</Text>
      <Text>myinfo</Text>
      <Text>myinfo</Text>
      <Button
        onPress={() => Alert.alert('Simple Button pressed')}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: '100%',
    backgroundColor: 'yellow',
  },
});
// MyInfo.navigationOptions = {
//   tabBarLabel: 'Home',
//   // tabBarIcon: ({tintColor}) => <Icon name="home" size={24} color={tintColor} />,
// };
export default MyInfo;
