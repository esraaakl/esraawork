import React, { Component } from 'react';


class Counter  extends Component {

    // state={
    //     value:0
    // }
    

    // componentDidMount(){
    //     this.setState({
    //         value:this.props.item.value
    //     })
     
    // }
    constructor(props){
        super()
    //   this.handlerIncrement=this.handlerIncrement.bind(this)
    
    }


    

    formatCount(){
        const value=this.props.item.value
        return value===0?<h1>zero</h1>:<h1>{value}</h1>
    }

    // rendertag(){
    // if (this.state.tags.length===0)
    // {
    //     return <p>there are no tags</p>

    // }

    // return  <ul>
    // {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
    //         </ul>

    // }
    getvadgeclasses(){
        let classes = "badge m-2  badge-";
        classes += (this.props.item.value === 0) ? "warning" : "primary";
        return classes;
    }
 

    render() { 
       
        return (
            <div>
                {/* {this.props.children} */}
                <span style={{fontSize:20}} className={this.getvadgeclasses()}>{this.formatCount()}</span>
                <button onClick={()=>this.props.handlerIncrement(this.props.item)} className="btn btn-sm btn-secondary m-2 p-2">  Increment+</button>
               {/* {this.rendertag()} */}
               <button  onClick={()=>this.props.onDelete(this.props.item.id)}  className="btn btn-danger m-2 p-2 btn-sm">Delete</button>
            </div>
        )
    }

   
}
 
export default Counter;
