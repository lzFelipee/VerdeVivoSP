import { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import { colors } from '../styles/theme';
export function Card({children,style}:{children:ReactNode;style?:ViewStyle}) {
 return <View style={[{backgroundColor:colors.surface,borderRadius:20,padding:18,marginBottom:14,borderWidth:1,borderColor:colors.border,shadowColor:'#183B29',shadowOpacity:0.045,shadowRadius:12,shadowOffset:{width:0,height:4},elevation:2},style]}>{children}</View>;
}
