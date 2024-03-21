import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"


export default function ExpenseDetail({expense_id, employee_id, expense_date, expense_category, amount, description}) {

    return (<>
        <Card>
            <CardHeader>
                <CardTitle>Expense ID: {expense_id}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Employee ID: { employee_id }</p>
                <p>Date: {expense_date}</p>
                <p>Category: {expense_category}</p>
                <p>Amount: ${amount}</p>
                <p>Description: {description}</p>
            </CardContent>
        </Card>

    </>)
}