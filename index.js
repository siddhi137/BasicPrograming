function isPrime(num){
    for(let i=2;i<num;i++){
        if(num%i==0){
            return false
        }
    }
    return true
}

console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(23));



function evenOdd(num){
    for(let i=1;i<=num;i++){
        if(num%2==0){
            return true
        }
    }return false
}
console.log(evenOdd(5));
console.log(evenOdd(4));