import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';
import { Garden, IrrigationLog } from '../types';
import { gardenService } from '../services/gardenService';
type GardenValue={reading:number;setReading:(v:number)=>void;logs:IrrigationLog[];gardens:Garden[];addLog:(d:{amountLiters:number;notes:string})=>Promise<void>};
const Context=createContext<GardenValue|undefined>(undefined);
export function GardenProvider({children}:{children:ReactNode}){
 const [reading,setReadingState]=useState(28); const [logs,setLogs]=useState<IrrigationLog[]>([]); const [gardens,setGardens]=useState<Garden[]>([]);
 useEffect(()=>{let active=true;Promise.all([gardenService.getMoisture(),gardenService.getLogs(),gardenService.getGardens()]).then(([m,l,g])=>{if(active){setReadingState(m);setLogs(l);setGardens(g);}});return()=>{active=false;};},[]);
 const setReading=useCallback((v:number)=>{setReadingState(v);void gardenService.saveMoisture(v);},[]);
 const addLog=useCallback(async(d:{amountLiters:number;notes:string})=>{const next=[{id:Date.now().toString(),...d,createdAt:new Date().toISOString()},...logs];setLogs(next);await gardenService.saveLogs(next);},[logs]);
 return <Context.Provider value={{reading,setReading,logs,gardens,addLog}}>{children}</Context.Provider>;
}
export function useGarden(){const v=useContext(Context);if(!v)throw new Error('useGarden deve ser usado dentro de GardenProvider');return v;}
