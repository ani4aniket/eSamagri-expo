import React from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/screens/Home/Home";
import Profile from "./src/screens/Profile/Profile";
import YourList from "./src/screens/YourList/YourList";

const Stack = createStackNavigator();

let customFonts = {
  "Poppins-Regular": require("./assets/fonts/Poppins-Regular.otf"),
  "Poppins-Light": require("./assets/fonts/Poppins-Light.otf"),
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
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Profile" headerMode="none">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="YourList" component={YourList} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else {
      return <AppLoading />;
    }
  }
}

export default App;
