//Funciones constructoras (Clases)

/* 
//funcion constructora
var Clase = function(){
    //propiedad - agregas un valor
this.name = "Juan"
   //metodo 
this.setName = function(nombre){
     this.name = nombre;
}
     this.getName = function(){
       return this.name;
     }
}
 //instanciar objetos 
 var objeto1 = new Clase();
 var objeto2 = new Clase();

objeto2.setName("Carlos");

console.log(objeto1.getName());
console.log(objeto2.getName());

document.write(objeto1.getName()+'<br>');
document.write(objeto2.getName());
*/


//sirve como prototipo para crear nuevos ejemplos 
//para acceder a alguna propiedad o metodo de esta funcion desde fuera se utiliza la palabra reservada this 
//setName - Modifica el valor de una propiedad 
//getName - este metodo nos va a servir para mostrar el valor de la propiedad name 
// por cada objeto creado se vuelve a crear name, setName, getName el script va a tener un rendidmeinto lento y poca memoria usar la propiedad prototype
// que va a hacer que cada que instacie el objeto solaentese instancia la clase constructora y no todo lo demas

//propiedad protype nos ayuda a solucionar el problema de rendimiento cuando queramos instanciar varis objetos de una mismo clase o funcion constructora la cual ya contiene todas las propiedades o metodos declarados  
//esta propiedad nos va a permitir añadir propiedades o metodos a una clase o funcion constructora 

//Funcion constructora con prototype

var clase = function(){


}
 
  //esta es la primer proiedad declarada
clase.prototype.name = "Paulo";

clase.prototype.setName = function(nombre) {
    //primer metodo declarado 
    this.name = nombre;
}
    //segundo metodo declarado
clase.prototype.getName = function(){
    return this.name;
}


//instanciar objetos 
var objeto1 = new clase();
var objeto2 = new clase();

objeto2.setName("Cesar");

console.log(objeto1.getName());
console.log(objeto2.getName());

document.write(objeto1.getName()+'<br>');
document.write(objeto2.getName());




//cuandocreamos una funcion constructora java Scrip la asigna automaticamente es por eso que la podemos utilizar aunque no este declarada dentro de esta

