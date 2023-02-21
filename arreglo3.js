let equipos=[
    {nomre:"atlentico nacional",titulos:32},
    {nombre:"deportivo independiente medellin", titulos:15},
    {nombre:"junio de barranquilla",titulos:7}
]

let sumaDeTitulos=0
equipos.forEach(function(equipo){
   sumaDeTitulos=sumaDeTitulos+equipo.titulos
})
console.log(sumaDeTitulos)
