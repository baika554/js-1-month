//1 домашка

// var arrayTags =  ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
// var objectTags = {}

// for(var i = 0; i < arrayTags.length; i++){
//     var tags = arrayTags[i]

//     if(tags in objectTags){
//         objectTags[tags]++
//     }else{
//         objectTags[tags] = 1
//     }
// }

// console.log(objectTags);

//2 домашка

var starbucks = {
    coffee:{
        americanos:'15 calories, 0g sugar, 0g fat',
        FeaturedBlondeRoast:'5 calories, 0g sugar, 0g fat',
        CaffeMisto:'110 calories, 10g sugar, 4g fat'
    },
    tea:{
        ChaiTea:'0 calories, 0g sugar, 0g fat',
        ChaiTeaLatte:'240 calories, 42g sugar, 4.5g fat',
        MatchaTeaLatte:'240 calories, 32g sugar, 7g fat'
    },
};


function order(type, name) {
    var category = starbucks[type];

    if (category) {
        var item = category[name];

        if (item) {
            console.log(`Ваш выбор ${name}: ${item}`);
        } else {
            console.error(`Ошибка: ${name} этого нет в ${type} категории.`);
        }
    } else {
        console.error(`Ошибка: ${type} такой категории не существует.`);
    }
}

order('tea','ChaiTea')