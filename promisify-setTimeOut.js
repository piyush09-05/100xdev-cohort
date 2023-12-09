

const wait = (n) => {
    return new Promise((resolve) => {
        setTimeout(resolve,n)
    })
}

const sleep = async (n) =>{
     await wait(n);
     return Promise.resolve("Promise resolved");
    
} 
sleep(1000).then((data) => {
    console.log(data);
});

let a =0;
for(let i=0;i<10;i++){
    a=a+i;
}
console.log(a);

