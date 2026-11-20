export type UserRole = 'citizen' | 'agent';
export type User = { id:string; name:string; email:string; role:UserRole };
export type Garden = { id:string; name:string; address:string };
export type IrrigationLog = { id:string; amountLiters:number; notes:string; createdAt:string };
