const div = document.querySelector('.cart2')
const btn = document.querySelector('.btn')
const btn2 = document.querySelector('.btn2')
//катрочки
const q1 = document.querySelector('.q1')
const q2 = document.querySelector('.q2')
const q3 = document.querySelector('.q3')
const q4 = document.querySelector('.q4')
const q5 = document.querySelector('.q5')

const di = document.querySelector('.c')

const ay = document.querySelector('.ay')
const ay1 = document.querySelector('.ay1')
const ay2 = document.querySelector('.ay2')
const ay3 = document.querySelector('.ay3')
const ay4 = document.querySelector('.ay4')
// let a1 = q1.value
// let a2 = q2.value
// let a3 = q3.value
// let a4 = q4.value
// let a5 = q5.value

const products = [];

btn.onclick = function() {
    
    const product = {
        name: q1.value,
        opis: q2.value,
        money: q3.value,
        kolvo: q4.value,
        artic: q5.value

    };
    products.push(product);
    di.innerHTML += `
        <p>Название</p>
        <div>${product.name}</div>
        <p>Описание</p>
        <div>${product.opis}</div>
        <p>Цена</p>
        <div>${product.money}</div>
        <p>Количество</p>
        <div>${product.kolvo}</div>
        <p>Артикул</p>
        <div>${product.artic}</div>
        <button onclick="dele(${products.length - 1})">Удалить товары</button>
        <button onclick="on(${products.length - 1})">Обновить товары</button>

    `
    q1.value =' '
    q2.value =' '
    q3.value =' '
    q4.value =' '
    q5.value =' '
    console.log(products);
}

function dele(index){
    products.splice(index, 1)
    di.innerHTML = ''
    for (let i =0 ; i<products.length;i++){
        di.innerHTML += `
        <p>Название</p>
        <div>${products[i].name}</div>
        <p>Описание</p>
        <div>${products[i].opis}</div>
        <p>Цена</p>
        <div>${products[i].money}</div>
        <p>Количество</p>
        <div>${products[i].kolvo}</div>
        <p>Артикул</p>
        <div>${products[i].artic}</div>
        <button onclick="dele(${i})">Удалить товары</button>
        <button onclick="on(${i})">Обновить товары</button>
    `
    }
}
function on(index){
    products[index]
    const product = products[index]
    // console.log(q2.value = prop[opis]);
    const productObject = {
       
    };
    for  (const prop in product){
       productObject[prop] = product[prop]
    }
    q1.value = productObject.name
    q2.value = productObject.opis
    q3.value = productObject.money
    q4.value = productObject.kolvo
    q5.value = productObject.artic
    const product1 = {
        name: q1.value,
        opis: q2.value,
        money: q3.value,
        kolvo: q4.value,
        artic: q5.value

    };
    products.splice(index, 1)
    
    di.innerHTML = ''
    for (let i =0 ; i<products.length;i++){
        di.innerHTML += `
        <p>Название</p>
        <div>${products[i].name}</div>
        <p>Описание</p>
        <div>${products[i].opis}</div>
        <p>Цена</p>
        <div>${products[i].money}</div>
        <p>Количество</p>
        <div>${products[i].kolvo}</div>
        <p>Артикул</p>
        <div>${products[i].artic}</div>
        <button onclick="dele(${i})">Удалить товары</button>
        <button onclick="on(${i})">Обновить товары</button>
    `
    }

    
}

