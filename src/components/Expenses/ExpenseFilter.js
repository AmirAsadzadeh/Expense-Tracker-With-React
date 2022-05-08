import './ExpenseFilter.css'
import React from 'react'

function ExpenseFilter(){
    return <div className='expense__filter'>
        <select name="expense-filter" id="expense-filter" >
            <option value="option 1">option 1</option>
            <option value="option 2">option 2</option>
            <option value="option 3">option 3</option>
            <option value="option 4">option 4</option>
        </select>
    </div>
}

export default ExpenseFilter