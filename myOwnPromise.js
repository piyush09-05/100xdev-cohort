const fs = require('fs');

class myOwnPromise{
    constructor(executor){
        this.state = "pending"
        this.value = undefined
        this.reason = undefined

        this.resolveHandlers = [];
        this.rejectHandlers = [];

        executor(this.resolve.bind(this), this.reject.bind(this));
    }

    resolve(value){
        this.state = "fulfilled";
        this.value = value;

        this.resolveHandlers.forEach(handler => handler(this.value));
    
    }
    reject(reason){
        this.state = "rejected";
        this.reason = reason;

        this.rejectHandlers.forEach(handler => handler(this.reason));
    }
    then(resolveHandler){
       this.resolveHandlers.push(resolveHandler);

       return this;
    }
    catch(rejectHandler){
        this.rejectHandlers.push(rejectHandler);
    }

}

function myTimeoutfn(n){
    return new myOwnPromise((resolve,reject) => {
        fs.readFile('file.txt', "utf-8" , (err, data) => {
            resolve(data);
        })
    })
}
function main(){
    myTimeoutfn(10000).then((data) => {
        console.log(data);
    })
}
main();