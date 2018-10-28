//for (let i = 10; i >= 0; i--) {
//    if (i % 2 !== 0) {
//    continue;
//    }
//       prn(i);
//}

function prn(val) {
    document.write(val + '<br>');
}

//let counter = 0;
//while (counter <= 10) {
//    prn (counter);
//    counter++;
//}

let counter = 0; 
do {
    prn (counter);
    counter++;
} while (counter <= 10)