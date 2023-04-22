import React from 'react'
import './Transaction.css'
import { useState,useEffect } from 'react'



const TransactionCell=(props)=>{
  
return(
  <div className={props.payload.type==='expense'?"cell-expense":"cell-income"}    >
    <span>{props.payload.desc}</span>
    <span>{props.payload.amount}</span>
  </div>
  )
}


const Transaction = (props) => {
const[searchText,updateSearchText]=useState("")
 const [filteredTransaction,updateTransaction]=useState(props.transactions)
 
 const filterData=(searchText)=>

{ if(!searchText|| !searchText.trim().length){
  updateTransaction(props.transactions)
  return;
 }
 let txn= [...props.transactions];
 txn = txn.filter((payload) =>
      payload.desc.toLowerCase().includes(searchText.toLowerCase().trim()),
    );
    updateTransaction(txn);
  }

  useEffect(() => {
    filterData(searchText);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.transactions]);

  return (
    <div className='transaction-container'>
      Transaction
      <input  className='Transaction-input' type="text" placeholder='search' value={searchText}  onChange={(e)=>{updateSearchText(e.target.value); filterData(e.target.value)}} />

{filteredTransaction.length ? filteredTransaction.map((payload)=>
{return<TransactionCell payload={payload}/>}) :""}

    </div>
  )
}

export default Transaction
