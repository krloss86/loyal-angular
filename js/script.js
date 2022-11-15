/*codigo javascript */

//variable
//var | let | const

//var: global
//let variable local
//const constante
var edad = 10;
let edad2 = 105;
const edad3 = 205;

//console:consola | alert: pantalla
console.log(edad); //funcion 
//alert(edad2);//funciones ya creadas

const alto = false;
const nombre = "carlos";

//edad = nombre;

//saber el tipo de una variale
console.log(typeof edad);
console.log(typeof nombre);
console.log(typeof alto);

//"10"
const edadStr = "150";
const edadNumber = Number(edadStr); //NaN
console.log(edadNumber);

//TEXTO A NUMERO
//+
const edadmas = +edadStr;
console.log(edadmas);

//parseInt()
const edadParseInt = parseInt(edadStr);
console.log(edadParseInt);

//STRING
const apellido = "lopez";

//uppercase
console.log(apellido.toUpperCase());

//lowercase
console.log(apellido.toLocaleLowerCase());

//length
console.log(apellido.length);

//repetir
console.log("hola".repeat(5));

const otroApellido = apellido.replace("op", "ooopp");

console.log(otroApellido);

//si no defino el tipo es global
otra = 10;

console.log(otra);

//objetos
const persona = {
    dni: '313223',
    nombre: 'carlos',
    edad: 36
};
console.log(persona);
/*
persona = {
    dni: '313223',
    nombre: 'carlos',
    edad: 36  
}
*/

//cambiar el valor de sos atributos
persona.dni = '321321231';
console.log(persona);

console.log(typeof(persona));

let vx = true;//que valor tiene? ninguno > Undefined
console.log(vx);
// alert(typeof(vx))

//null
const nulo = null;
console.log(nulo);
//alert(typeof(nulo))

// OPERADORES
//aritmeticos
// + - / * 
console.log(1 + 1);
console.log(1 - 1);
console.log(1 * 1);
console.log(1 / 1);
console.log(1 / 0);

//relacionales retornan un boolean
// > < >= <= 
console.log('1 < 1',1 < 1); // ?? false
console.log('1 === 1', 1 === 1); // ?? true
console.log('1 <= 1', 1 <= 1) // true
console.log('2 != 3', 2 !== 3);

//=== ????
console.log("2" == 2);
console.log("2" === 2);

//tipado debil

//logico
//?? && || ! xor  > boolean | true o false

const username = 'user000';
const password = '1234';

const valido = (username === 'user000' && password === '1234');
console.log('valido',valido);
console.log('!valido',!valido);

const oValido = (username === 'user00' || password === '134');
console.log('oValido', oValido);
console.log('!oValido', !oValido);

//definir funciones
function saludar () {
    console.log("hola");
}

//invocar???
saludar();

function saludarConReturn() {
    return "hola dentro de saludar";
}

const retornoDeLaFuncion = saludarConReturn();//??
console.log(retornoDeLaFuncion);

//FUNCIONES CON PARAMETROS
function calcular(param1,param2, op) {
    //si op = + => sumar
    //si op = - => restar
    //si op = / > dividir
    //si op = * > multiplicar
    let res;
    if(op === '+') {        
        res = Number(param1) + parseInt(param2);//???
    }
    if(op === '-') {
        res = Number(param1) - parseInt(param2);//???
    }
    if(op === '/') {
        res = Number(param1) / parseInt(param2);//???
    }
    if(op === '*') {
        res = Number(param1) * parseInt(param2);//???
    }
    
    return res || `${op} operación inválida`;//alt+96
}

const resultado = calcular(100,2,'88');
console.log(resultado);

function padre(url,var1) {
    function hija() {
        return `${url}/${var1}`;
    }
    return hija();
}

//api/client/6
let fHija = padre('http://api/client',1);

fHija = padre('http://otroapi/recurso',1);

//switch / else
function calcularV2(param1,param2, op) {
    //si op = + => sumar
    //si op = - => restar
    //si op = / > dividir
    //si op = * > multiplicar
    let res;
    if(op === '+') {        
        res = Number(param1) + parseInt(param2);//???
    } else {
        if(op === '-') {
            res = Number(param1) - parseInt(param2);//???
        }else {
            if(op === '/') {
                res = Number(param1) / parseInt(param2);//???
            }else {
                if(op === '*') {
                    res = Number(param1) * parseInt(param2);//???
                }
            }
        }
    }    
    return res || `${op} operación inválida`;//alt+96
}

function calcularV2(param1,param2, op) {
    //si op = + => sumar
    //si op = - => restar
    //si op = / > dividir
    //si op = * > multiplicar
    let res;
    if(op === '+') {        
        res = Number(param1) + parseInt(param2);//???
    }else if(op === '-') {
        res = Number(param1) - parseInt(param2);//???
    } else if(op === '/') {
        res = Number(param1) / parseInt(param2);//???
    }else if(op === '*') {
        res = Number(param1) * parseInt(param2);//???
    }else {
        res = `${op} operación inválida`;
    }
    return res;//alt+96
}

function calcularV2(param1,param2, op) {
    //si op = + => sumar
    //si op = - => restar
    //si op = / > dividir
    //si op = * > multiplicar
    let res;
    switch(op) {
        case '+': 
            res = Number(param1) + parseInt(param2);//???
            break;
        case '-': 
            res = Number(param1) - parseInt(param2);//???
            break;
        case '/': 
            res = Number(param1) / parseInt(param2);//???
            break;
        case '*': 
            res = Number(param1) * parseInt(param2);//???
            break;
        default : 
            res  = `${op} operación inválida`;
    }
    return res;
}


//array/arreglos/vectores
const edades = [10,20,30];
//tamaño es 3
//0,1,2

//agregar elementos
edades.push(40);

console.log(edades[3]);

//recorrermos un vector?

//for conoces de antemano el tamaño
//foreach earch: idem
//while: no conoces el tamaño, pero si la condicion de corte
 //evalua antes de inicar el ciclo: 
//do; while :idem
 //evalua despues de iniciar : garantiza al menos una vez

 for(let i=0;i < edades.length; i++) {
    const aux = edades[i]
    console.log(`${i}`,aux);
 }

 //foeach
edades.forEach(aux => console.log(aux));

//definicion de funciones:
function fx() {

}

fx = function() {

}

fx = (param1,param2) => {
    return param1 + param2;
}

//invocar 
const algo = fx('a','b');

console.log(algo);

//funcion que recibe funcion
const x = ( fy, px ) => {//callback
    console.log('ejecutando x(fy,px)');
    return fy(px)
}

//invocar x
const f = (px) => { 
    console.log("hace nada")
};

x(f,'curso angular loyal');

//filter/map/every/some/reduce

const apellidos = [
    {
        id:1,
        apellido:'CAMPS',
        direccion: {
            calle: 'calle 13',
            altura: 1234
        }
    },
    {
        id:2,
        apellido:'REYES',
        direccion: {
            calle: 'calle 13',
            altura: 1234
        }
    },
    {
        id:3,
        apellido:'GOMEZ',
        direccion: {
            calle: 'calle 13',
            altura: 1234
        }
    },
    {
        id:4,
        apellido:'ZAMORA',
        direccion: {
            calle: 'calle 13',
            altura: 1234
        }
    }
];

apellidos.push(
    {
        id:5,  
        apellido:'ZAMORA',      
    }
);

console.log('apellidos',apellidos);

//?? filtrar los gomez
//metodo filter de array
const listaGomez = apellidos.filter(x => x.apellido === 'GOMEZ');
console.log(listaGomez);

//metodo map() del array
//[{id,apellido}]
const ids = apellidos.map(x =>{
    return {id: x.id, apellido:x.apellido}
});
console.log(ids);

//every
const todosZomora = apellidos.every(x => x.id > 0);//boolean 
console.log('x.id > 0', todosZomora);

//some
const existeZamora = apellidos.some(x => x.apellido === 'ZAMORA');//
console.log('existeZamora',existeZamora);

// const apellidosSinEl1 = apellidos.shift(1);
// console.log(apellidosSinEl1);

apellidos.splice(1,2)
console.log(apellidos);