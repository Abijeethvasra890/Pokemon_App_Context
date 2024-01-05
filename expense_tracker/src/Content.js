import React from 'react'

const Content = ({items}) => {
  
  return (
    <main>
        <ul className='object-list'>
            {items.map((item) => (
                <li key = {item.id} className='container'>
                    <div className='box'><p>{item.date}</p></div>
                    <div className='box'><p>{item.expense}</p></div>
                    <div className='box'><p>{item.price}</p></div>
                </li>
            ))}
        </ul>
    </main>
  )
}

export default Content