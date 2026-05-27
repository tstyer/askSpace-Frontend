// Self-learn note: App.tsx is considered the main app wrapper - all screen paths placed here
// It loads global providers and decides which screen/navigation tree is shown.

import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts,
         Inter_400Regular,
         Inter_600SemiBold,
         Inter_700Bold }
from '@expo-google-fonts/inter';

import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
});

  return (
    <SafeAreaProvider>
      <SplashScreen />
      <LoginScreen />
    
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    justifyContent: 'flex-start',
  },
});