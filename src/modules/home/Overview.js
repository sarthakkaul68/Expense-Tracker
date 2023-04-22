import React, { useState } from 'react'
import "./Overview.css"


const AddTransactionView = (props) => {

  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("income");

  const addTransaction = () => {
    // console.log({type,desc,amount})
    props.toggleAddTxn();
    props.addTransaction({
      type,
      desc,
      amount:Number(amount),
      id:Date.now()
    })

    
    
  }



  return (
    <div className='AddTransactionContainer'>

      <input className='input' type="number" placeholder='Amount' value={amount} onChange={(e) => { setAmount(e.target.value) }} />
      <input className='input'  placeholder='Description' value={desc} onChange={(e) => { setDesc(e.target.value) }} />
      <div className='RadioBox'>
        {/* OR=> defaultCheck={"checked"} */}
        <input type="radio" id='expense' name='type' value="expense" checked={type === "expense"} onChange={(e) => { setType(e.target.value) }} />
        <label htmlFor="expense">Expense</label>
        <input type="radio" id='income' name='type' value="income" checked={type === "income"} onChange={(e) => { setType(e.target.value) }} />
        <label htmlFor="income">Income</label>
      </div>
      <button onClick={(e) => { addTransaction() }} className='AddTransaction'>ADD TRANSACTION</button>
    </div>
  )

}


const Overview = (props) => {
  const [isTxnVisible, toggleAddTxn] = useState(true)
 
  return (
    <div className='overview'>
      overview container
      <div className='BalanceBox'>
        Balance: ₹ {props.income-props.expense}
        <button onClick={() => { toggleAddTxn(!isTxnVisible) }} className='AddTransaction'>{isTxnVisible ? "CANCEL" : "ADD"}</button>
      </div>

      {isTxnVisible && <AddTransactionView toggleAddTxn={toggleAddTxn} addTransaction={props.addTransaction}     />}


      <div className='ExpenseContainer'>

        <div className='ExpenseBox'  >
          expense <span className='expense' >{props.expense}</span>
        </div>
        <div className='ExpenseBox' >
          income <span className='income'>{props.income}</span>
        </div>
      </div>

    </div>
  )
}

export default Overview
