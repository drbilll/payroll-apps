
import {useEffect, useState} from "react";
import EmployeeDetail from "@/employee/EmployeeDetail.jsx";

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6dGdod2F5Y2tubmtqeHdwZ3luIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3MzA5OTYsImV4cCI6MjAyNjMwNjk5Nn0.H5pJVYmtLBro1l73MSRdlFkzmwnkfUU3Feqb1Oo0jm0'
const API_URL = 'https://zztghwaycknnkjxwpgyn.supabase.co/rest/v1'

export default function EmployeeList() {
    const [employees, setEmployees] = useState([]);

    const getEmployees = async () => {
        const response = await fetch(`${API_URL}/employees`, {
            method: 'GET', headers: {
                'apikey': API_KEY, 'Authorization': `Bearer ${API_KEY}`
            }
        })

        const employees = await response.json()
        return employees.map((employee) => {
            return {
                employeeId: employee.employee_id,
                firstName: employee.first_name,
                lastName: employee.last_name,
                emailId: employee.email,
                phoneNumber: employee.phone_number,
                joinDate: employee.hire_date,
                ...employee
            }
        })
    }

// call getEmployee function
    useEffect(() => {

        const fetchData = async () => {
            const employeesFromAPI = await getEmployees()

            setEmployees(employeesFromAPI)
        }
        fetchData()

    }, []);

    return (
        <>
            {
                employees.map((employee, index) => (<>
                    <EmployeeDetail employeeId={employee.employeeId}
                                    firstName={employee.firstName}
                                    lastName={employee.lastName}
                                    email={employee.emailId}
                                    phoneNumber={employee.phoneNumber}
                                    joinDate={employee.joinDate}
                                    key={index}/>
            </>

            ))}
        </>
    )
}