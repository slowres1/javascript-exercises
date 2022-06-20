const fibonacci = function(input) {
    let fib = [1,1];
    let num = parseInt(input);
    if (num < 1) {
        return "OOPS";
    } else if (num === 1 || num === 2) {
        return fib[(num-1)]
    } else {
        for (i=2; i<num; i++) {
            fib.push(fib[(i-1)] + fib[(i-2)]);
        }
        return fib[i-1];
    }
};  

// Do not edit below this line
module.exports = fibonacci;
