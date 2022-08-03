const numberOneTriangle = (a) => {
    let res = '';
    if (a > 1 && a < 10){
        for (let i = 1; i <= a; i++){
            res += '*';
            console.log(res);
        }
    } else {
        console.log('Tham số truyền vào nằm ngoài khoảng (1,10)');
    }
}

numberOneTriangle(9)
numberOneTriangle(90)