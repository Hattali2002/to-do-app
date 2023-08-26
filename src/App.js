import React, { useState } from 'react'
import './style.css'

export default function App() { 
  const [article, setArticle] = useState([]);
  const [data, setData] = useState("");

  const changeData = (event) => {
    setData(event.target.value);
  }
  
  const submit = () => {
    if (data.trim() !== "") {
      setArticle(article.concat(data));
      setData("")
    }
  }

  const filter = (element) => {
    const newdata = article.filter(item => item !== element);
    setArticle(newdata);
  }
 

  return (
    <div className="container my-5">
      <div className="heading my-4">
        <h3>TO DO LIST</h3>
      </div>
      <div className="main my-4">
        <div className="input">
          <form>
            <input type="text" placeholder='Add Item' value={data} onChange={changeData} />
          </form>
          <button className='button mx-4' name='add' onClick={submit}>
            <i className="fa-thin fa-plus"></i>
          </button>
        </div>
        <div className="content">
          {article.map((element, index) => {
            return <div key={index} className='my-4'>
              {element}
              <button className='mx-4 buttonDel' name='delete' onClick={()=>{filter(element)}}>
              <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
