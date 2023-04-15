console.log("Git is used to store code");
function buyacar (cb1,cb2,cb3){
    setTimeout(()=> {
      console.log("buy  a car")
      cb1(cb2,cb3);
    }, 100);
  }
  function planaTrip (cb1,cb2){
    setTimeout(()=> {
      console.log("Lets go to manali")
       cb1(cb2);
    }, 50);
  }
  function reachmanali (cb){
    setTimeout(()=> {
      console.log("Reached manali")
       cb();
    }, 25);
  }
  function goToMountain (){
    setTimeout(()=> {
      console.log("Reached mountains")
       
    }, 15);
  }
  buyacar(planaTrip,reachmanali,goToMountain);
  let posts=[];
function updateLastUserActivityTime(){
  return new promise((resolve,reject)=>{
    setTimeout(()=> {
      let userTime = new date().getMinutes();
      resolve(usertime);
    }, 1000);
  })
}
function createPost(){
 return new promise((resolve,reject)=>{
    setTimeout(()=> {
      posts.push({title: POST})
      resolve(usertime);
    }, 1000);
  })
  function deletepost(){
    return new promise ((resolve,reject)=>{
      setTimeout(()=>{
        posts.pop();
      },3000)
    })
  }
}
function userupdates(){

  Promise.all([createPost1(), updateLastUserActivityTime()]).then(([something,something1])=>{
 
   console.log(something,something1)
 
  })
 
 }
 
 userupdates()
 
 
 