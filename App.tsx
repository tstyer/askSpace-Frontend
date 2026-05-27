// Self-learn note: App.tsx is considered the main app wrapper - all screen paths placed here

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts,
         Inter_400Regular,
         Inter_600SemiBold,
         Inter_700Bold }
from '@expo-google-fonts/inter';

import SplashScreen from './src/screens/SplashScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
});

if (!fontsLoaded) {
  return null;
}
  return (
    <SafeAreaProvider>
      <splashScreen />
    
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  logo: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 8,
    borderColor: '#2ec27e',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120,
    marginBottom: 22,
  },

  heading: {
    fontSize: 34,
    fontFamily: 'Inter_700Bold',
    color: '#0E7490',
    letterSpacing: -0.8,
    marginBottom: 8,
  },
});