import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadStoryScreen from './screens/SelectionScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';
import PussInBoots from './Stories/PussInBoots';
import LoginScreen from './screens/LoginScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <TabContainer/>;
    </View>
  );
}



const TabNavigator = createBottomTabNavigator(
  {
    //'Home':{screen: HomeScreen},
    'Write A Story': { screen: WriteStoryScreen },
    'Read A Story': { screen: ReadStoryScreen },  
  },  
  

  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        console.log(routeName);
        if (routeName === 'Read A Story') {
          return (
            <Image
              source={require('./assets/read.png')}
              style={{ width: 30, height: 30 }}
            />
          );
        } else if (routeName === 'Write A Story') {
          return (
            <Image
              source={require('./assets/write.png')}
              style={{ width: 30, height: 30 }}
            />
          );
        }           
      },
    }),
  }
);

const SwitchNavigator = createSwitchNavigator({
  LoginScreen: {screen:LoginScreen},
  TabNavigator: {screen: TabNavigator},
})


const TabContainer = createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
