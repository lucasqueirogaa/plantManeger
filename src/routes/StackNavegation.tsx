import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "../pages/Welcome";
import { UserIdentification } from "../pages/UserIdentification";
import { Confirmation } from "../pages/Confirmation";
import TabNavigation from "./TabNavigation";
import PlantSave from "../pages/PlantSave";
import MyPlant from "../pages/MyPlants";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen
          name="UserIdentification"
          component={UserIdentification}
        />
        <Stack.Screen name="Confirmation" component={Confirmation} />
        <Stack.Screen name="PlantSelect" component={TabNavigation} />
        <Stack.Screen name="PlantSave" component={PlantSave} />
        <Stack.Screen name="MyPlant" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
