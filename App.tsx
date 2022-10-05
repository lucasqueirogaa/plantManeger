import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";
import AppLoading from "expo-app-loading";
import Routes from "./src/routes/StackNavegation";

import * as Notifications from "expo-notifications";
import { useEffect } from "react";
import { PlantProps } from "./src/libs/storage";

export default function App() {
  const [fonstLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async (notification) => {
        const data = notification.request.content.data.plant as PlantProps;
      }
    );

    return () => subscription.remove();
  }, []);

  if (!fonstLoaded) {
    return <AppLoading />;
  }

  return <Routes />;
}
