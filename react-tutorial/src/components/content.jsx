import React ,{ useReducer}from 'react'
import PropTypes from 'prop-types';


function Content(props) {
    const reducer=(state,action)=>{
       switch(action.type){
        case "increment":
            return {count:state.count+1}
         case "decrement":
            return {count:state.count-1}
         default:
            return state       
       }      

    }

    const [state,dispatch]= useReducer(reducer,{count:0})
  return (
    <>
    <div>content</div>
    <div>this is useReducer</div>
    <button onClick={()=>dispatch({type:"increment"})}>click here</button>
    <div>{state.count}</div>
    <div>{props.name}</div>
    </>
  )
}

Content.propTypes={
    name:PropTypes.string
}

Content.defaultProps={
    name:'kumar',
    age:18
}
export default Content