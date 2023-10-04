import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screen/Home';
import Settings from './screen/Settings';
import Profile from './screen/Profile';
import Login from './screen/Login';
import Post from './screen/Post';
export default function App({}) {
  const Tab = createBottomTabNavigator();
  const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: 'center',
      }}
      onPress={onPress}>
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: '#e32f45',
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            marginHorizontal: 20,
            backgroundColor: '#fff',
            borderRadius: 15,
            bottom: 10,
            height: 60,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('./assets/house.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#e32f45' : '#748c94',
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#e32f45' : '#748c94',
                    fontSize: 12,
                  }}>
                  HOME
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('./assets/settings.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#e32f45' : '#748c94',
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#e32f45' : '#748c94',
                    fontSize: 12,
                  }}>
                  SETTINGS
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Post"
          component={Post}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={require('./assets/add.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: '#fff',
                }}
              />
            ),
            tabBarButton: props => <CustomTabBarButton {...props} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('./assets/user.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#e32f45' : '#748c94',
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#e32f45' : '#748c94',
                    fontSize: 12,
                  }}>
                  PROFILE
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('./assets/bubble-chat.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#e32f45' : '#748c94',
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#e32f45' : '#748c94',
                    fontSize: 12,
                  }}>
                  CHAT
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
