import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import Image from '@/components/Image'

export default function LLMGenerator() {
  return (
    <>
      <PageSEO
        title={`LLM Generator - ${siteMetadata.author}`}
        description="Generate llms.txt files for websites to improve their visibility to large language models. Firecrawl integration with OpenAI enhancement."
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            LLM Generator
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Generate llms.txt files for websites to improve their visibility to large language
            models
          </p>
        </div>

        <div className="container py-12">
          <div className="prose max-w-none pb-8 dark:prose-dark">
            <div className="mb-8">
              <Image
                alt="LLM Generator"
                src="https://res.cloudinary.com/dvcywi3uf/image/upload/v1766067027/jrguse/port/llmgenerator-dashboard.jpg"
                className="rounded-lg"
                width={800}
                height={400}
              />
            </div>

            <h2>Project Overview</h2>
            <p>
              LLMGenerator is a service that generates <code>llms.txt</code> files for websites to
              improve their visibility to large language models. The service uses Firecrawl's map +
              scrape approach with OpenAI enhancement to create high-quality, LLM-optimized content.
            </p>

            <h2>What is llms.txt?</h2>
            <p>
              llms.txt is a standardized format for making website content more accessible to Large
              Language Models (LLMs). It provides:
            </p>
            <ul>
              <li>
                <strong>llms.txt:</strong> A concise index of all pages with AI-enhanced titles and
                descriptions
              </li>
              <li>
                <strong>llms-full.txt:</strong> Complete content of all pages for comprehensive
                access
              </li>
            </ul>

            <h2>What is llms.txt?</h2>
            <p>
              llms.txt is a standardized format for making website content more accessible to Large
              Language Models (LLMs). It provides:
            </p>
            <ul>
              <li>
                <strong>llms.txt:</strong> A concise index of all pages with AI-enhanced titles and
                descriptions
              </li>
              <li>
                <strong>llms-full.txt:</strong> Complete content of all pages for comprehensive
                access
              </li>
            </ul>

            <h2>Key Features</h2>
            <ul>
              <li>
                🚀 <strong>Fast Generation:</strong> Direct map + scrape approach with background
                processing
              </li>
              <li>
                ⚡ <strong>Reliable Background Jobs:</strong> Trigger.dev integration for
                long-running tasks with automatic retries
              </li>
              <li>
                🤖 <strong>AI-Enhanced Content:</strong> OpenAI-powered titles and descriptions for
                paid plans
              </li>
              <li>
                💰 <strong>Cost-Optimized Tiers:</strong> 95% cheaper than competitors - Free and
                paid plans with different generation methods
              </li>
              <li>
                📊 <strong>Comprehensive Analytics:</strong> Track generation stats, mapped URLs,
                and usage
              </li>
              <li>
                🔄 <strong>Real-time Updates:</strong> Live progress tracking with dedicated status
                pages
              </li>
              <li>
                🛡️ <strong>Enterprise Ready:</strong> Rate limiting, API keys, and robust error
                handling
              </li>
              <li>
                📖 <strong>API Documentation:</strong> OpenAPI/Swagger 3.0 with interactive
                documentation
              </li>
              <li>
                🌐 <strong>Background Processing:</strong> Trigger.dev handles long-running tasks
                with retries
              </li>
              <li>
                🔒 <strong>Flexible Pricing:</strong> Credit packages (never expire) + subscription
                plans
              </li>
            </ul>

            <h2>Tech Stack</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h3>Frontend</h3>
                <ul>
                  <li>React 19 with TypeScript</li>
                  <li>Vite for fast builds</li>
                  <li>Tanstack Router & Query</li>
                  <li>Tailwind CSS & shadcn/ui</li>
                  <li>React Hook Form with Zod validation</li>
                </ul>
              </div>
              <div>
                <h3>Backend</h3>
                <ul>
                  <li>Hono on Cloudflare Workers</li>
                  <li>Cloudflare D1 (SQLite) with Drizzle ORM</li>
                  <li>Better Auth for authentication</li>
                  <li>Trigger.dev for background jobs</li>
                  <li>tRPC for type-safe APIs</li>
                </ul>
              </div>
              <div>
                <h3>Integrations</h3>
                <ul>
                  <li>Firecrawl API for web scraping</li>
                  <li>OpenAI API for content enhancement</li>
                  <li>Stripe for payments</li>
                  <li>Cloudflare KV for session caching</li>
                  <li>Sentry for error tracking</li>
                </ul>
              </div>
              <div>
                <h3>Development & Testing</h3>
                <ul>
                  <li>Biome for linting/formatting</li>
                  <li>Bun for package management</li>
                  <li>Wrangler for deployments</li>
                  <li>Vitest with 135 tests</li>
                  <li>OpenAPI/Swagger documentation</li>
                </ul>
              </div>
            </div>

            <h2>Generation Methods</h2>
            <div className="mb-4 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <h3 className="mb-4 text-xl font-bold">🆓 Simple Generation (1x Credits)</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Fast generation (15-30 seconds)</li>
                <li>✓ Uses Firecrawl's /llmstxt endpoint</li>
                <li>✓ Cost-effective for free tier users</li>
                <li>✓ Locked for free plans, optional for paid</li>
              </ul>
            </div>

            <div className="mb-4 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <h3 className="mb-4 text-xl font-bold">⭐ Enhanced Generation (2x Credits)</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ AI-enhanced titles (3-4 words) and descriptions (9-10 words)</li>
                <li>✓ Uses map + scrape + OpenAI integration</li>
                <li>✓ Premium quality for paid plans</li>
                <li>✓ Default for paid users</li>
              </ul>
            </div>

            <h2>Business Model & Revenue</h2>
            <p>
              This SaaS platform serves developers, agencies, and businesses who want to improve
              their website's visibility to large language models. The credit-based pricing system
              provides flexibility while maintaining healthy margins.
            </p>
            <h3>Revenue Streams:</h3>
            <ul>
              <li>Credit packages (pay-as-you-go)</li>
              <li>Subscription plans (monthly recurring)</li>
              <li>API access (all paid tiers)</li>
              <li>Enterprise custom solutions</li>
            </ul>
            <h3>Competitive Advantages:</h3>
            <ul>
              <li>95% cheaper than competitors</li>
              <li>Credits never expire (packages)</li>
              <li>API-first architecture</li>
              <li>Real-time background processing</li>
            </ul>

            <h2>Project Timeline</h2>
            <p>
              <strong>Start Date:</strong> June 2025
              <br />
              <strong>Status:</strong> 🔨 Work in Progress (v2.0.0)
              <br />
              <strong>Type:</strong> Personal SaaS Project
            </p>

            <h2>Links</h2>
            <div className="flex gap-4">
              <Link
                href="https://llmgenerator.com/?utm_source=johan-website-projects"
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
