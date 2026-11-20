import { Pressable, Text, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/theme';
export function Button({title,onPress,disabled=false,variant='primary',icon}:{title:string;onPress:()=>void;disabled?:boolean;variant?:'primary'|'secondary'|'outline';icon?:keyof typeof Ionicons.glyphMap}) {
 const secondary=variant!=='primary';
 return <Pressable accessibilityRole="button" accessibilityLabel={title} onPress={onPress} disabled={disabled} style={({pressed})=>({backgroundColor:variant==='primary'?colors.primary:variant==='secondary'?colors.soft:'transparent',borderWidth:variant==='outline'?1:0,borderColor:colors.border,paddingVertical:15,paddingHorizontal:18,borderRadius:14,alignItems:'center',justifyContent:'center',flexDirection:'row',gap:9,marginTop:8,opacity:disabled?0.55:pressed?0.82:1})}>
 {disabled?<ActivityIndicator color={secondary?colors.primary:'#fff'}/>:<>{icon&&<Ionicons name={icon} size={18} color={secondary?colors.primary:'#fff'}/>}<Text style={{fontSize:15,fontWeight:'800',color:secondary?colors.primary:'#fff'}}>{title}</Text></>}
 </Pressable>;
}
