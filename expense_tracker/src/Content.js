import React from 'react'

const Content = ({items, handleDelete}) => {
  
  return (
    <main>
        <ul className='object-list'>
            {items ? items.map((item) => (
                <li key = {item.id} className='container'>
                    <div className='box'><p>{item.date}</p></div>
                    <div className='box'><p>{item.expense}</p></div>
                    <div className='box'><p>{item.price}</p></div>
                    <div className='box'><button onClick={()=>handleDelete(item.id)}>Delete</button></div>
                </li>
            )):<p>"No Expense for the Selected Year"</p>}
        </ul>
    </main>
  )
}

export default Content