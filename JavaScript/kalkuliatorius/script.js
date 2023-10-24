let sum = 0;

for(let num = 2; num < 100; num++) {
    let isPrime = true;

    if(num <= 1) {
        isPrime = false;
    } else if (num <= 3) {
        isPrime = true;
    } else if (num % 2 === 0 || num % 3 === 0) {
        isPrime = false;
    } else {
        for (let i = 5; i * i <= num; i +=6) {
            if(num % i === 0 || num % (i + 2) === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if(isPrime){
        sum += num;
    } console.log(sum)
}