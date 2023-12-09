function wait(n){
  let start= Date.now();
    let i =0;
    while(Date.now() - start < n){
       i++;
    }
}
console.log("Start");
wait(1000*5);
console.log("end")