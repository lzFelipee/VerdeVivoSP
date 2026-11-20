import { User } from '../types';
const accounts = [
 {email:'cidadao@verdevivo.com',password:'123456',user:{id:'u1',name:'Mariana Costa',email:'cidadao@verdevivo.com',role:'citizen' as const}},
 {email:'agente@verdevivo.com',password:'123456',user:{id:'u2',name:'Rafael Santos',email:'agente@verdevivo.com',role:'agent' as const}}
];
export async function authenticate(email:string,password:string):Promise<User> {
 const account=accounts.find(a=>a.email===email && a.password===password);
 if(!account) throw new Error('Confira o e-mail e a senha. Use uma das contas de demonstração do login.');
 return account.user;
}
