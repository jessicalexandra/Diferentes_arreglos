let estuduantes=Array(
    {nombre: "juan",edad: 33,cc:"12234"},
    {nombre: "felipe",edad: 43,cc:"12235"},
    {nombre: "maria",edad: 30, cc:"12274"}

)

// mapeando el arreglo
let mapa=estuduantes.map(function(estudiante){
    estudiante.nota=1
    estudiante.edad=estudiante.edad-1
   return(estudiante) 
})
console.log(mapa)