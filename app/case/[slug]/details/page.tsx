/* eslint-disable react/no-unescaped-entities */
'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, Gavel, Scale, User, FileText, Clock, MapPin, TrendingUp } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

// Mock case data (in a real application, this would come from an API or database)
const caseData = {
  id: '12345',
  title: 'Smith vs. Johnson',
  caseNumber: '2023-CV-789',
  court: 'Supreme Court',
  judge: 'Hon. Jane Doe',
  status: 'Active',
  filingDate: '2023-05-15',
  plaintiff: 'John Smith',
  defendant: 'Sarah Johnson',
  summary: 'This case involves a contract dispute between the plaintiff, John Smith, and the defendant, Sarah Johnson. The plaintiff alleges breach of contract and seeks damages.',
  nextHearing: '2023-09-01',
  attorneys: {
    plaintiff: 'Alice Brown',
    defendant: 'Bob Green'
  },
  venue: 'Central Courthouse, Room 302',
  causeOfAction: 'Breach of Contract',
  reliefSought: 'Monetary damages in the amount of $500,000',
  filingFee: '$350',
  documents: [
    { id: 'doc1', title: 'Complaint', date: '2023-05-15' },
    { id: 'doc2', title: 'Answer', date: '2023-06-01' },
    { id: 'doc3', title: 'Motion for Summary Judgment', date: '2023-07-15' },
  ],
  hearings: [
    { id: 'hear1', type: 'Initial Hearing', date: '2023-06-15', time: '10:00 AM' },
    { id: 'hear2', type: 'Motion Hearing', date: '2023-08-01', time: '2:00 PM' },
    { id: 'hear3', type: 'Trial', date: '2023-09-01', time: '9:00 AM' },
  ],
  timeline: [
    { date: '2023-05-15', event: 'Case filed' },
    { date: '2023-06-01', event: 'Defendant served' },
    { date: '2023-06-15', event: 'Initial hearing' },
    { date: '2023-07-15', event: 'Motion for Summary Judgment filed' },
  ],
  // Updated mock data for pie charts
  documentTypes: [
    { name: 'Pleadings', value: 5 },
    { name: 'Motions', value: 3 },
    { name: 'Orders', value: 2 },
    { name: 'Exhibits', value: 8 },
    { name: 'Correspondence', value: 12 },
  ],
  caseProgress: [
    { name: 'Completed', value: 60 },
    { name: 'Remaining', value: 40 },
  ],
  keyInsights: [
    "Case has progressed 60% towards resolution based on typical timelines.",
    "Document volume is 30% higher than average for this type of case.",
    "Motion practice is more active than 70% of similar cases.",
    "Estimated time to trial: 4-6 months based on current progress."
  ]
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export default function FullCaseDetailsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Full Case Details</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">{caseData.title}</CardTitle>
          <CardDescription>Case Number: {caseData.caseNumber}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <div className="flex items-center">
                <Gavel className="mr-2 h-4 w-4" />
                <span className="font-semibold">Court:</span> {caseData.court}
              </div>
              <div className="flex items-center">
                <Scale className="mr-2 h-4 w-4" />
                <span className="font-semibold">Judge:</span> {caseData.judge}
              </div>
              <div className="flex items-center">
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span className="font-semibold">Filing Date:</span> {caseData.filingDate}
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                <span className="font-semibold">Venue:</span> {caseData.venue}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span className="font-semibold">Plaintiff:</span> {caseData.plaintiff}
              </div>
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span className="font-semibold">Defendant:</span> {caseData.defendant}
              </div>
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span className="font-semibold">Plaintiff's Attorney:</span> {caseData.attorneys.plaintiff}
              </div>
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span className="font-semibold">Defendant's Attorney:</span> {caseData.attorneys.defendant}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Case Summary</h3>
            <p>{caseData.summary}</p>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Cause of Action</h3>
            <p>{caseData.causeOfAction}</p>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Relief Sought</h3>
            <p>{caseData.reliefSought}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Badge variant={caseData.status === 'Active' ? 'default' : 'secondary'}>
            {caseData.status}
          </Badge>
          <div>
            <span className="font-semibold mr-2">Filing Fee:</span>
            {caseData.filingFee}
          </div>
        </CardFooter>
      </Card>

      <Tabs defaultValue="documents" className="w-full mb-6">
        <TabsList>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="hearings">Hearings</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>
        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle>Case Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {caseData.documents.map(doc => (
                  <li key={doc.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="mr-2 h-4 w-4" />
                      {doc.title}
                    </div>
                    <span className="text-sm text-gray-500">{doc.date}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="hearings">
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Hearings</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {caseData.hearings.map(hearing => (
                  <li key={hearing.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      {hearing.type}
                    </div>
                    <span className="text-sm text-gray-500">{hearing.date} at {hearing.time}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="timeline">
          <Card>
            <CardHeader>
              <CardTitle>Case Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {caseData.timeline.map((event, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {event.event}
                    </div>
                    <span className="text-sm text-gray-500">{event.date}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <h2 className="text-2xl font-bold mb-4">Case Insights</h2>
      <div className="grid gap-6 md:grid-cols-2 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Document Types</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                value: {
                  label: "Count",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={caseData.documentTypes}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {caseData.documentTypes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Case Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                value: {
                  label: "Progress",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={caseData.caseProgress}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {caseData.caseProgress.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Key Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {caseData.keyInsights.map((insight, index) => (
              <li key={index} className="flex items-start">
                <TrendingUp className="mr-2 h-5 w-5 mt-0.5 text-blue-500" />
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="mt-6">
        <Button asChild>
          <Link href="/dashboard">Back to Dashboard</Link>
        </Button>
      </div>
    </div>
  )
}