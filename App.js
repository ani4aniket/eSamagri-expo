import React from "react";

import { Image } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/screens/Home/Home";
import Welcome from "./src/screens/Welcome/Welcome";
import Login from "./src/screens/Auth/Login";
import Forgot from "./src/screens/Auth/Forgot";
import Signup from "./src/screens/Auth/Signup";

import { Block } from "./src/components";
import Order from "./src/screens/Order/Order";
import Profile from "./src/screens/Profile/Profile";
import YourList from "./src/screens/YourList/YourList";

const Stack = createStackNavigator();

let customFonts = {
  "Poppins-Regular": require("./assets/fonts/Poppins-Regular.otf"),
  "Poppins-Light": require("./assets/fonts/Poppins-Light.otf"),
  "Poppins-Medium": require("./assets/fonts/Poppins-Medium.otf"),

  Roboto: require("native-base/Fonts/Roboto.ttf"),
  Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
};

class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <Block white>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Welcome"
              headerMode="none"
              screenOptions={{
                headerStyle: {},
                headerBackImage: <Image />,
                headerBackTitle: null,
                headerLeftContainerStyle: {},
                headerRightContainerStyle: {},
              }}
            >
              <Stack.Screen name="Welcome" component={Welcome} />
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Signup" component={Signup} />
              <Stack.Screen name="Forgot" component={Forgot} />
              <Stack.Screen name="Order" component={Order} />
              <Stack.Screen name="Profile" component={Profile} />
              <Stack.Screen name="YourList" component={YourList} />
            </Stack.Navigator>
          </NavigationContainer>
        </Block>
      );
    } else {
      return <AppLoading />;
    }
  }
}

export default App;
