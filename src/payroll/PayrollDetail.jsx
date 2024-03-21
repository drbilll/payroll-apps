import {Card, CardContent, CardHeader, CardTitle,} from "@/components/ui/card"


export default function PayrollDetail({payroll_id, employee_id, salary, pay_period_start, pay_period_end, taxes_deducted, net_pay}) {

    return (<>
        <Card>
            <CardHeader>
                <CardTitle>Payroll ID: {payroll_id}e</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Employee ID: { employee_id }</p>
                <p>Salary: ${salary}</p>
                <p>Pay start date: {pay_period_start}</p>
                <p>Pay end date: {pay_period_end}</p>
                <p>Tax deduction: ${taxes_deducted}</p>
                <p>Net pay: ${net_pay}</p>
            </CardContent>
        </Card>

    </>)
}