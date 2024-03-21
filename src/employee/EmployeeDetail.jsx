import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"


export default function EmployeeDetail({employeeId, firstName, lastName, email, phoneNumber, joinDate}) {
    // Display Employee Information
    return (<>
        <Card>
            <CardHeader>
                <CardTitle>Employee ID: {employeeId}  </CardTitle>
            </CardHeader>
            <CardContent>
                <p>Name: {firstName} {lastName}</p>
                <p>Email: {email} </p>
                <p>Phone Number: {phoneNumber}</p>
                <p>Join Date: {joinDate}</p>
                <p></p>
            </CardContent>
        </Card>

    </>)
}