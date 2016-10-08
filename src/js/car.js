'use strict';



 function Car(){ 
    this.color = "white"
    this.dours = 4 
    this.speed = 0
    this.defaultSpeed = 60
    this.maxSpeed = 100
    this.seats = 4
    this.passengers = []
   
    this.drive = function(speed){ 
        if((speed >= this.speed && speed <= this.maxSpeed) && (this.passengers.length !== 0)){
            this.speed = speed 
        }
        else if ((speed >= this.speed && speed <= this.maxSpeed) && (this.passengers.length === 0)){
            this.speed = 0
        }
         else if (this.passengers.length === 0){
            this.speed = 0
        }
        else if(typeof speed !== 'number'){
            this.speed = this.defaultSpeed 
        }
        else{
            this.speed = this.maxSpeed
        }
    }
   
    this.put = function(){
        if(this.passengers.length <= this.seats - 1){
             this.passengers.push(true);
         }
        else{
            this.passengers.length = this.seats;
        }
    
     }

     this.land = function(){
        if(this.passengers.length > 0){
             this.passengers.shift(true);
         } 
         else{
           this.speed = 0;
        }
     }
}
var car = new Car();
module.exports = car;
var car = new Car();

