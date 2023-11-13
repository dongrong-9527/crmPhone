/*
 * @Description: 
 * @version: 
 * @Company: jinchangxiao
 * @Author: 董荣
 * @Date: 2023-10-26 16:40:42
 */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',



          // '@/action': './src/action',
          // '@/api': './src/api',
          // '@/asset': './src/asset',
          // '@/components': './src/components',
          // '@/config': './src/config',
          // '@/models': './src/models',
          // '@/navigator': './src/navigator',
          // '@/pages': './src/pages',
          // '@/stores': './src/stores',
        },
      },
    ],
  ]
};
