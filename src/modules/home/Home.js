import React, { useEffect, useState } from 'react'
import Overview from './Overview'
import Transaction from './Transaction'


const Home = (props) => {
  const[transactions,updateTransactions]=useState([]);
  const[expense,updateExpense]=useState(0);
  const[income,updateIncome]=useState(0);

  const addTransaction=(payload)=>{
    //  console.log(transactions)
    //  console.log(payload)
    const transactionArray=[...transactions];
    transactionArray.push(payload);
    updateTransactions(transactionArray)
  }

  const calculateBalance=()=>{

    let inc=0;
    let exp=0;
//  maybe here payload is a UNIVERSALLY ACCEPTED ARRAY that represents the values added 
// in the input fields and from the action of clicking the button add transaction 
  
    transactions.map((payload)=>{
  return payload.type==="expense"?
      (exp=exp +payload.amount):(inc=inc +payload.amount) 
    });

    updateExpense(exp);
    updateIncome(inc);

  }

  useEffect(
    ()=>{calculateBalance()},
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [transactions]
  )

  
  return (
    <div className='container'>
      Home
      <Overview addTransaction={addTransaction} income={income} expense={expense}  />
      <Transaction transactions={transactions} />
        </div>
  )
}

export default Home
