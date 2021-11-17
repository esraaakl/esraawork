console.log("hey from console githup and js advanced tutorial")

// Object//
// oop//
// -encapsulation: grouping related functions and properties to the same obj//
// abstruction: Hide details for simple interface and reduce impact of change//
// inhetience:reduce redandent code//
// polymorohisim: Many Form .overwritefunction to do another functionality with thw same name//

// Object//
// creating Object
// -{}
// -new Object
// -construcor
// -actory function
// -classes
// -getter and setter


let circle ={
    reduis:1,
    location:{
        x:1,
        y:2
    },
    draw: function(){
        console.log("draw")
    }
}
// circle.draw()

// factory faunction is function that return object//
function creatCircle (reduis) {
    return {
        reduis,
    location:{
        x:1,
        y:2
    },
    draw: function(){
        console.log("draw from factory function "+ reduis)
    }

    }
}
let circlef=creatCircle(2)
// circlef.draw()


// constructor
// capital letter and key word this +new

function Circle (r){
// console.log(this)
this.reduis=r;
this.draw=function(){
    console.log("draw from the constructor "+ this.reduis)
}
}
let circlec= new Circle(3)
// circlec.draw()

// note:1- every obj has a constructor property which is the function that is used to construct this obj///
// note:2 -funcions is objects as every fun has properties and methods
// let circlec= Circle.call({},1)
// let circlec= Circle.apply({},[1])

// copied by value/
let x = 10;
let y = x;
x=20;

// copied by ref/
let objx={name:"esraa"}
let objy=objx;
objx.name="oamr"

// pass by value//
let num=10
function increasernum (num){
    num++
}
increasernum(num)
// console.log(num)

// pass by ref//
let numo={value:10}
function increasernum (numo){
    numo.value++
}
increasernum(numo)
// console.log(numo)


// Adding and removing properites//
let age ="last-last name"
circle.method="literal"
circlef.method="factoryfunction"
circlec.method="constrictor"
circlec["name"]="esraa akl"
circlec[age]="akl"

delete circlec.name

// console.log(circle)
// console.log(circlef)
// console.log(circlec)

// looping for in 

for (let key in circlec){
    // console.log(key ,circlec[key],typeof(circlec[key]))
    
}
// console.log(Object.keys(circlec))

if ("reduis" in circlec)
{
    // console.log("there is a reduis in circlec which is "+ circlec.reduis)
}

// abstruction..Hide some details from the consumer//
// 1- you can define it as local variable so replace this with let
// 2-getter and setter.. defineproperties method/
function Circle2 (r){

    let color="red";
    this.color=color;
    this.reduis=r;
    defaultLocation={
        x:0,
        y:0
    }
    // this.getDefaultLocation= function(){
    //     return defaultLocation
    // }
    let computeLocation=function(){}
    this.draw=function(){
        let x ,y ;
        console.log("draw from the constructor "+ this.reduis)
        computeLocation()
    }
    Object.defineProperty(this,"defaultLocationgetandset",{
        get:function(){
            return defaultLocation
        },
        set:function(value){
            if(!value.x || !value.y)
            throw new Error
            defaultLocation=value
        }

    })

    }

    let circlec2= new Circle2(3)
    circlec2.defaultLocationgetandset={x:3,y:3}
    // note : scope (x,y)dies after excutuion but closure not(computeLocation)
 
    function Stopwatch(){
        let duration=0
        let modeon=false
        let starttime,endtime=0
        this.start=function (){
            if (modeon==false)
            {
                modeon=true;
                starttime=new Date();

            }else{
                throw new Error("you alreadt start")
            }

        }
        this.stop=function(){
            if(modeon==true)
            {
                modeon=false;
                endtime=new Date()
                const seconds= (endtime.getTime() -starttime.getTime() )/1000
                duration=duration+seconds
            }else 
            {
                throw new Error("you alreadt start")
            }

        }
        this.rest=function (){
            duration=0
            starttime,endtime=0
            modeon=false

        }

        Object.defineProperty(this,"duration",{
            get:function(){
                return duration
            }

        })

    }
    // ..............................................//

const person ={
    name:"Max",
    age:30,
    hoopy:["sports","cooking"],
    greet: function(){
        console.log("hi max")
    }
}

person.greet()






































