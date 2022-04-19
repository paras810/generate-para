import React, { useState } from 'react';
import data from './data';
function App() {
  let indexNo = 0
  const [count, setCount] = useState(indexNo)
  const [text, setText] = useState([])

  const handleSubmit = (e)=>{
    e.preventDefault()
    let amount = parseInt(count)
    if(count === 0){
      // amount = 1
     alert('Cant generate. So please enter a value')
     }
    setText(data.slice(0,amount)) 
    setCount(0)
   
  }

  return (
  <section className="section-center">
    <h3>generate 1-12 paragraph</h3>
    <form onSubmit={handleSubmit} className="lorem-form">
      <label htmlFor="amount">paragraph:</label>
      <input type="number" name="amount" id="amount" value={count} onChange={(e)=> setCount(e.target.value)} min={(data.length - 1)-(data.length - 1)} max={data.length - 1}  />
      <button type="submit" className='btn'>generate</button>
      
    </form>

    <article className='lorem-text'>
      {/* <ol><li><p></p> {data[0]}</li></ol> */}
      <button className='btn' onClick={()=> setText([]) }>clear All</button>
      {text.map((e,index)=>{
        return(
           <ul key={index}>
             <li><p> {index+1}. {e}</p></li>
           </ul>
        )
      })}
     
    </article>
    {/* {console.log(text)} */}
  </section>
    )
}

export default App;
 