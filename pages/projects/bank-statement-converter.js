import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import Image from '@/components/Image'

export default function BankStatementConverter() {
  return (
    <>
      <PageSEO
        title={`Bank Statement Converter - ${siteMetadata.author}`}
        description="AI-powered service that transforms PDF bank statements into Excel, CSV, JSON, and QBO formats with 99%+ accuracy."
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Bank Statement Converter
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Transform PDF bank statements into Excel, CSV, JSON, and QBO formats with AI
          </p>
        </div>

        <div className="container py-12">
          <div className="prose max-w-none pb-8 dark:prose-dark">
            <div className="mb-8">
              <Image
                alt="Bank Statement Converter"
                src="https://res.cloudinary.com/dvcywi3uf/image/upload/v1706533764/jrguse/port/ai-magic.jpg"
                className="rounded-lg"
                width={800}
                height={400}
              />
            </div>

            <h2>Project Overview</h2>
            <p>
              Bank Statement Converter is an AI-powered service that transforms PDF bank statements
              into Excel, CSV, JSON, and QBO format with 99%+ accuracy. Built on proven Resume-AI
              architecture, it serves individuals, small businesses, and enterprises who need
              structured financial data for analysis, accounting, and compliance.
            </p>
            <p>
              <strong>
                Convert any PDF or Docx bank statement to Excel, CSV, JSON, or QBO in under 30
                seconds.
              </strong>
            </p>

            <h2>Key Features</h2>
            <ul>
              <li>
                🤖 <strong>AI-Powered OCR:</strong> OCR service provides superior accuracy on
                financial documents (99%+)
              </li>
              <li>
                ⚡ <strong>Instant Conversion:</strong> PDF to Excel, CSV, JSON, or QBO in under 30
                seconds
              </li>
              <li>
                🌍 <strong>Bank-Agnostic:</strong> Works with statements from 1000+ banks worldwide
              </li>
              <li>
                📊 <strong>Multiple Export Formats:</strong> Excel (.xlsx), CSV, JSON, and QBO
                (QuickBooks Online)
              </li>
              <li>
                🔄 <strong>Batch Processing:</strong> Convert up to 5 files simultaneously
              </li>
              <li>
                🔒 <strong>Secure File Storage:</strong> Bank-grade encryption with Cloudflare R2
              </li>
              <li>
                📈 <strong>Usage Dashboard:</strong> Track conversion history and usage limits
              </li>
              <li>
                💳 <strong>Flexible Pricing:</strong> Subscription plans + pay-as-you-go credits
              </li>
              <li>
                🔌 <strong>API Integration:</strong> Developer-friendly endpoints for automation
              </li>
              <li>
                🏷️ <strong>Transaction Categorization:</strong> AI-powered spending analysis
              </li>
            </ul>

            <h2>Tech Stack</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h3>Frontend</h3>
                <ul>
                  <li>Next.js 15.3.4 with App Router</li>
                  <li>React 19 with TypeScript</li>
                  <li>TailwindCSS & Shadcn/ui</li>
                  <li>Aceternity UI for animations</li>
                  <li>NextAuth.js for authentication</li>
                </ul>
              </div>
              <div>
                <h3>Backend Services</h3>
                <ul>
                  <li>FastAPI-based microservice</li>
                  <li>OCR for processing</li>
                  <li>Excel, CSV, JSON, QBO generation</li>
                  <li>Cloudflare R2 for file storage</li>
                  <li>Transaction categorization AI</li>
                </ul>
              </div>
              <div>
                <h3>Database & Storage</h3>
                <ul>
                  <li>PostgreSQL with Prisma ORM</li>
                  <li>Cloudflare R2 for processed files</li>
                  <li>Upstash Redis for rate limiting</li>
                </ul>
              </div>
              <div>
                <h3>Payments & Deployment</h3>
                <ul>
                  <li>Stripe for payment processing</li>
                  <li>Stripe Customer Portal</li>
                  <li>Fly.io for app hosting</li>
                  <li>Custom webhook handlers</li>
                </ul>
              </div>
            </div>

            <h2>Core Functionalities</h2>
            <h3>1. Authentication & Subscription Management</h3>
            <ul>
              <li>Secure authentication using NextAuth.js</li>
              <li>Protected routes and API endpoints</li>
              <li>Subscription plan tracking and limits</li>
              <li>Usage monitoring and notifications</li>
            </ul>

            <h3>2. Bank Statement Processing</h3>
            <ul>
              <li>AI-powered OCR technology</li>
              <li>Support for password-protected PDFs</li>
              <li>Real-time progress tracking</li>
              <li>Data validation and error detection</li>
            </ul>

            <h3>3. Data Export & Download</h3>
            <ul>
              <li>Excel (.xlsx) format with proper formatting</li>
              <li>CSV export for universal compatibility</li>
              <li>JSON format for API integrations</li>
              <li>QBO (QuickBooks Online) format</li>
              <li>Secure download links with expiration</li>
            </ul>

            <h2>Business Model & Revenue</h2>
            <p>
              This SaaS platform serves individuals, small businesses, and enterprises who need
              structured financial data for analysis, accounting, and compliance. The service
              eliminates hours of manual data entry and reduces errors in financial data processing.
            </p>
            <h3>Subscription Revenue:</h3>
            <ul>
              <li>5 subscription tiers (Free to Scale)</li>
              <li>20% discount on annual billing</li>
              <li>Stripe Customer Portal for self-service</li>
              <li>Automated billing and invoice management</li>
            </ul>
            <h3>Target Market:</h3>
            <ul>
              <li>Small Business Owners: Bookkeepers, e-commerce, freelancers</li>
              <li>Financial Professionals: Accounting firms, tax preparers, advisors</li>
              <li>Enterprise Users: Banks, insurance companies, legal firms</li>
            </ul>

            <h2>Project Timeline</h2>
            <p>
              <strong>Start Date:</strong> July 2025
              <br />
              <strong>Status:</strong> ✅ Production Ready & Launched
              <br />
              <strong>Type:</strong> Personal SaaS Project
              <br />
              <strong>Users:</strong> Serving individuals and businesses
            </p>

            <h2>Links</h2>
            <div className="flex gap-4">
              <Link
                href="https://bankstatementconverterwithai.com/?utm_source=johan-website-projects"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-bold"
                rel="noopener noreferrer"
                target="_blank"
              >
                Visit Website →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
