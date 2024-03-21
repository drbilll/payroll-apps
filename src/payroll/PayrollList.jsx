import {useState, useEffect} from 'react';
import PayrollDetail from "@/payroll/PayrollDetail.jsx";

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6dGdod2F5Y2tubmtqeHdwZ3luIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3MzA5OTYsImV4cCI6MjAyNjMwNjk5Nn0.H5pJVYmtLBro1l73MSRdlFkzmwnkfUU3Feqb1Oo0jm0'
const API_URL = 'https://zztghwaycknnkjxwpgyn.supabase.co/rest/v1'

export default function PayrollList() {
    const [payrolls, setPayrolls] = useState([]);

    const getPayrolls = async () => {
        const response = await fetch(`${API_URL}/payrolls`, {
            method: 'GET', headers: {
                'apikey': API_KEY, 'Authorization': `Bearer ${API_KEY}`
            }
        })

        const payrolls = await response.json()
        return payrolls.map((payroll) => {
            return {
                payroll_id: payroll.payroll_id,
                employee_id: payroll.employee_id,
                salary: payroll.salary,
                pay_period_start: payroll.pay_period_start,
                pay_period_end: payroll.pay_period_end,
                taxes_deducted: payroll.taxes_deducted,
                net_pay: payroll.net_pay,
                ...payroll
            }
        })
    }
    //getPayrolls()
    useEffect(() => {

        const fetchData = async () => {
            const payrollsFromAPI = await getPayrolls()

            setPayrolls(payrollsFromAPI)
        }

        fetchData()

    }, []);

    return (
        <>
            {
                payrolls.map((payroll, index) => (<>
                        <PayrollDetail payroll_id={payroll.payroll_id}
                                       employee_id={payroll.employee_id}
                                       salary={payroll.salary}
                                       pay_period_start={payroll.pay_period_start}
                                       pay_period_end={payroll.pay_period_end}
                                       taxes_deducted={payroll.taxes_deducted}
                                       net_pay={payroll.net_pay}
                                       key={index}/>
                    </>

                ))}
        </>
    )
}