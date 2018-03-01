var even = [];
var odd = [];
var multifive = [];
var prime = [];

// This is fungsi bikinan orang :D
function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}

for (let i = 1; i <= 100; i++){

    if (i % 5 === 0) {
        multifive.push(i);
    }
    if (i % 2 === 0) {
        even.push(i);
    }
    else {
        odd.push(i);
    }
    if (isPrime(i) === true) {
        prime.push(i)
    }
}

console.log(even)
console.log(odd)
console.log(multifive)
console.log(prime)