// 1 дз

const num2 = [1,23,4,5,3,1,908,4,5,1,45,65,71,5,23,23,56,908,]
const tagCounts = {}
num2.forEach(function (tag) {
    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
})
console.log(tagCounts)

// 2 дз

const arrayBooks = [
    {book: 'Джен Эйр'},
    {book: 'Великий Гетсби'},
    {book: 'Туда и обратно'},
    {book: 'Алиса в стране чудес'},
]
const arrayBooksForFilter = arrayBooks.filter(i => i.book.toLowerCase().includes('у'))
const arraBooks2 = arrayBooks.filter(i => !i.book.toLowerCase().includes('у'))
const arrayBooksForMap = arrayBooksForFilter.map(i => `${i.book} - книга с буквой "у"`);

console.log(arrayBooksForMap);

// 3 дз

const users = [
    {name: 'Diar', age: 16},
    {name: 'Akulbek', age: 13},
    {name: 'Kolya', age: 26},
    {name: 'Amir', age: 19},
    {name: 'Daniil', age: 10},
    {name: 'Aaron', age:14},
    {name: 'Ruslan', age: 18},
    {name: 'Artur', age: 7},
]

const young = users.reduce((youngest, user) => {
    return user.age < youngest.age ? user : youngest;
})

const old = users.reduce((oldest, user) => {
    return user.age > oldest.age ? user : oldest;
});

const ageDif = old.age - young.age

console.log(`Пользователь ${old.name} старше ${young.name} на ${ageDif} лет.`);