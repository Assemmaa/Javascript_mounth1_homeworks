//TODO - Task - 1

var lang = prompt('Enter programming lang: ').toLowerCase()
switch (lang) {
    case 'javascript':
        console.log('Great choice for web-design')
        break
    case 'python':
        console.log('Great choice for coding')
        break
    case 'ruby':
        console.log('Great choice for creating games')
        break
    case 'c#':
        console.log('Great choice')
        break
    case 'java':
        console.log('Great choice for creating new')
        break
    default:
        console.log('WE DO NOT HAVE ANOTHER LANG')
}


//TODO - Task - 2

var student = {
    name: 'Alina',
    age: 18,
    major: 'designer',
    grades: [14, 24, 12, 100, 34]
}


// - Выведите информацию о студенте в консоль, используя свойства объекта.
// Вывод должен быть следующим: "Имя ... , Возраст ... , Направление ..."

console.log(Object.keys(student))


// Обновите свойства объекта (например, измените возраст студента

student['age'] = 19
console.log(student)

console.log(Object.entries(student))



//TODO - Task - 3

for (let i = 1; i <= 5; i++) {
    console.log(i)
}

//TODO - Task - 4

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}


//Например - 0 - не четное число - но могу ли я вместо TODO - let i = 0; поставить 1?

//TODO - например вот так вот

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }