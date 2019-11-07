import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"
import { createMaterialTopTabNavigator } from "react-navigation-tabs"
import { Color } from "./constants/routes";
import Home from "./screens/Home/HomeScreen";
import graphic from "./screens/graphic/graphic";

const Top = createMaterialTopTabNavigator({ Home, graphic }, {
  tabBarPosition: "top",
  initialRouteName: "Home",
  tabBarOptions: {
    style: {
      backgroundColor: Color.background,
    },
    indicatorStyle: {
      backgroundColor: Color.cyan
    },
    activeTintColor: Color.cyan
  }
})

const appContainer = createAppContainer(Top);

export default appContainer;
