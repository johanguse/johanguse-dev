import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import Image from '@/components/Image'

export default function RuralDispatch() {
  return (
    <>
      <PageSEO
        title={`Rural Dispatch - ${siteMetadata.author}`}
        description="Full-stack ride-sharing management application with role-based access, SMS notifications, and real-time tracking for rural communities."
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Rural Dispatch
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Ride-sharing management platform designed for rural transportation services
          </p>
        </div>

        <div className="container py-12">
          <div className="prose max-w-none pb-8 dark:prose-dark">
            <div className="mb-8">
              <Image
                alt="Rural Dispatch Dashboard"
                src="https://res.cloudinary.com/dvcywi3uf/image/upload/v1766063929/jrguse/port/rural-dispatch-dashboard.jpg"
                className="rounded-lg"
                width={800}
                height={400}
              />
            </div>

            <h2>Project Overview</h2>
            <p>
              Rural Dispatch is a comprehensive ride-sharing management application built to serve
              rural communities where traditional ride-sharing services are unavailable. The
              platform enables dispatchers, case managers, and drivers to coordinate transportation
              for service users, featuring real-time SMS notifications and TCPA-compliant messaging.
            </p>

            <h2>Key Features</h2>

            <h3>🔐 Role-Based Access Control</h3>
            <ul>
              <li>
                <strong>Admin:</strong> Full system access including user management and system
                configuration
              </li>
              <li>
                <strong>Dispatcher:</strong> Coordinate rides, assign drivers, manage daily
                operations
              </li>
              <li>
                <strong>Case Manager:</strong> Request rides on behalf of clients and riders
              </li>
              <li>
                <strong>Driver:</strong> View assigned rides, update ride status, receive
                notifications
              </li>
            </ul>

            <h3>📱 Two-Way SMS Notifications</h3>
            <ul>
              <li>
                <strong>Dual Provider Support:</strong> Twilio (primary) and Vonage (fallback) for
                reliability
              </li>
              <li>
                <strong>Real-time Updates:</strong> Automated notifications for ride confirmations,
                driver assignments, and ETAs
              </li>
              <li>
                <strong>TCPA Compliance:</strong> Built-in consent management and opt-out handling
              </li>
              <li>
                <strong>Conversation Tracking:</strong> Full SMS history and conversation threading
              </li>
            </ul>

            <h3>🚗 Ride Management System</h3>
            <ul>
              <li>
                <strong>Request Creation:</strong> Easy-to-use forms for scheduling rides with
                pickup/dropoff details
              </li>
              <li>
                <strong>Driver Assignment:</strong> Match available drivers and vehicles to ride
                requests
              </li>
              <li>
                <strong>Status Tracking:</strong> Real-time ride status updates from request to
                completion
              </li>
              <li>
                <strong>Fleet Management:</strong> Track vehicles, driver availability, and
                scheduling
              </li>
            </ul>

            <h3>👥 User Management</h3>
            <ul>
              <li>
                <strong>Service Users (Riders):</strong> Manage rider profiles and ride history
              </li>
              <li>
                <strong>Service Providers (Drivers):</strong> Driver profiles with contact info and
                assignments
              </li>
              <li>
                <strong>Vehicles:</strong> Fleet inventory with vehicle details and assignments
              </li>
              <li>
                <strong>Staff Accounts:</strong> Dispatcher and case manager account management
              </li>
            </ul>

            <h3>📊 System Manager Dashboard</h3>
            <ul>
              <li>
                <strong>Riders Tab:</strong> Add, edit, and manage rider information
              </li>
              <li>
                <strong>Providers Tab:</strong> Manage driver profiles and assignments
              </li>
              <li>
                <strong>Vehicles Tab:</strong> Fleet inventory and vehicle tracking
              </li>
              <li>
                <strong>Dispatchers Tab:</strong> Staff account management
              </li>
              <li>
                <strong>Case Managers Tab:</strong> Case manager account management
              </li>
            </ul>

            <h2>Tech Stack</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h3>Frontend</h3>
                <ul>
                  <li>React 18 with TypeScript (strict mode)</li>
                  <li>Vite for fast development and builds</li>
                  <li>Tailwind CSS + shadcn/ui components</li>
                  <li>React Hook Form with Zod validation</li>
                  <li>React Router v6 for navigation</li>
                  <li>Lucide Icons</li>
                </ul>
              </div>
              <div>
                <h3>Backend</h3>
                <ul>
                  <li>Node.js with Fastify framework</li>
                  <li>PostgreSQL database</li>
                  <li>Prisma ORM v7</li>
                  <li>ESM modules</li>
                  <li>bcryptjs for authentication</li>
                </ul>
              </div>
              <div>
                <h3>SMS & Notifications</h3>
                <ul>
                  <li>Twilio (primary SMS provider)</li>
                  <li>Vonage (fallback SMS provider)</li>
                  <li>Two-way SMS conversations</li>
                  <li>Webhook handlers for incoming messages</li>
                </ul>
                <Image
                  src="https://res.cloudinary.com/dvcywi3uf/image/upload/v1766064310/jrguse/port/rural-dispatch-sms-modal.jpg"
                  alt="Rural Dispatch SMS Modal"
                  className="rounded-lg"
                  width={600}
                  height={650}
                />
              </div>
              <div>
                <h3>Development & Deployment</h3>
                <ul>
                  <li>Bun for package management</li>
                  <li>Biome for linting and formatting</li>
                  <li>Vitest for testing</li>
                  <li>Render/Railway deployment ready</li>
                  <li>Shared Zod schemas between client/server</li>
                </ul>
              </div>
            </div>

            <h2>Technical Highlights</h2>

            <h3>Monorepo Architecture</h3>
            <p>
              The project uses a monorepo structure with shared Zod validation schemas between the
              React frontend and Fastify backend. This ensures type safety and validation
              consistency across the entire application, reducing bugs and improving developer
              experience.
            </p>

            <h3>SMS System Design</h3>
            <p>
              The SMS notification system implements a dual-provider approach with Twilio as the
              primary provider and Vonage as fallback. The system handles two-way conversations,
              tracks message history, and implements TCPA-compliant opt-out handling. Webhook
              endpoints process incoming messages and route them to the appropriate handlers.
            </p>

            <h3>Role-Based Security</h3>
            <p>
              Authentication uses bcryptjs for password hashing with role-based middleware that
              enforces access control at both the route and component level. Each role has specific
              permissions that determine what data they can view and actions they can perform.
            </p>

            <h2>Project Timeline</h2>
            <p>
              <strong>Start Date:</strong> December 2025
            </p>

            <h2>Links</h2>
            <div className="flex gap-4">
              <Link
                href="http://swarmnyc.com/"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-bold"
                rel="noopener noreferrer"
                target="_blank"
              >
                SWARM NYC →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
