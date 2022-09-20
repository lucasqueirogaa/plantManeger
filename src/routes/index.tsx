import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "../pages/Welcome";
import { UserIdentification } from "../pages/UserIdentification";
import { Confirmation } from "../pages/Confirmation";
import PlantSelect from "../pages/PlantSelect";
import PlantSave from "../pages/PlantSave";

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
        <Stack.Screen name="PlantSelect" component={PlantSelect} />
        <Stack.Screen name="PlantSave" component={PlantSave} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
