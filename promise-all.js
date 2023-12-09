/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve) => {
        setTimeout(resolve("first resolved"), 1000);
    })
}

function waitTwoSecond() {
    return new Promise((resolve) => {
        setTimeout(resolve("second resolved"), 2000);
    })
}

function waitThreeSecond() {
    return new Promise((resolve) => {
        setTimeout(resolve("third resolved"), 3000);
    })
}

async function calculateTime() {
    const st = Date.now();
    const results = await Promise.all([
        waitOneSecond(),
        waitTwoSecond(),
        waitThreeSecond()
    ]
    )
    console.log(results);
    console.log(Date.now() - st);

}
function calTime() {
    const st = Date.now();
    waitOneSecond().then((data) => {
        console.log(data);
        return waitTwoSecond();
    }).then((data) => {
        console.log(data);
        return waitThreeSecond();
    }).then((data) => {
        console.log(data);
    })
    console.log(Date.now() - st);
    
}
calculateTime();
// calTime();
console.log("Hello World")