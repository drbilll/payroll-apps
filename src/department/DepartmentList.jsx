import {useEffect, useState} from "react";
import DepartmentDetail from "@/department/DepartmentDetail.jsx";

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6dGdod2F5Y2tubmtqeHdwZ3luIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3MzA5OTYsImV4cCI6MjAyNjMwNjk5Nn0.H5pJVYmtLBro1l73MSRdlFkzmwnkfUU3Feqb1Oo0jm0'
const API_URL = 'https://zztghwaycknnkjxwpgyn.supabase.co/rest/v1'

export default function DepartmentList() {
    const [departments, setDepartment] = useState([]);

    const getDepartment = async () => {
        const response = await fetch(`${API_URL}/departments`, {
            method: 'GET', headers: {
                'apikey': API_KEY, 'Authorization': `Bearer ${API_KEY}`
            }
        })


        const departments = await response.json()

        return departments.map((department) => {
            return {
                department_id: department.department_id,
                department_name: department.department_name,
                ...department
            }
        })
    }
    //getDepartment()
    useEffect(() => {

        const fetchData = async () => {
            const departmentsFromAPI = await getDepartment()

            setDepartment(departmentsFromAPI)
        }

        fetchData()

    }, []);

    return (
        <>
            {
                departments.map((department, index) => (<>
                        <DepartmentDetail department_id= {department.department_id}
                                        department_name= {department.department_name}
                                       key={index}/>
                    </>

                ))}
        </>
    )
}