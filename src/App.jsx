
import EmployeeList from "@/employee/EmployeeList.jsx";
import ExpenseList from "@/expense/ExpenseList.jsx";
import PayrollList from "@/payroll/PayrollList.jsx";
import DepartmentList from "@/department/DepartmentList.jsx";


function App() {

    return (<>
        <h1 className="pb-4 text-5xl bg-gray-400 text-center font-extrabold text-indigo-900">Payroll App</h1>
        <div className="flex bg-blue-200 p-16 justify-between">
            <hr/>
            <div className="space-y-4 space-x-2">
                <h2 className="text-3xl font-bold">Employee List</h2>
                <EmployeeList/>
            </div>
            <hr/>
            <div className="space-y-4 space-x-2">
                <h2 className="text-3xl font-bold">Expense List</h2>
                <ExpenseList/>
            </div>
            <hr/>
            <div className="space-y-4 space-x-2">
                <h2 className="text-3xl font-bold">Payroll List</h2>
                <PayrollList/>
            </div>
            <hr/>
            <div className="space-y-4 space-x-2">
                <h2 className="text-3xl font-bold">Department List</h2>
                <DepartmentList/>
            </div>

        </div>
    </>)

}

export default App
