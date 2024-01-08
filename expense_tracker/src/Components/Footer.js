import React from 'react'

const Footer = ({year}) => {
  const curryear = new Date();
  const temp = localStorage.getItem('yearTotal')
  const total =  JSON.parse(temp);
  return (
    <footer>
      <span>The Total Expense for selected year {year} is {total}</span>
        <p>Copyright &copy; {curryear.getFullYear()}</p>
       
    </footer>
  )
}

export default Footer