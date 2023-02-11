let je = "john zdnf"
let y = je.split(' ')
console.log(y)
for (let i = 0;i < y.length;i ++){
    var index;
    for (index = 0; index < i.length; ++index) {
         // console.log(y[index])
        let r = i[0].toUpperCase()
        let t = i.shift()
        let u = i.unshift(r)
        
     }
     console.log(i.join(''))
}
console.log(i.join(''))
// var index;
// for (index = 0; index < y.length; ++index) {
//     // console.log(y[index])
//     let r = y[0].toUpperCase()
//     let t = y.shift()
//     let u = y.unshift(r)
    
// }
// console.log(y.join(''))