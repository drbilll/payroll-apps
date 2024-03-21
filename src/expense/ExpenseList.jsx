import ExpenseDetail from "@/expense/ExpenseDetail.jsx";
import {useEffect, useState} from "react";

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6dGdod2F5Y2tubmtqeHdwZ3luIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3MzA5OTYsImV4cCI6MjAyNjMwNjk5Nn0.H5pJVYmtLBro1l73MSRdlFkzmwnkfUU3Feqb1Oo0jm0'
const API_URL = 'https://zztghwaycknnkjxwpgyn.supabase.co/rest/v1'

export default function ExpenseList() {
    const [expenses, setExpenses] = useState([]);

    const getExpenses = async () => {
        const response = await fetch(`${API_URL}/expenses`, {
            method: 'GET', headers: {
                'apikey': API_KEY, 'Authorization': `Bearer ${API_KEY}`
            }
        })


        const expenses = await response.json()

        return expenses.map((expense) => {
            return {
                expense_id: expense.expense_id,
                employee_id: expense.employee_id,
                expense_date: expense.expense_date,
                expense_category: expense.expense_category,
                amount: expense.amount,
                description: expense.description,
                ...expense
            }
        })
    }
    //getExpenses()
    useEffect(() => {

        const fetchData = async () => {
            const expensesFromAPI = await getExpenses()

            setExpenses(expensesFromAPI)
        }

        fetchData()

    }, []);

    return (
        <>
            {
                expenses.map((expense, index) => (<>
                        <ExpenseDetail expense_id={expense.expense_id}
                                       employee_id={expense.employee_id}
                                       expense_date={expense.expense_date}
                                       expense_category={expense.expense_category}
                                       amount={expense.amount}
                                       description={expense.description}
                                       key={index}/>
                    </>

                ))}
        </>
    )
}