class Toolip{

}

class DomHelper{
    static mobeelemnt(elemntid,newdestination){
        const elemnt=document.getElementById(elemntid)
        const destinationelemnt=document.querySelector(newdestination)
        destinationelemnt.append(elemnt)
    }
}


class projectItem{
constructor(id,updateprojectist){
this.id=id;
this.updateprojectist=updateprojectist
this.connectMoreinfobtn();
this.connecrSwitchbtn()
}


connecrSwitchbtn(){
const projectitemelemnt=document.getElementById(this.id)
const switchbtn=projectitemelemnt.querySelector("button:last-of-type")
switchbtn.addEventListener("click",this.updateprojectist.bind(null,this.id))
}
connectMoreinfobtn(){
    const projectitemelemnt=document.getElementById(this.id)
    const moreinfobtn=projectitemelemnt.querySelector("button:first-of-type")
    // moreinfobtn.addEventListener("click",)
    }
}



class Projectlist{
    projects=[]
    constructor(type){
        this.type=type;
        const prjitems=document.querySelectorAll(`#${type}-projects li`)
       for (const item of prjitems){
           this.projects.push(new projectItem(item.id,this.switchProject.bind(this,item.id)))
       }
       

    }


    setswitchhandlerfunction(switchhandlerfunction){
        this.switchhandlerfunction=switchhandlerfunction
     
    }

    switchProject(projectid){
        this.switchhandlerfunction(this.projects.find(p=>p.id===projectid))
        this.projects=this.projects.filter(p=>p.id!=projectid);
        // const e = document.querySelector(`#${projectid}`);
        // e.parentElement.removeChild(e);
      
       


    }

    addProject(item){
        this.projects.push(item)  
        console.log(item)
        console.log(this)
        DomHelper.mobeelemnt(item.id,`#${this.type}-projects`)
    }


}




class App {
    static init(){
        console.log("let;s begin")
        const acvtibeprojects= new Projectlist("active")
        const finishedprojects= new Projectlist("finished")
        acvtibeprojects.setswitchhandlerfunction(finishedprojects.addProject.bind(finishedprojects))
        finishedprojects.setswitchhandlerfunction(acvtibeprojects.addProject.bind(acvtibeprojects))
    }
}

App.init()