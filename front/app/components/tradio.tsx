import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function TRadio() {
  return (
    <div className="border rounded-lg w-full">
      <div className="relative w-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Patient ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Results</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">P001</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>Routine checkup</TableCell>
              <TableCell>
                <Link className="text-blue-600 underline" href="#">
                  View Results
                </Link>
              </TableCell>
              <TableCell>
                <Badge variant="default">Completed</Badge>
              </TableCell>
              <TableCell>
                <Button size="sm" variant="outline">
                  Update
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">P002</TableCell>
              <TableCell>Jane Smith</TableCell>
              <TableCell>Follow-up appointment</TableCell>
              <TableCell>
                <Link className="text-blue-600 underline" href="#">
                  View Results
                </Link>
              </TableCell>
              <TableCell>
                <Badge variant="default">Pending</Badge>
              </TableCell>
              <TableCell>
                <Button size="sm" variant="outline">
                  Update
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">P003</TableCell>
              <TableCell>Michael Johnson</TableCell>
              <TableCell>Annual physical</TableCell>
              <TableCell>
                <Link className="text-blue-600 underline" href="#">
                  View Results
                </Link>
              </TableCell>
              <TableCell>
                <Badge variant="default">Completed</Badge>
              </TableCell>
              <TableCell>
                <Button size="sm" variant="outline">
                  Update
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">P004</TableCell>
              <TableCell>Emily Davis</TableCell>
              <TableCell>Specialist consultation</TableCell>
              <TableCell>
                <Link className="text-blue-600 underline" href="#">
                  View Results
                </Link>
              </TableCell>
              <TableCell>
                <Badge variant="default">Cancelled</Badge>
              </TableCell>
              <TableCell>
                <Button size="sm" variant="outline">
                  Update
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">P005</TableCell>
              <TableCell>David Wilson</TableCell>
              <TableCell>Routine checkup</TableCell>
              <TableCell>
                <Link className="text-blue-600 underline" href="#">
                  View Results
                </Link>
              </TableCell>
              <TableCell>
                <Badge variant="default">Completed</Badge>
              </TableCell>
              <TableCell>
                <Button size="sm" variant="outline">
                  Update
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default TRadio