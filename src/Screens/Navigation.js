import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from './Feed'
import Register from './Register'
import AddPost from './AddPost'
import Login from './Login'
import NewConta from './NewConta'
import {createStackNavigator} from '@react-navigation/stack'
import {UserProvider} from '../Context/UserContext'

export default props =>{
    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator();

    const TabNav = ()=>{
        return(
            <Tab.Navigator  screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              
              switch(route.name){
                  case "Feed":
                    iconName = focused
                    ? 'ios-grid'
                    : 'ios-grid';
                      break;
                  case "Adicionar":
                    iconName = focused
                    ? 'ios-add-circle'
                    : 'ios-add-circle';
                      break;
                 case "Registro":
                    iconName = focused
                    ? 'ios-man'
                    : 'ios-man';
                      break;
               case "Search":
                        iconName = focused
                        ? 'ios-search'
                        : 'ios-search';
                          break;
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}> 
                <Tab.Screen name="Feed" component={Feed}/>
                <Tab.Screen name="Adicionar" component={AddPost}/>
                <Tab.Screen name="Registro" component={Register}/>
                <Tab.Screen name="Search" component={Feed}/>
            </Tab.Navigator>
        )
    }
    return(
            <NavigationContainer>

            <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="NewConta" component={NewConta}></Stack.Screen>
            <Stack.Screen name="Tab" component={TabNav}></Stack.Screen>
            </Stack.Navigator>
    



                
            </NavigationContainer>
    )
}
 
