import React from 'react';

const AddExpense = ({ expense, amount, date, setExpense, setAmount, setDate, handleExpenseItem }) => {
  return (
    <div className="form-container">
      <form className="expense-form" onSubmit={handleExpenseItem}>
        <div className="form-group">
          <label htmlFor="addexpense">Expense:</label>
          <input
            id="addexpense"
            placeholder='Add Expense'
            type='text'
            value={expense}
            required
            onChange={(e) => setExpense(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="addAmount">Amount:</label>
          <input
            id="addAmount"
            placeholder='Add Amount'
            type='number'
            value={amount}
            required
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="addDate">Expense Date:</label>
          <input
            id="addDate"
            placeholder='Add Expense Date'
            type='date'
            value={date}
            required
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <button className='form-button' type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default AddExpense;
