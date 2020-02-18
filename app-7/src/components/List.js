import React from 'react';
import ToDo from './ToDo';

class List extends React.Component{
    render(){
        
        let list = this.props.items.map((el, index)=>{
            console.log(el)
            return <ToDo key={index} task={el}/>
        })
        return (
            <div>{list}</div>
            
        )
    }
    
}
export default List;