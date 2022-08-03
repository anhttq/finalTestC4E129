function isPrime(a) {
    if (a < 2) {
        return false
    }
    else {
        for (let j = 2; j <= Math.sqrt(a); j++) {
            if( a % j === 0) return false;
        } return true;
    }
}

function printPrime(e) {
    event.preventDefault();
    let a = parseInt(document.getElementById('numA').value);
    let b = parseInt(document.getElementById('numB').value);
    let result = document.querySelector('.result');
    
    if (a > b) {
        // console.log(a, b);
        let temp = a;
        a = b;
        b = temp;
        // console.log(a, b, temp);
    }
    let arr = [];
    for (let i = a; i <= b; i++){
        if(isPrime(i)){
            arr.push(i);
        }
    }
    // console.log(res);
    result.innerHTML = `Các số nguyên tố trong khoảng từ ${a} đến ${b} là ` + arr.join(', ') + '.';
}
