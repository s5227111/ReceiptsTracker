import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./screens/Home";
import Receipts from "./screens/Receipts";
import Charts from "./screens/Charts";
import colors from "./design_system/colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="HomeScreen" component={Home} />
    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={colors.link}
        inactiveColor={colors.link}
        barStyle={{ backgroundColor: colors.primary }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
          name="Home"
          component={HomeStackScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Receipts",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="receipt" color={color} size={26} />
            ),
          }}
          name="Receipts"
          component={Receipts}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Charts",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="chart-bar"
                color={color}
                size={26}
              />
            ),
          }}
          name="Charts"
          component={Charts}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
