import React ,{useState}from 'react'
import Content from './content'

function Home() {
    const [color,setColor] = useState("red");
    const [user,setUser]= useState({
        name:"sri",
        age:13,
        city:"chennai"
    })

   

    const handleChange=(event)=>{
       
        setUser(prevState=>{
            return{...prevState,name:[event.target.value]}

        })
    }
  return (
    <>
    <div>home {color}</div>
    <button onClick={()=>setColor('blue')}>click here</button>
    <input type='text' onChange={(eve)=>handleChange(eve)}></input>
    <div>{user.name}</div>
    <Content />
    </>
  )
}

export default Home;