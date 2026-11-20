import { Redirect } from 'expo-router';
import { useAuth } from '../src/contexts/AuthContext';
import { ActivityIndicator, View } from 'react-native';
import { colors } from '../src/styles/theme';

export default function Index() {
  const { user, loading } = useAuth();
  if (loading) return <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:colors.bg}}><ActivityIndicator color={colors.primary}/></View>;
  return <Redirect href={user ? '/(tabs)' : '/login'} />;
}
