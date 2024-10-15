/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Search, Zap } from "lucide-react";
import { ModeToggle } from "@/components/ui/ModeToggle";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            LegalTech AI
          </Link>
          <div className="space-x-4 flex items-center gap-6">
            <Link href="/auth" className="text-gray-600 font-semibold hover:text-gray-800">
              Login
            </Link>
            <Button asChild>
              <Link href="/auth">Sign Up</Link>
            </Button>
            <ModeToggle/>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Revolutionize Your Legal Practice with AI
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Streamline research, automate documents, and enhance your efficiency
            with our cutting-edge LegalTech platform.
          </p>
          <Button size="lg" asChild>
            <Link href="/auth">Get Started for Free</Link>
          </Button>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="mr-2" />
                Advanced Legal Research
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Access a vast database of case law, statutes, and legal
                documents. Our AI-powered search helps you find relevant
                information quickly and accurately.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2" />
                Document Automation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Generate legal documents in minutes. Our intelligent templates
                adapt to your specific needs, saving you hours of manual work.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2" />
                AI-Powered Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Gain valuable insights from your cases and documents. Our AI
                analyzes patterns and provides recommendations to strengthen
                your legal strategy.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2" />
                Easy Case Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Manage all your cases in one place. Our intuitive interface
                makes it easy to track progress, set reminders, and collaborate
                with your team.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Handling Your Case Has Never Been Easier
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            From research to document generation, our platform simplifies every
            step of your legal workflow.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <Button size="lg" variant="outline" asChild>
              <Link href="/demo">Watch Demo</Link>
            </Button>
            <Button size="lg" asChild>
              <Link href="/auth">Start Free Trial</Link>
            </Button>
          </div>
        </section>

        <section className="bg-gray-100 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <p className="italic">
                  "LegalTech AI has transformed the way I practice law. The
                  document automation feature alone has saved me countless
                  hours."
                </p>
                <p className="font-semibold mt-4">
                  - Sarah J., Corporate Lawyer
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="italic">
                  "The AI-powered research tool is a game-changer. I can find
                  relevant cases and statutes in minutes instead of hours."
                </p>
                <p className="font-semibold mt-4">
                  - Michael R., Litigation Attorney
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of lawyers who are already benefiting from our
            AI-powered platform.
          </p>
          <Button size="lg" asChild>
            <Link href="/signup">Get Started Now</Link>
          </Button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">LegalTech AI</h3>
              <p>Empowering lawyers with cutting-edge AI technology.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="hover:underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:underline">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 LegalTech AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
