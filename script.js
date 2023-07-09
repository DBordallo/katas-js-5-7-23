// 1

let idioma = "aleman"

function felicitar() {
if (idioma === "español") {
    console.log("¡Feliz cumpleaños Pepita!")
} else if (idioma ==="ingles") {
    console.log("Happy birthday Pepita!")
} else if (idioma === "aleman") {
    console.log("Alles Gute zum Geburtstag, Pepita!")
} else {
    console.log("🎂🎂🎂🎂🎂")
}
}

felicitar()




//2
function getRandomInt(max) {
    return Math.floor(Math.random() * max)+1;
  }
  console.log(getRandomInt(6));





//3
  const tablaMultiplicar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const number = 5

tablaMultiplicar.forEach((element) => {
  console.log(element*number)
})





//4
const sleepSheep = [true,  true,  true, false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true, false]

    let sleep = sleepSheep.filter(Sheep => Sheep === true)
    console.log(sleep.length)





//5
const earth = {
    sunDistance : 150000000,
    nextPlanet: "Venus",
    backPlanet: "Mars",
    composition : ["nitrógeno", "oxígeno", "argón"],  
}
earth.hello = function() {
    console.log("Hola soy el planeta tierra 🌍")
}  

earth.hello()

earth.satelite = "Luna"
earth.life = true
delete earth.satelite

console.log(earth)


//6

class Planeta {
    constructor(nombre, distanciaAlSol, planetasVecinos, satelites) {
      this.nombre = nombre;
      this.distanciaAlSol = distanciaAlSol;
      this.planetasVecinos = planetasVecinos;
      this.satelites = satelites;
    }
  
    saludar() {
      console.log(`¡Hola! Soy el planeta ${this.nombre}.`);
    }
  }
  
  // Creación de instancias de planetas
  const tierra = new Planeta("Tierra", 149.6e6, ["Marte", "Venus"], 1);
  const marte = new Planeta("Marte", 227.9e6, ["Tierra", "Júpiter"], 2);
  
  // Accediendo a las propiedades y llamando al método de los planetas
  console.log(tierra.nombre); 
  console.log(tierra.distanciaAlSol); 
  console.log(tierra.planetasVecinos); 
  console.log(tierra.satelites); 
  tierra.saludar(); 
  
  console.log(marte.nombre); 
  console.log(marte.distanciaAlSol); 
  console.log(marte.planetasVecinos); 
  console.log(marte.satelites);
  marte.saludar(); 

