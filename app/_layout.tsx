import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from '../src/contexts/AuthContext';
import { GardenProvider } from '../src/contexts/GardenContext';
export default function RootLayout(){return <AuthProvider><GardenProvider><StatusBar style="dark"/><Stack screenOptions={{headerShown:false}}/></GardenProvider></AuthProvider>}
