let numeros=[10,20,30,40,50,60,70,80,90,100]
// filtrar los numros mayores a 50

// mapear el filtro y restarle a cada elemento del arreglo 10

// necesito encontrar el numero 10

let mayora50=numeros.filter(numero=>numero>50)
console.log(mayora50)

let resta=mayora50.map(function(numero){
return numero-10;
})
console.log(resta)

let buscar=resta.find(function(numero){
    return numero===10;
})
console.log(buscar)