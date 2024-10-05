//4 pilares

//Abstracción => Importa más el QUÉ que el COMO

const calcularSumaDeNumeros = (...numeros) => {
    const numerosNormalizados = numeros.filter(numero => typeof (Number(numero) === 'number'))
    const totalSuma = numerosNormalizados.reduce((accum, numero) => {
        return accum + numero
    }, 0)
    return totalSuma
}

const result = calcularSumaDeNumeros(5,12,15,20)
console.log(result)



const persona = {
    nombre: 'juan',
    apellido: 'Manriquez',
    edad: 25
}

const { nombre, apellido, edad } = persona

console.log(nombre, apellido, edad)
//Encapsulamiento => Proteger las propiedades privadas de un objeto

//Herencia => Traspaso de propiedades y métodos desde las clases padres a las clases hijas


//Polimorfismo => La capacidad de adaptar los métodos entre padres e hijos