import { createAppContainer, createSwitchNavigator } from "react-navigation";
/* import { createStackNavigator } from "react-navigation-stack"; */
import Home from "./screens/Home/HomeScreen";

const stackNavigator = createSwitchNavigator({ Home });
const appContainer = createAppContainer(stackNavigator);

export default appContainer;
