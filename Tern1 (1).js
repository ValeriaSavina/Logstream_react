let a = Math.floor(Math.random() * 100);
(a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()

let result 
if (a > 10) {
    result = a;
} else {
    result = a*2;
}

if (a > 5) {
    result = (2 * a) + 1;
} else {
    if (a < 3) {
        result = 1;
    } else {
        result = 2 *(a - 2);
    }
}

if (a > 4){
    result = 5;
} else {
    if (a%2 == 0) {
        result = 6;
    } else {
        result = 7;
    }
}
console.log(result)
