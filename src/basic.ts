



const add = ( a : number , b : number)=> a+b;
const sub = ( a : number , b : number)=>a-b;
const mul = (a : number , b : number )=> a*b;
const div = (a : number , b : number )=>{
    if(b==0) throw new Error("Cant divide");
    return a/b;
    
};
