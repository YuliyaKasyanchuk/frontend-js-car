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
        if(speed>=this.speed && speed<= this.maxSpeed){
            this.speed = speed 
        }
        else if(typeof speed!=='number'){
            this.speed = this.defaultSpeed 
        }
        else{
            this.speed = this.maxSpeed
        }
    }
   
    this.put=function(){
        if(this.passengers.length <= this.seats-1){
             this.passengers.push(true);
         }
        else{
            throw new Error('can\'t be put more than seats')
        }
    
     }

     this.land=function(){
        if(this.passengers.length>0){
             this.passengers.shift(true);
         } 
         else{
            throw new Error('No passengers left')
        }
     }
}
var car=new Car();
module.exports=car;
var car=new Car();
car.drive(100);
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

