let inmuebles=[
    {id:1,nombre: "el vip", direccion:"cl 40 53-53"},
    {id:2,nombre: "provenza", direccion:"cl 40 54-53"},
    {id:3,nombre: "el raudal", direccion:"cl 40 43-53"},
]

let buscador =inmuebles.find(function(inmueble){
    return(inmueble.id==1)
})
console.log(buscador)

let buscador2=inmuebles.filter(function(inmueble){
    return(inmueble.id==1)
})
console.log(buscador2)

let buscador3=inmuebles.some(function(inmueble){
    return(inmueble.id==1)
})
console.log(buscador3)