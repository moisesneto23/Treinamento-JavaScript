console.log('ola mundo ');

function soma(a, b){
    return a +b;
}

var a= soma(8,3)
var b ;
console.log(a)
b = soma(50,8) // b.soma(8,36) naão funciona
console.log(b)
console.log(soma(a,b))

function duplica(n){
    return n*2
}
function triplixa(n){
    return n*3
}
console.log(duplica(2))
console.log(triplixa(2))

function criaMutiplicador(multiplo){
    return function(n){
        return n * multiplo
    }
}

const casca = criaMutiplicador(5) // função dentro de função
console.dir(casca(5))

/////////////////////////////////////
function criaFuncao(){
    const nome = 'luis';
    return function(){
        return nome;
    }
}
funcao = criaFuncao()

console.dir(funcao)

//////// funncao calback
function rand(min= 1000, max = 3000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num)
}


function f1(callback){
    setTimeout(function(){
        console.log('f11')
        if (callback) callback()
    }, rand())
}
function f2(callback){
    setTimeout(function(){
        console.log('f2')
        if (callback) callback()
    }, rand())
}
function f3(callback){
    setTimeout(function(){
        console.log('f3')
        if (callback) callback()
    }, rand())
}

f1(function(){
    f2(function(){
        f3(function(){
            console.log("ola mundo")
        })
    })
})
f2()
f3()

// outra forma de callback
function ca1(){
    console.log('ou 1 de 1')
     ca2()
     console.log('ou 2 de 1')
}
function ca2(){
    
    ca3()
}
function ca3(){
    console.log('sou ca3 ola mundo')
}
ca1()



// funções imediatas
function qualquer(){
    console.log('issoooo')
}
qualquer();

//criando funcao imediata
(function(){
    console.log('sou uma funcao imediata!!!')
})()
//-----------------------------------------------------

// funções fabrica que retorna objeto
function criaPessoa(nome, sobrenome){
    return {
        get nomeCompleto(){
        return `${nome} ${sobrenome}`;
    } , nome, sobrenome, conta:25, idade: 4, 
        completaIdade: function(){
       return this.idade+=1;
    },
    get numeroConta(){
        return '25reais'
    } 

    
}
}
const p1 = criaPessoa('moises', 'netto silva')
console.log(p1)
console.log(p1.completaIdade()+' anos de idade e tem na conta' + p1.numeroConta)
console.log(p1.nomeCompleto)
var valor = p1.nomeCompleto.split(' ')
console.log(valor)
let primeiroNome= valor.shift()
console.log(valor)
console.log(primeiroNome)

