let arr = []
// let qrrt = new.Array()
let arr2 = ['fk', 1, [], {}]
console.log(arr2[0])

const l = arr2.length
console.log(l)

arr2.push("fgddf")
console.log(arr2)

const delet = arr2.pop()
console.log(delet)
console.log(arr2)

arr2.unshift('kjhhthjo')
console.log(arr2)

arr2.shift()
console.log(arr2)

const t = arr2.includes(2)
console.log(t)

for (let i = 0; i < arr2.length; i++){
    console.log('Элемент массива' +arr2[i])
}