import { Provider } from "react-redux";
import store from "../Controller/Redux/store";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import { theme } from "@/constants/Theme";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
const PageProviders = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <StatusBar />
          <Slot />
        </SafeAreaProvider>
      </PaperProvider>
    </Provider>
  );
};
export default PageProviders;
