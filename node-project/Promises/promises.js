const a = 10;
const b = 20;

promisedFunc=new Promise((resolve,reject)=>{
    const c =a+b;
    resolve(c)
    reject("Some kind of error ")
});

promisedFunc.then((data)=>{
    console.warn(a+data);
})

promisedFunc.catch((err)=>{
    console.warn("Got this error",err);
})