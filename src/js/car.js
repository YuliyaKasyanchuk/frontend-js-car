'use strict';



 function Car(){ 
    this.color = "white"
    this.dours = 4 
    this.speed = 0
    this.defaultSpeed= 60
    this.maxSpeed=100
    this.seats= 4
    this.passengers=[]
    this.drive = function(speed){ 
        if(speed>=0 && speed<=100){
            this.speed = speed 
        }
        else if(typeof speed!=='number'){
            this.speed = this.defaultSpeed 
        }
        else{
            throw new Error('To big speed!')
        }
    }
   
    this.put=function(){
        if(this.passengers.length <= this.seats-1){
             this.passengers.push(true);
         }
        else{
            throw new Error('Too many passengers')
        }
    
     }

     this.land=function(){
        if(this.passengers.length >0){
             this.passengers.shift(true);
         } 
         else{
            throw new Error('No passengers left')
        }
     }
}

var car=new Car();
car.drive();
console.log(car.speed);
car.put();
car.put();
car.put();
car.put();
console.log(car.passengers);
car.land();
car.land();
car.land();

console.log(car.passengers);

