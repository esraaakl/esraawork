
let userchosenkeyname="level"
let person={
    name:"Max",
    [userchosenkeyname]:2,
    age:30,
    hobbies:["sports","cooking"],
    greet:function(){
        console.log("hello max")
    },
    1.5:"hello",

    "yser-nae":"eshshdja"
}
// console.log(person["1.5"])

//1 add value 
// -dot notation 
// -define property but can't change it (Descriptor default)
Object.defineProperty(person,"lastname",{
    value:"esraaaa"
})
// console.log(person.lastname)

//2 deleteproperty
delete  person.age
person.age=undefined;

//3 chang value 
// -dot noatation or braket noatation
// -Object.defineProperty(person, "language", {value:"NO"}) 
// and u can change it normally
Object.defineProperty(person, "name", {value:"Esraa"})

// 4-access 
// -dotnotation
// -bralet notation
let keyname="seen seen-seen"
person[keyname]="Akl"
// console.log(person["seen seen-seen"])
// console.log(person[keyname])
// ----------------------------------------//
// ----------------------------------------//
// ----------------------------------------//
// ----------------------------------------//

console.log("hello esraa")

const addmovie =document.getElementById("add-movie-btn")
const searchbtn =document.getElementById("search-btn")

const movies=[]

// adding movie//?
const addhandler = ( ) => {
const title=document.getElementById("title").value
const extraname=document.getElementById("extra-name").value
const extravalue=document.getElementById("extra-value").value

if (extraname.trim()==="" | extravalue.trim()==="")
{
    return;
}
const newmovie={
    
    get secret(){
        this._secret="top secret"
        return this._secret
    },
    info :{
        // title:title,
        set title(val){ 
        return this._title=val}
        ,
        get title(){
            return this._title},
        [extraname]:extravalue

    },
    id: Math.random(),
    getformatedtitle(){
        console.log(this.info)
      return this.info.title.toUpperCase()
    }
}
newmovie.info.title=title
movies.push(newmovie)
rendermovies();
newmovie._secret="s"
console.log(newmovie.secret)


}


// rendering//?
const rendermovies= ( filter="") => {
    const movielist=document.getElementById("movie-list")
    
    if(movies.length===0){
        movielist.classList.remove("visible")
        return;}
        else{
            movielist.classList.add("visible")
        }
        movielist.innerHTML="";
        const filtermovies= !filter?movies:movies.filter(movie=> 
            movie.info.title.includes(filter)
        )
        filtermovies.forEach(movie=>{

           
            const movieEl=document.createElement("li");
            const {title:newtitle}=movie.info
            const {getformatedtitle}=movie
            let text= movie.getformatedtitle() +" - "
            for (key in movie.info){
                if(key!=="title" && key!== "_title" ) 
                {
                    console.log(movie.info)
                    text = text + `${key} : ${movie.info[key]}`
                }
            }
            movieEl.textContent=text
            movielist.append(movieEl)
        })

    }

///search and filter //

const filter = () => {
    const filterterm=document.getElementById("filter-title").value
    rendermovies(filterterm);
    console.log("filer")

}

addmovie.addEventListener("click",addhandler)
searchbtn.addEventListener("click",filter)

// shallow deep with spread operatpr ?
// let person1 ={
//     name:"max",
//     age:30,
//     hoopy:["cooding","cooking","sports"]
// }
// let person2=person1;
// let person3={...person1}
// let person4={...person1,age:"444"}
// let person5={...person1,hoopy:[...person1.hoopy]}
// let person2=Object.assign({},person1)


// object destrucing //
// const {info, ...other}=movie
// console.log(info)
// console.log(other)

































