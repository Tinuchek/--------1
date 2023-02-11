let q = ''
let w = ''

const calc = document.querySelector('.calc')
const result = document.querySelector('#result')
const btn1 = document.querySelector('.calc_btn1')
const btn2 = document.querySelector('.calc_btn2')
const btn3 = document.querySelector('.calc_btn3')
const btn4 = document.querySelector('.calc_btn4')
const btn5 = document.querySelector('.calc_btn5')
const btn6 = document.querySelector('.calc_btn6')
const btn7 = document.querySelector('.calc_btn7')
const btn8 = document.querySelector('.calc_btn8')
const btn9 = document.querySelector('.calc_btn9')
const nul = document.querySelector('.calc_btn0')
const btn = document.querySelector('.calc_btn')

const ymn = document.querySelector('.calc_btn_operator1')
const razd = document.querySelector('.calc_btn_operator2')
const plec = document.querySelector('.calc_btn_operator3')
const minus = document.querySelector('.calc_btn_operator4')

const C = document.querySelector('.calc_btn_reset')
const rabno = document.querySelector('.calc_btn_equal')

btn1.onclick = function (){
    calc.value += '1'
    q = q + 1
}
btn2.onclick = function (){
    calc.value += '2'
    q = q + 1
}
btn3.onclick = function (){
    calc.value += '3'
    q = q + 1
}
btn4.onclick = function (){
    calc.value += '4'
    q = q + 1
}
btn5.onclick = function (){
    calc.value += '5'
    q = q + 1
}
btn6.onclick = function (){
    calc.value += '6'
    q = q + 1
}
btn7.onclick = function (){
    calc.value += '7'
    q = q + 1
}
btn8.onclick = function (){
    calc.value += '8'
    q = q + 1
}
btn9.onclick = function (){
    calc.value += '9'
    q = q + 1
}
nul.onclick = function (){
    if (q > 0){
        calc.value += '0'
    }
}
btn.onclick = function (){
    calc.value += '.'
}

ymn.onclick = function (){
    calc.value += ' * '
    q = 0
}
razd.onclick = function (){
    calc.value += ' / '
    q = 0
}
plec.onclick = function (){
    calc.value += ' + '
    q = 0
}
minus.onclick = function (){
    calc.value += ' - '
    q = 0
}


rabno.onclick = function(){
    calc.value += '='
}
C.onclick = function(){
    calc.value = ' '
}


rabno.onclick = function(){
    console.log(calc)
    let a = calc.value.split(' ')
    console.log(a);
    switch(a[1]){
        case '-':
            let s = Number(a[0]) - Number(a[2]); 
            calc.value = s          
            break;
        case '+':
            let d = Number(a[0]) + Number(a[2])
            calc.value = d
            break;
        case '*':
            let f = Number(a[0]) * Number(a[2])
            calc.value = f
            break;
        case '/':
            let g = Number(a[0]) / Number(a[2])
            calc.value = g
            break
         
            
    }
    for (let i = 0; i>0; i++){

    }
}

    
