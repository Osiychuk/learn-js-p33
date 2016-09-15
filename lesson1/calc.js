/**
 * Разработать логику работы калькулятора
 * Задача при n заданых чисел и при n-1 знаков, посчитать правильный результат выполнения всех операций
 * Важно соблюдать приоритетность выполнения операций
 */
var values = [16, 21, 43, 13, 34, 123, 77];
var operators = ["+", "-", "+", "/", "-", "*"];
var rez = 0;
var a, b;

var sum = function(a, b) {
    return a + b;
};
var rizn = function (a, b) {
    return a - b;
};
var dob = function (a, b) {
    return a * b;
};
var chast = function (a, b) {
    return a / b;
};

for (var i = 0; i < operators.length; i++) {
    if (operators[i] == "*") {
        var buf1 = dob(values[i], values[i + 1]);
        values.splice(i, 2, buf1);
        operators.splice(i, 1);
        i--;
    }
    else if (operators[i] == "/") {
        var buf2 = chast(values[i], values[i + 1]);
        values.splice(i, 2, buf2);
        operators.splice(i, 1);
        i--;
    }
}
for (var j = 0; j < operators.length; j++) {
    if (operators[j] == "+") {
        var buf3 = sum(values[j], values[j + 1]);
        values.splice(j, 2, buf3);
        operators.splice(j, 1);
        j--;
    }
    else if (operators[j] == "-") {
        var buf4 = rizn(values[j], values[j + 1]);
        values.splice(j, 2, buf4);
        operators.splice(j, 1);
        j--;
    }
}

var rez = values[0];
console.log("Результат:" + rez);