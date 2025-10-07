import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import Image from '@/components/Image'

export default function DataTalked() {
  return (
    <>
      <PageSEO
        title={`DataTalked - ${siteMetadata.author}`}
        description="Business intelligence SaaS platform with AI-powered analytics, automated Stripe sync, and RAG-based conversational insights."
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            DataTalked
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Business intelligence platform that transforms Stripe data into actionable insights
          </p>
        </div>

        <div className="container py-12">
          <div className="prose max-w-none pb-8 dark:prose-dark">
            <div className="mb-8">
              <Image
                alt="DataTalked Dashboard"
                src="https://res.cloudinary.com/dvcywi3uf/image/upload/v1706533764/jrguse/port/ai-magic.jpg"
                className="rounded-lg"
                width={800}
                height={400}
              />
            </div>

            <h2>Project Overview</h2>
            <p>
              DataTalked is a production-ready business intelligence SaaS platform that started as a
              Shadcn admin dashboard template and evolved into a comprehensive financial analytics
              solution. Built for the{' '}
              <Link
                href="https://www.convex.dev/hackathons/resend"
                rel="noopener noreferrer"
                target="_blank"
              >
                Convex + Resend Hackathon
              </Link>
              , it combines automated Stripe data synchronization with AI-powered conversational
              analytics and automated email reporting.
            </p>

            <h2>Key Features</h2>

            <h3>🤖 RAG-Based AI Chat System</h3>
            <ul>
              <li>
                <strong>Multi-Agent Architecture:</strong> Manager, Retriever, and Analyst agents
                working together
              </li>
              <li>
                <strong>Natural Language Queries:</strong> Ask "What's our MRR?" or "Show me revenue
                trends"
              </li>
              <li>
                <strong>7 Structured Business Tools:</strong> MRR, revenue, customers, churn, LTV,
                CAC metrics
              </li>
              <li>
                <strong>Vector Search with Reranking:</strong> OpenAI embeddings for document
                retrieval
              </li>
              <li>
                <strong>Provenance Tracking:</strong> Every answer includes source metadata and
                confidence scores
              </li>
            </ul>

            <h3>🔄 Automated Stripe Synchronization</h3>
            <ul>
              <li>
                <strong>3-Tier Sync System:</strong> Hourly cron job, real-time webhooks, manual
                refresh
              </li>
              <li>
                <strong>Comprehensive Data:</strong> Payments, customers, subscriptions, disputes,
                refunds
              </li>
              <li>
                <strong>Background Processing:</strong> All data cached in Convex for fast queries
              </li>
              <li>
                <strong>Webhook Security:</strong> Signature verification and event ID logging
              </li>
              <li>
                <strong>Sync History:</strong> Complete audit trail with timestamps and status
              </li>
            </ul>

            <h3>📊 Real-time Analytics Dashboard</h3>
            <ul>
              <li>
                <strong>Financial Metrics:</strong> Revenue, MRR, churn rate, LTV, CAC with growth
                indicators
              </li>
              <li>
                <strong>Interactive Charts:</strong> Revenue trends, customer acquisition, product
                performance (Recharts)
              </li>
              <li>
                <strong>Demo Data Mode:</strong> 580+ days of realistic financial data for testing
              </li>
              <li>
                <strong>Customer Segmentation:</strong> Analyze customers by behavior and value
              </li>
              <li>
                <strong>Product Analytics:</strong> Track top-performing products and services
              </li>
            </ul>

            <h3>📧 Automated Email Reports</h3>
            <ul>
              <li>
                <strong>Flexible Scheduling:</strong> Daily, weekly, monthly, quarterly reports
              </li>
              <li>
                <strong>Beautiful Templates:</strong> React Email components with comprehensive
                metrics
              </li>
              <li>
                <strong>Smart Scheduling:</strong> 30-minute precision with timezone support
              </li>
              <li>
                <strong>Delivery Tracking:</strong> Email history with open rate monitoring (via
                Resend)
              </li>
              <li>
                <strong>Safe Deletion:</strong> Automatic cleanup of scheduled sends when reports
                are deleted
              </li>
            </ul>

            <h3>👥 Multi-Tenant Team Management</h3>
            <ul>
              <li>
                <strong>Role-Based Access:</strong> Admin, Editor, Marketing, Viewer roles with
                granular permissions
              </li>
              <li>
                <strong>Team Switching:</strong> Seamless navigation between multiple organizations
              </li>
              <li>
                <strong>Clerk Integration:</strong> Secure authentication with JWT tokens and
                session management
              </li>
              <li>
                <strong>Team Settings:</strong> Stripe API configuration per team
              </li>
            </ul>

            <h2>Tech Stack</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h3>Frontend</h3>
                <ul>
                  <li>React 19 with TypeScript (strict mode)</li>
                  <li>TanStack Router (file-based routing)</li>
                  <li>ShadcnUI (TailwindCSS v4 + RadixUI)</li>
                  <li>Recharts for data visualization</li>
                  <li>Vite for fast development builds</li>
                  <li>Lucide Icons</li>
                </ul>
              </div>
              <div>
                <h3>Backend & Database</h3>
                <ul>
                  <li>Convex (real-time serverless database)</li>
                  <li>Convex Actions for external API calls</li>
                  <li>Convex Crons for scheduled tasks</li>
                  <li>HTTP endpoints for webhooks</li>
                  <li>Stripe API integration</li>
                </ul>
              </div>
              <div>
                <h3>AI & Integrations</h3>
                <ul>
                  <li>OpenAI GPT-4 (chat and embeddings)</li>
                  <li>Anthropic Claude (alternative model)</li>
                  <li>Convex AI Agent framework</li>
                  <li>Convex RAG package for vector search</li>
                  <li>Resend for email delivery</li>
                  <li>React Email for templates</li>
                </ul>
              </div>
              <div>
                <h3>Development & Deployment</h3>
                <ul>
                  <li>Bun for package management</li>
                  <li>ESLint & Prettier for code quality</li>
                  <li>GitHub Actions for CI/CD</li>
                  <li>Netlify for frontend hosting</li>
                  <li>Convex Cloud for backend</li>
                  <li>Wrangler for Cloudflare Workers</li>
                </ul>
              </div>
            </div>

            <h2>Technical Highlights</h2>

            <h3>AI Chat Architecture</h3>
            <p>
              The chat system uses a sophisticated multi-agent approach where the Manager Agent
              analyzes query complexity, the Retriever Agent searches relevant documents using RAG,
              and the Analyst Agent executes structured business metric tools. All responses include
              provenance tracking with source citations and confidence scores.
            </p>

            <h3>Stripe Sync Strategy</h3>
            <p>
              Instead of making live API calls, DataTalked implements a three-tier synchronization
              system: hourly background cron jobs fetch all data, real-time webhooks handle instant
              updates, and users can manually refresh when needed. All data is cached in Convex,
              making dashboard queries extremely fast.
            </p>

            <h3>Demo Data System</h3>
            <p>
              The platform includes a comprehensive demo mode with 580+ days of realistic financial
              data (Jan 2024 - Aug 2025) generated using Faker.js. This enables users to fully
              explore features without connecting their Stripe account, and provides a testing
              environment for development.
            </p>

            <h2>Project Timeline</h2>
            <p>
              <strong>Start Date:</strong> September 2025
              <br />
              <strong>Status:</strong> 🔨 Work in Progress
              <br />
              <strong>Type:</strong> Personal Project
            </p>

            <h2>Links</h2>
            <div className="flex gap-4">
              <Link
                href="https://datatalked.com/?utm_source=johan-website-projects"
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
