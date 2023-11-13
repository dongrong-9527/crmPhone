/*
 * @Description: 
 * @version: 
 * @Company: jinchangxiao
 * @Author: 董荣
 * @Date: 2023-10-26 16:40:42
 */
package com.crmphones;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
import android.os.Bundle;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "crmphones";
  }
  // react-native-screens软件包需要一个额外的配置步骤才能在 Android 设备上正常工作。编辑MainActivity.java位于android/app/src/main/java/<your package name>/MainActivity.java.
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled());
  }
}
