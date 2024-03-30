import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, // 自訂drawer項目用
} from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Divider, Image, Text, Center } from '@gluestack-ui/themed';

import BookScreen from '../screens/BookScreen';
import DetailScreen from '../screens/DetailScreen';
import BookTheme from '../theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer theme={BookTheme}>
      <TheDrawer />
    </NavigationContainer>
  );
}

/*Drawer專區-起點*/
const TheDrawer = () => { // Drawer導覽編排
    const { colors } = useTheme(); // 來自theme裡頭的index.js
  
    return (
      <Drawer.Navigator
        initialRouteName="HomeStack"
        screenOptions={{
          drawerActiveTintColor: colors.purple,
          drawerInactiveTintColor: colors.gray,
          drawerStyle: { width: 300 },
          drawerLabelStyle: { fontSize: 14, fontWeight: '400' }, // icon的文字設定
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="HomePage"
          component={TheTab}
          options={{
            headerShown: false,
            drawerLabel: "Home",
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={24} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }

const CustomDrawerContent = (props) => { // Drawer頁面排版
    const { colors } = useTheme(); // 來自theme裡頭的index.js

    return (
      <DrawerContentScrollView {...props}
        contentContainerStyle={{ paddingTop: 0 }}
      >
            <Image
            height={48}
            width={48}
            source={require("../images/user.png")}
            alt='userImage'
            />
            <Text fontSize={24} fontWeight='500' color={colors.black}>May</Text>
            <Divider my={2} />

            {/*Drawer.Screen內容*/}
            <DrawerItemList {...props} />

            {/*自訂Drawer項目：DrawerItem*/}
            <DrawerItem 
                label="Account"
                activeTintColor={colors.purple}
                inactiveTintColor={colors.gray}
                labelStyle={ {fontSize: 14, fontWeight: '400'} }
                icon={({ color }) => (
                <MaterialCommunityIcons name="account-circle" color={color} size={24} />
                )}
            />
            <DrawerItem 
                label="Setting"
                activeTintColor={colors.purple}
                inactiveTintColor={colors.gray}
                labelStyle={ {fontSize: 14, fontWeight: '400'} }
                icon={({ color }) => (
                <MaterialCommunityIcons name="cog" color={color} size={24} />
                )}
            />

        </DrawerContentScrollView>
    );
  }
/*Drawer專區-終點*/

/*Tab專區-起點*/
const TheTab = () => {
    const { colors } = useTheme();
  
    return (
      <Tab.Navigator
        initialRouteName="HomeStack"
        screenOptions={{
          tabBarInactiveTintColor: colors.gray,
          tabBarActiveTintColor: colors.purple,
          // headerShown: false
          tabLabelStyle: { fontSize: 12, fontWeight: '500' }, // icon的文字設定
          tabBarStyle: { height: 56, paddingTop: 8, paddingBottom: 8 },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Wishlist"
          component={WishList}
          options={{
            headerShown: false,
            title: "Wishlist",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bookmark" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="My books"
          component={MyBooks}
          options={{
            headerShown: false,
            title: "My books",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="book-open" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  const WishList = () => {
    return (
        <Center flex={1}>
            <Text>"Wishlist" is coming soon.</Text>
        </Center>
    );
  };

  const MyBooks = () => {
    return (
        <Center flex={1}>
            <Text>"My Books" is coming soon.</Text>
        </Center>
    );
  };
/*Tab專區-終點*/


/*Stack專區-起點*/
const HomeStack = ({ navigation }) => {
    const { colors } = useTheme(); // 來自theme裡頭的index.js
    
    return (
      <Stack.Navigator
        /*screenOptions={{
            headerShown: false
        }}*/
      >
        <Stack.Screen
          name="HomeStack"
          component={BookScreen}
          options={{
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerLeft: () => (
              <MaterialCommunityIcons
                name={'menu'}
                size={24}
                onPress={() => navigation.openDrawer()}
                style={{ marginLeft: 8, color: colors.black }}
              />
            ),
            headerRight: () => (
                <MaterialCommunityIcons
                  name={'magnify'}
                  size={24}
                  style={{ marginRight: 8, color: colors.black }}
                />
              ),
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={() => ({
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerRight: () => (
                <MaterialCommunityIcons
                  name={'bookmark-outline'}
                  size={24}
                  style={{ marginRight: 16, color: colors.black }}
                />
              ),
          })}
        />
      </Stack.Navigator>
    );
  }
/*Stack專區-終點*/

export default Navigation;