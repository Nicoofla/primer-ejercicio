const superHeroesData = require("./datos")


const funcionesSuperheroes={
datos: superHeroesData,

nombres: function () {
        this.datos.forEach((personaje) => {
        return  console.log(`
        ~~~~~~~~~~~~~~~~~~~~~
           ${personaje.nombre}
        *¨*¨*¨*¨*¨*¨*¨*¨*¨*¨*
        `)});
},
nombre: function (nombre) {
    const data= this.datos.find((personaje)=>{
      return personaje.nombre === nombre }) 
 
     return data       
},
equipo: function(equipo) {
  const equipos= this.datos.filter((datos)=>
  {return datos.equipo = equipo})
return equipos
},
promedio: function calcularPromedioEdad(datos) {
  const sumaDeEdades = this.datos.reduce((acumulador, valorActual) => acumulador + valorActual.edad, 0);
  const promedio = sumaDeEdades / this.datos.length;
  return promedio;
}

}



console.log(funcionesSuperheroes.promedio());
    

    
// console.log(funcionesSuperheroes.equipo("vengadores"))


// console.log(funcionesSuperheroes.nombre("Iron Man"));