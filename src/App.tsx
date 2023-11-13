/*
 * @Description:
 * @version:
 * @Company: jinchangxiao
 * @Author: 董荣
 * @Date: 2023-11-01 16:36:55
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import NavigationIndex from '@/navigator/index';

import Config from 'react-native-config';
// Config.API_URL  环境变量
function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <NavigationIndex></NavigationIndex>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default App;
