
console.log("person 1 : shows ticket");
console.log("person 2 : shows ticket")
 const premovie=async()=>{
  const promiseWifebringingTicket =  new Promise((resolve,reject)=>{
    setTimeout(()=> {resolve('ticket')}, 1000);
  });

const getpopcorn = new Promise((resolve,reject)=> resolve('popcorn'))
const getbutter = new Promise((resolve,reject)=> resolve('butter'))
const getcold = new Promise((resolve,reject)=> resolve('colddrinks'))
let ticket = await promiseWifebringingTicket;
let [popcorn,butter,colddrinks] = await Promise.all([getpopcorn,getbutter,getcold])
console.log('${popcorn},${butter},${colddrinks}')
return ticket;
}
premovie().then((m)=>console.log('person3:shows ${m}'))
 console.log("person 4 : shows ticket")
  console.log("person 5 : shows ticket")