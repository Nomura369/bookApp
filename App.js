import 'react-native-gesture-handler';

import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Navigation from "./src/navigation/index";
import { GluestackUIProvider, StatusBar } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

const App = () => {
  //載入字體
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, fontFamily: 'Roboto_400Regular'}}>
        <GluestackUIProvider config={config}>
          <StatusBar />
          <Navigation />   
        </GluestackUIProvider>         
      </SafeAreaView>  
    </SafeAreaProvider>
  );
};

export default App;
