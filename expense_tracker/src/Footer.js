import React from 'react'

const Footer = ({total,syear}) => {
  const year = new Date();
  return (
    <footer>
      <span>The total Expense for selected year {syear} : {total}</span>
        <p>Copyright &copy; {year.getFullYear()}</p>
       
    </footer>
  )
}

export default Footer