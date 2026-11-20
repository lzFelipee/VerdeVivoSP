import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Alert, KeyboardAvoidingView, Platform, Text, TextInput, View, Pressable, ScrollView } from 'react-native';
import { useAuth } from '../src/contexts/AuthContext';
import { Button } from '../src/components/Button';
import { Card } from '../src/components/Card';
import { colors } from '../src/styles/theme';

export default function Login() {
 const { signIn } = useAuth();
 const router = useRouter();
 const [email,setEmail]=useState('cidadao@verdevivo.com');
 const [password,setPassword]=useState('123456');
 const [busy,setBusy]=useState(false);
 async function enter() {
   if (!/^\S+@\S+\.\S+$/.test(email)) return Alert.alert('E-mail inválido','Informe um e-mail válido.');
   if (password.length < 6) return Alert.alert('Senha inválida','A senha deve ter pelo menos 6 caracteres.');
   setBusy(true);
   try { await signIn(email.trim().toLowerCase(),password); router.replace('/(tabs)'); }
   catch(e:any) { Alert.alert('Não foi possível entrar',e.message || 'Tente novamente.'); }
   finally { setBusy(false); }
 }
 return <KeyboardAvoidingView style={{flex:1,backgroundColor:colors.bg}} behavior={Platform.OS==='ios'?'padding':undefined}>
  <ScrollView contentContainerStyle={{flexGrow:1,justifyContent:'center',padding:24}}>
   <View style={{marginBottom:26}}>
    <Text style={{fontSize:42}}>🌱</Text>
    <Text style={{fontSize:34,fontWeight:'900',color:colors.ink}}>VerdeVivo SP</Text>
    <Text style={{fontSize:16,color:colors.muted,marginTop:8,lineHeight:23}}>Tecnologia para cuidar das hortas comunitárias e usar água com consciência.</Text>
   </View>
   <Card>
    <Text style={{fontSize:22,fontWeight:'800',color:colors.ink,marginBottom:6}}>Acesse sua conta</Text>
    <Text style={{color:colors.muted,marginBottom:18}}>Entre para acompanhar sua horta.</Text>
    <Text style={label}>E-mail</Text>
    <TextInput accessibilityLabel="E-mail" autoCapitalize="none" keyboardType="email-address" value={email} onChangeText={setEmail} placeholder="seu@email.com" style={input}/>
    <Text style={label}>Senha</Text>
    <TextInput accessibilityLabel="Senha" secureTextEntry value={password} onChangeText={setPassword} placeholder="Mínimo de 6 caracteres" style={input}/>
    <Button title={busy?'Entrando...':'Entrar'} onPress={enter} disabled={busy}/>
   </Card>
   <View style={{marginTop:18}}>
    <Text style={{fontWeight:'700',color:colors.ink,marginBottom:8}}>Contas para demonstração</Text>
    <Pressable onPress={()=>{setEmail('cidadao@verdevivo.com');setPassword('123456')}}><Text style={{color:colors.primary,lineHeight:24}}>Cidadão: cidadao@verdevivo.com / 123456</Text></Pressable>
    <Pressable onPress={()=>{setEmail('agente@verdevivo.com');setPassword('123456')}}><Text style={{color:colors.primary,lineHeight:24}}>Agente: agente@verdevivo.com / 123456</Text></Pressable>
   </View>
  </ScrollView>
 </KeyboardAvoidingView>
}
const label={fontSize:13,fontWeight:'700' as const,color:colors.ink,marginBottom:7};
const input={borderWidth:1,borderColor:colors.border,borderRadius:12,padding:14,marginBottom:15,backgroundColor:'#fff',fontSize:16};
