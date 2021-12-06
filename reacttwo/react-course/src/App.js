import React ,{useState}from 'react';
// import Expense from './components/Expense';
import Expenses from "./components/Expenses/Expences"
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';


const dummy_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function  App (){
 const [expenses,setExpense] = useState(dummy_expenses)
 



  const addExpense=(expensData)=>{
    setExpense((prevstate)=>{
      return[
        expensData,
        ...prevstate
       
      ]

    })

  }
 
    return(
       <div>
  
         <NewExpense onAddexpense={addExpense}></NewExpense>
         <Expenses expenses={expenses} ></Expenses>
      
       </div>
    ) 
  
}
 
export default App;
