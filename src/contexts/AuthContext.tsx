import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User } from '../types';
import { authenticate } from '../services/authService';
import { storage } from '../services/storage';
type AuthValue={user:User|null;loading:boolean;signIn:(email:string,password:string)=>Promise<void>;signOut:()=>Promise<void>};
const AuthContext=createContext<AuthValue|undefined>(undefined);
const KEY='@verdevivo/session';
export function AuthProvider({children}:{children:ReactNode}) {
 const [user,setUser]=useState<User|null>(null); const [loading,setLoading]=useState(true);
 useEffect(()=>{storage.get<User|null>(KEY,null).then(setUser).finally(()=>setLoading(false));},[]);
 async function signIn(email:string,password:string){const u=await authenticate(email,password);await storage.set(KEY,u);setUser(u);}
 async function signOut(){await storage.remove(KEY);setUser(null);}
 return <AuthContext.Provider value={{user,loading,signIn,signOut}}>{children}</AuthContext.Provider>;
}
export function useAuth(){const value=useContext(AuthContext);if(!value)throw new Error('useAuth deve ser usado dentro de AuthProvider');return value;}
