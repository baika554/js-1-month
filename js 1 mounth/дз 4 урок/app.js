// 1 дз

var array = ['name','john','lastname','black','age','23']
var object = {}

for(var i = 0; i < array.length; i+= 2){
    var key = array[i]
    var value = array[i+1]
    object[key] = value
}
console.log(object);

// 2 дз

function srednArefm(...args) {
    if (args.length === 0) {
        console.log("Нет чисел");
        return;
    }

    var total = args.reduce((acc, num) => acc + num, 0);
    var count = args.length;
    var avg = total / count;
    return avg;
}
var numbers = [21, 14, 53, 2, 9];
var result = srednArefm(...numbers);
console.log(`Среднее арифметическое чисел ${numbers}: ${result}`);


// 3 дз

var getDataType = (value) => {
    var type = typeof value;
    console.log(`${value} => ${type}`);
    return;
};

getDataType(false); 
getDataType('dwadwafnw'); 
getDataType(789); 

// 4 дз

var Input = document.getElementById('counter')
var minus = document.getElementById('minus')
var plus = document.getElementById('plus')

function minusCount(){
    var value = +Input.value
    Input.value = value + 1
}
function plusCount(){
    var value = +Input.value
    Input.value = value - 1
}
minus.addEventListener('click', plusCount)
plus.addEventListener('click', minusCount)