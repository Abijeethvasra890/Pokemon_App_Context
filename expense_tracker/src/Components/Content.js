import React from 'react';

const Content = ({ items, handleDelete }) => {
  return (
    <main>
      {items && items.length > 0 ? (
        <table className='expense-table'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Expense</th>
              <th>Price(INR)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.expense}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <center><p>"No Expense for the Selected Year"</p></center>
      )}
    </main>
  );
};

export default Content;
