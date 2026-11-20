import { Garden, IrrigationLog } from '../types';
import { storage } from './storage';
const GARDENS_KEY='@verdevivo/gardens'; const LOGS_KEY='@verdevivo/irrigations'; const MOISTURE_KEY='@verdevivo/moisture';
const initialGardens:Garden[]=[{id:'g1',name:'Horta Comunitária Vila Verde',address:'Vila Mariana, São Paulo - SP'}];
export const gardenService={
 getGardens:()=>storage.get<Garden[]>(GARDENS_KEY,initialGardens),
 getLogs:()=>storage.get<IrrigationLog[]>(LOGS_KEY,[]),
 saveLogs:(logs:IrrigationLog[])=>storage.set(LOGS_KEY,logs),
 getMoisture:()=>storage.get<number>(MOISTURE_KEY,28),
 saveMoisture:(value:number)=>storage.set(MOISTURE_KEY,value)
};
