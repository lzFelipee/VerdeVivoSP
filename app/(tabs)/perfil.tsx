
import { ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import { Card } from '../../src/components/Card';
import { Button } from '../../src/components/Button';
import { useAuth } from '../../src/contexts/AuthContext';
import { colors } from '../../src/styles/theme';

export default function Profile() {
  const { user, signOut } = useAuth();
  const router = useRouter();

  async function handleSignOut() {
    try {
      await signOut();
      router.replace('/login');
    } catch (error) {
      console.error('Erro ao encerrar sessão:', error);
    }
  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.bg }}
      contentContainerStyle={{
        padding: 20,
        paddingTop: 58,
        paddingBottom: 34,
      }}
    >
      <Text
        style={{
          fontSize: 12,
          color: colors.muted,
          fontWeight: '800',
          letterSpacing: 1,
        }}
      >
        CONTA E PREFERÊNCIAS
      </Text>

      <Text
        style={{
          fontSize: 28,
          fontWeight: '900',
          color: colors.ink,
          marginTop: 5,
          marginBottom: 18,
        }}
      >
        Meu perfil
      </Text>

      <Card style={{ backgroundColor: colors.navy, borderColor: colors.navy }}>
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 20,
            backgroundColor: '#C8F169',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Ionicons name="person" size={29} color={colors.primaryDark} />
        </View>

        <Text style={{ fontSize: 22, fontWeight: '900', color: '#fff', marginTop: 15 }}>
          {user?.name}
        </Text>

        <Text style={{ fontSize: 13, color: '#D6E6D8', marginTop: 4 }}>
          {user?.email}
        </Text>

        <View
          style={{
            alignSelf: 'flex-start',
            backgroundColor: '#345849',
            paddingHorizontal: 12,
            paddingVertical: 7,
            borderRadius: 20,
            marginTop: 14,
          }}
        >
          <Text style={{ color: '#D8F4BD', fontSize: 11, fontWeight: '900' }}>
            {user?.role === 'agent' ? 'AGENTE COMUNITÁRIO' : 'CIDADÃO'}
          </Text>
        </View>
      </Card>

      <Text style={{ fontSize: 17, fontWeight: '900', color: colors.ink, marginBottom: 10 }}>
        Sobre o aplicativo
      </Text>

      <Card>
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <Ionicons name="leaf-outline" size={23} color={colors.primary} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: '900', color: colors.ink }}>
              VerdeVivo SP
            </Text>
            <Text style={{ color: colors.muted, lineHeight: 21, marginTop: 5 }}>
              Uma solução CitizenTech para apoiar o cuidado de hortas comunitárias,
              acompanhar a umidade do solo e incentivar o uso consciente da água.
            </Text>
          </View>
        </View>
      </Card>

      <Card>
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <Ionicons name="shield-checkmark-outline" size={23} color={colors.primary} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: '900', color: colors.ink }}>
              Dados e privacidade
            </Text>
            <Text style={{ color: colors.muted, lineHeight: 21, marginTop: 5 }}>
              Esta versão utiliza autenticação demonstrativa e armazenamento local
              no dispositivo. Não há integração com servidor externo.
            </Text>
          </View>
        </View>
      </Card>

      <Button
        title="Sair da conta"
        variant="outline"
        icon="log-out-outline"
        onPress={handleSignOut}
      />

      <Text
        style={{
          fontSize: 11,
          color: colors.muted,
          textAlign: 'center',
          marginTop: 20,
        }}
      >
        VERDEVIVO SP • PROJETO ACADÊMICO CITIZENTECH
      </Text>
    </ScrollView>
  );
}
