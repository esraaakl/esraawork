import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {

    render() { 
        
        return <div>
            <button onClick={this.props.handlerest}
            className="btn btn-sm m-2 btn-primary">Reset</button>
           {this.props.counters.map(item=>  <Counter
            onDelete={this.props.handlerdelete} 
            selected={true} 
            item={item}
            key={item.id}
            handlerIncrement={this.props.handlerIncrement}
            >

               {/* <h1>title</h1> */}
           </Counter>)}
        </div>;
    }
}
 
export default Counters;