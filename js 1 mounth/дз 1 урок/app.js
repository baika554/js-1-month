//1 домашка


// var create_login = prompt('Придумайте логин')
// var create_password = prompt('Придумайте пароль')

// if (create_password.length < 8){
//     alert('Пароль должен состоять минимум из 8 символов')
// }else{
//     alert('Регистрация прошла успешно')
// }

// alert('Авторизуйтесь')

// var sign_login = prompt('Логин')
// var sign_password = prompt('Пароль')

// if (create_login == sign_login && create_password == sign_password){
//     alert('Вы вошли')
// }else{
//     alert('Неправильный логин или пароль')
// }


// 2 домашка

var word1 = prompt('Введите 1 слово')
var word2 = prompt('Введите 2 слово')

if (word1.length > word2.length){
    alert( word1 )
}else if(word1 === word2){
    alert('Одинаковое кол-во символов')
}
else{
    alert( word2 )
}

