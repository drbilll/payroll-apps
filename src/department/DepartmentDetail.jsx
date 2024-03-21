import {Card, CardContent, CardHeader, CardTitle,} from "@/components/ui/card"


export default function DepartmentDetail({department_id, department_name}) {

    return (<>
        <Card>
            <CardHeader>
                <CardTitle>Department ID: {department_id}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Department Name: { department_name }</p>
            </CardContent>
        </Card>

    </>)
}