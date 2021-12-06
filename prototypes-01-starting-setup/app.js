// class AgedPerson{
//     printage(){
//         console.log(this.age);
//     }
// }


// class Person extends AgedPerson {
//     name="max"
//     constructor(){
//         super()
//         this.age="30"

//     }

//     greet(){
//         console.log("hello i am "+ this.name+"and i am "+this.age)
//     }

// }
// let person1= new Person()
// console.log(person1)


// function Person (){
   
//     this.age=10;
//     this.name="max";
//     this.greet=function(){
//     console.log("hello i am "+ this.name+"and i am "+this.age)
//             }
// }

// Person.prototype.esraa="true"
// let person1= new Person()
// person1.__proto__.level=1

// console.log(Person.prototype)
// console.log(person1.__proto__)
// // console.dir(Person)
// console.log(person1)

// const course ={
//     title:'js',
//     rating:5
// }


// course.printrating=function(){
//     console.log("haha")
// }
// course.printrating();
// Object.setPrototypeOf(course,{...course.__proto__,
// greet:function(){
//     console.log("hello")
// }
// })

// console.log(course)

// console.log(Object.getPrototypeOf(course)===course.__proto__)

// const student = Object.create({printprogress:function(){}},{lastname:{
//     value:"akl"
// }})
// student.name="esraa"
// Object.defineProperty(student,"level",{
//     enumerable:true,
//     value:10
// })

// console.log(Object.getOwnPropertyDescriptor(student,"lastname"))






// function Animal (name, energy) {
//     this.name = name
//     this.energy = energy
//   }
//   Animal.prototype.eat = function (amount) {
//     console.log(`${this.name} is eating.`)
//     this.energy += amount
//   }
  
//   Animal.prototype.sleep = function (length) {
//     console.log(`${this.name} is sleeping.`)
//     this.energy += length
//   }
  
//   Animal.prototype.play = function (length) {
//     console.log(`${this.name} is playing.`)
//     this.energy -= length
//   }




//   function Dog (name, energy, breed) {
//     //   makan el super//
//     Animal.call(this, name, energy)
//     this.breed = breed
//   }



//   Dog.prototype = Object.create(Animal.prototype)
 
 


//   const animal=new Animal("esraa",11)
//   console.log(animal)

//   const charlie = new Dog('Charlie', 10, 'Goldendoodle')
//   console.log(charlie)
// console.log(charlie.__proto__.__proto__==animal.__proto__)

// Dog.prototype.bark = function () {
//     console.log('Woof Woof!')
//     this.energy -= .1
//   }




