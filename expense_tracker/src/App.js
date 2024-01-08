import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import AddExpense from './AddExpense';
import { useState } from 'react';
import FilterYear from './FilterYear';
import Graph from './Graph';


function App() {
  const [expense, setExpense] = useState([]);
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [year,setYear] = useState('');
  const [items, setItems] = useState(()=>{
    const storedItems = localStorage.getItem('expense_list')
    return storedItems ? JSON.parse(storedItems) : [];
  });

  

  //example of item obj used to store the data
  /*items = []
    {
      id:1,
      date: 03-01-24,
      expense: Apple,
      price: 100
   }
  ]*/

  //this function Adds the new expense to the items State
  const addExpense = (expense,amount,date) =>{
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addExpenseItem = {id: id, date:date, expense: expense, price: amount}
    const listExpense = [...items, addExpenseItem];
    setItems(listExpense);
    localStorage.setItem('expense_list', JSON.stringify(listExpense));
  }

  //this function handles the Calling of the AddExpense func
  const handleExpenseItem = (e) => {
    e.preventDefault();
    addExpense(expense,amount,date);
  }

  //this function handles the year selected and sets it to state
  const handleDropdown = (e) => {
    setYear(e.target.value);
  }


  //this snippet is used to filter the expenses based on the year selected
 const filteredExpenses = year !== "all" ? items.filter((item)=>  
  new Date(item.date).getFullYear().toString() === year): items;
  
  //this function is used to delete the expenses from the State
  const handleDelete = (id) => {
    const listItems = items.filter((item)=>(item.id !== id))
    setItems(listItems)   
    
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
      <Graph filteredExpenses={filteredExpenses}/>  
      <FilterYear year={year} handleDropdown={handleDropdown} />
      <Content items={filteredExpenses} handleDelete={handleDelete}/>
      <Footer year={year}/>
    </div>
  );
}

export default App;
