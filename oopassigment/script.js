console.log("hello assigment ")

class Course {

    name="esraa"
    #price
    
    constructor(title,length,price){
        this.title=title;
        this.length=length;
        this._price=price;
        console.log(this)
       
       

    }

    get price(){
        return this._price
    }

    set price(value){
        this._price=value
    }

    calucalating (){
        let sum=this.length*this.#price
        console.log(sum)
    }

    summary(){
        let str=`bla bla bla bla "${this.title}"" and costs ${this.price}`
        console.log(str)
    }
}

const course1 = new Course("js",12,88)
const course2 = new Course("html",1,880)
// console.log(course1.title)
console.log(course2)

course1.calucalating()
course1.summary()

class practicaclass  extends Course{
constructor(numofec,title,length,price)
{
    super(title,length,price)
    this.numofec=numofec
    console.log(this)
 

}
publish(){
    console.log("herllo from therotical class")
    console.log(this.name)
    
}
}

class theroticalclass extends Course{

    constructor(title,length,price)
{
    super(title,length,price)
}

}

let newcourse= new practicaclass(33,"css",33,44)
newcourse.publish()
