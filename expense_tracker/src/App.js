import './App.css';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import AddExpense from './AddExpense';
import { useState } from 'react';


function App() {
  const [expense, setExpense] = useState([]);
  const [amount, setAmount] = useState([]);
  const [date, setDate] = useState([]);
 // const [total,setTotal] =useState([]);
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('expense_list')));

  /*items = []
    {
      id:1,
      date: 03-01-24,
      expense: Apple,
      price: 100
   }
  ]*/

  const addExpense = (expense,amount,date) =>{
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addExpenseItem = {id: id, date:date, expense: expense, price: amount}
    const listExpense = [...items, addExpenseItem];
    setItems(listExpense);
    localStorage.setItem('expense_list', JSON.stringify(listExpense));
  }


  const handleExpenseItem = (e) => {
    e.preventDefault();
    console.log(expense,amount,date);
    addExpense(expense,amount,date);
  }

  return (
    <div>
      <Header />
      <AddExpense 
        expense = {expense} 
        amount = {amount} 
        data={date} 
        setExpense = {setExpense}
        setAmount = {setAmount}
        setDate = {setDate}
        handleExpenseItem={handleExpenseItem} 
        />
      <Content items={items}/>
      <Footer />
    </div>
  );
}

export default App;
