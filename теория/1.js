let user = {
    name1:'иван',
    age:20,
    cars:['лада', 'БМВ'], 
    home:{
        street: 'улица Ленина',
        house:50,
    },
    "Имя":"Иван"

}
// Оюращение
console.log(user["Имя"])

// Добавление
user.scool = 44

// Удаление
delete user.age

// Пробежатся по 
for (let key in user){
    console.log(key,user[key])
}

const arr = [1,2,3,4]
for (let element of arr){
    console.log(element)
} 