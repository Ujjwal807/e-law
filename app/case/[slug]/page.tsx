import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Gavel, Scale, User } from "lucide-react";

// Mock case data (in a real application, this would come from an API or database)
const caseData = {
  id: "12345",
  title: "Smith vs. Johnson",
  caseNumber: "2023-CV-789",
  court: "Supreme Court",
  judge: "Hon. Jane Doe",
  status: "Active",
  filingDate: "2023-05-15",
  plaintiff: "John Smith",
  defendant: "Sarah Johnson",
  summary:
    "This case involves a contract dispute between the plaintiff, John Smith, and the defendant, Sarah Johnson. The plaintiff alleges breach of contract and seeks damages.",
  nextHearing: "2023-09-01",
};

export default function CaseDetailsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Case Details</h1>
      <Card>
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
                <span className="font-semibold">Filing Date:</span>{" "}
                {caseData.filingDate}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span className="font-semibold">Plaintiff:</span>{" "}
                {caseData.plaintiff}
              </div>
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span className="font-semibold">Defendant:</span>{" "}
                {caseData.defendant}
              </div>
              <div className="flex items-center">
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span className="font-semibold">Next Hearing:</span>{" "}
                {caseData.nextHearing}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Case Summary</h3>
            <p>{caseData.summary}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Badge
            variant={caseData.status === "Active" ? "default" : "secondary"}
          >
            {caseData.status}
          </Badge>
          <Button asChild>
            <Link href={`/case/${caseData.id}/details`}>View Full Case</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
