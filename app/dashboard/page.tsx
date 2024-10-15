import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CalendarIcon, FileText, Search } from 'lucide-react'

const cases = [
  { id: 1, title: 'Smith vs. Johnson', court: 'Supreme Court', date: '2023-05-15', status: 'Active' },
  { id: 2, title: 'Green Enterprises Bankruptcy', court: 'Federal Court', date: '2023-04-22', status: 'Closed' },
  { id: 3, title: 'Brown Family Trust', court: 'Probate Court', date: '2023-06-01', status: 'Active' },
  { id: 4, title: 'City of Springfield vs. XYZ Corp', court: 'District Court', date: '2023-03-10', status: 'Appeal' },
  { id: 5, title: 'Jones Patent Dispute', court: 'Patent Court', date: '2023-05-28', status: 'Active' },
]

export default function LawyerDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Lawyer Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Active Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{cases.filter(c => c.status === 'Active').length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Closed Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{cases.filter(c => c.status === 'Closed').length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{cases.length}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Case Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <Label htmlFor="search">Search</Label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Search cases..."
                  className="pl-8"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="court">Court</Label>
              <Select>
                <SelectTrigger id="court">
                  <SelectValue placeholder="Select Court" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Courts</SelectItem>
                  <SelectItem value="Supreme Court">Supreme Court</SelectItem>
                  <SelectItem value="Federal Court">Federal Court</SelectItem>
                  <SelectItem value="District Court">District Court</SelectItem>
                  <SelectItem value="Probate Court">Probate Court</SelectItem>
                  <SelectItem value="Patent Court">Patent Court</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="status">Status</Label>
              <Select>
                <SelectTrigger id="status">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Closed">Closed</SelectItem>
                  <SelectItem value="Appeal">Appeal</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Date Range</Label>
              <div className="flex space-x-2">
                <Button variant="outline" className="w-[140px] justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>Start date</span>
                </Button>
                <Button variant="outline" className="w-[140px] justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>End date</span>
                </Button>
              </div>
            </div>
          </div>
          <Button className="mt-4">Apply Filters</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Cases</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Case Title</TableHead>
                <TableHead>Court</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cases.map((caseItem) => (
                <TableRow key={caseItem.id}>
                  <TableCell>{caseItem.title}</TableCell>
                  <TableCell>{caseItem.court}</TableCell>
                  <TableCell>{caseItem.date}</TableCell>
                  <TableCell>{caseItem.status}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/case/${caseItem.id}`}>
                        <FileText className="mr-2 h-4 w-4" />
                        View
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}