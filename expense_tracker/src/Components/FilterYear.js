import React from 'react'

const FilterYear = ({year, handleDropdown}) => {
  return (
    <div className='filteryear'>
        <div className='tablename'><b>Expense Table</b></div>
        <div className='fylabel'><b>Filter by Year: </b>
        <select name="years" id="years" onChange={handleDropdown} defaultValue="2024">
            <option value="all">Select Year</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
        </select>
        </div>
        
    </div>
  )
}

export default FilterYear