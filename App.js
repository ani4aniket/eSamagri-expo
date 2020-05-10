import React from "react";

import { AppLoading } from "expo";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/screens/Home/Home";

const Stack = createStackNavigator();

let customFonts = {
  "Poppins-Regular": require("./assets/fonts/Poppins-Regular.otf"),
  "Poppins-Light": require("./assets/fonts/Poppins-Light.otf"),
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
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" headerMode="none">
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else {
      return <AppLoading />;
    }
  }
}

export default App;
