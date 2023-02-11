
const user = {
    name1: 'Vasa',
    age: 42153,
}   
const countries = [];
for (let value of Object.entries(user)) {
    countries.push(value);}
console.log(countries)