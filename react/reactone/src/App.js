import React from "react";
// import Counter from "./components/counter";
// import reactDom from "react-dom";
import Counters from "./components/counters";
import Navbar from "./components/Navbar";

class App extends React.Component {

  state={
    counters:[{id:1,value:0},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:1}
    ]
}

handlerIncrement=(item)=>{
    const counters=[...this.state.counters]
    const index =counters.indexOf(item)
    counters[index]={...this.state.counters[index]}
    counters[index].value++
    this.setState({counters:counters})

}


handlerdelete=(counterid)=>{
    console.log("event delete clicked",counterid)
    const counters=this.state.counters.filter(c=>counterid!==c.id)
    this.setState({counters})
}
handlerest=()=>{
   const counters= this.state.counters.map(c=>{
        c.value=0
        return c}
       
    )
    console.log(counters)
    console.log(this.state.counters)
    this.setState({counters})
   
}
  render() {
    return (
      <React.Fragment>
        <Navbar total={this.state.counters.filter(c=>c.value>0).length}></Navbar>
        <main className="container">
          <Counters 
          handlerIncrement={this.handlerIncrement}
          handlerdelete={this.handlerdelete}
          counters={this.state.counters}
          handlerest={this.handlerest}>
          </Counters>
        </main>
      </React.Fragment>
    )
  }
}

export default App;
