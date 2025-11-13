import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import Image from '@/components/Image'

export default function RuralDispatch() {
  return (
    <>
      <PageSEO
        title={`Rural Dispatch - ${siteMetadata.author}`}
        description="Comprehensive ride-sharing management MVP with real-time SMS notifications, driver assignment, and role-based access control for rural transportation services."
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Rural Dispatch
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Ride-sharing management system with SMS automation and fleet coordination
          </p>
        </div>

        <div className="container py-12">
          <div className="prose max-w-none pb-8 dark:prose-dark">
            <div className="mb-8">
              <Image
                alt="Rural Dispatch Dashboard"
                src="https://res.cloudinary.com/dvcywi3uf/image/upload/v1706533764/jrguse/port/ai-magic.jpg"
                className="rounded-lg"
                width={800}
                height={400}
              />
            </div>

            <h2>Project Overview</h2>
            <p>
              Rural Dispatch is a comprehensive ride-sharing management MVP built for rural
              transportation services. The platform features real-time SMS notifications, automated
              driver assignment, fleet management, and role-based access control. Built with a modern
              React/TypeScript frontend and Node.js/Express backend, it provides a complete solution
              for managing ride requests from creation to completion.
            </p>

            <h2>Key Features</h2>
            <ul>
              <li>
                <strong>Two-Way SMS Communication:</strong> Real-time SMS conversations with riders
                and drivers using Twilio and Vonage with automatic failover
              </li>
              <li>
                <strong>Role-Based Access Control:</strong> Four user roles (Admin, Dispatcher,
                Driver, Case Manager) with granular permissions
              </li>
              <li>
                <strong>Smart Driver Assignment:</strong> Intelligent driver and vehicle matching
                based on availability and ride requirements
              </li>
              <li>
                <strong>Automated Status Tracking:</strong> Complete ride lifecycle management from
                request to completion with 12+ status states
              </li>
              <li>
                <strong>Fleet Management:</strong> Comprehensive vehicle and driver management with
                text search capabilities
              </li>
              <li>
                <strong>User Consent Tracking:</strong> TCPA-compliant SMS consent management with
                opt-out handling
              </li>
              <li>
                <strong>Google Maps Integration:</strong> Address autocomplete and place ID storage
                for future route optimization
              </li>
              <li>
                <strong>Notification History:</strong> Complete SMS message history with delivery
                status tracking
              </li>
            </ul>

            <h2>Architecture & Flow</h2>
            <div className="mb-8">
              <Image
                alt="Rural Dispatch System Flow"
                src="https://res.cloudinary.com/dvcywi3uf/image/upload/v1706533764/jrguse/port/placeholder-flow.jpg"
                className="rounded-lg"
                width={800}
                height={600}
              />
              <p className="text-sm text-gray-500 mt-2">
                System architecture showing ride request flow, SMS automation, and driver assignment
              </p>
            </div>

            <h3>Monorepo Structure</h3>
            <p>
              The project is organized as a monorepo with shared validation schemas between frontend
              and backend:
            </p>
            <ul>
              <li>
                <strong>/client</strong> - React 18 + TypeScript + Vite (7300+ lines of code)
              </li>
              <li>
                <strong>/server</strong> - Express.js + MongoDB backend with comprehensive API
              </li>
              <li>
                <strong>/shared</strong> - Zod validation schemas used across the stack
              </li>
            </ul>

            <h2>SMS Notification System</h2>
            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Image
                  alt="SMS Modal Interface"
                  src="https://res.cloudinary.com/dvcywi3uf/image/upload/v1706533764/jrguse/port/placeholder-sms.jpg"
                  className="rounded-lg"
                  width={400}
                  height={300}
                />
                <p className="text-sm text-gray-500 mt-2">SMS conversation modal</p>
              </div>
              <div>
                <Image
                  alt="Notification History"
                  src="https://res.cloudinary.com/dvcywi3uf/image/upload/v1706533764/jrguse/port/placeholder-notifications.jpg"
                  className="rounded-lg"
                  width={400}
                  height={300}
                />
                <p className="text-sm text-gray-500 mt-2">SMS notification history and tracking</p>
              </div>
            </div>

            <h3>SMS Provider Architecture</h3>
            <p>
              The notification system implements a robust dual-provider architecture with automatic
              failover:
            </p>
            <ul>
              <li>
                <strong>Primary Provider:</strong> Twilio with Message Service SID for high
                deliverability
              </li>
              <li>
                <strong>Fallback Provider:</strong> Vonage API for redundancy
              </li>
              <li>
                <strong>Webhook Handling:</strong> Bidirectional SMS with delivery status callbacks
              </li>
              <li>
                <strong>Message Persistence:</strong> All SMS stored in MongoDB with timestamps and
                delivery status
              </li>
            </ul>

            <h2>Tech Stack</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h3>Frontend</h3>
                <ul>
                  <li>React 18 with TypeScript</li>
                  <li>Vite for blazing-fast dev experience</li>
                  <li>Tailwind CSS for utility-first styling</li>
                  <li>shadcn/ui component library</li>
                  <li>React Hook Form + Zod validation</li>
                  <li>Google Maps JavaScript API</li>
                </ul>
              </div>
              <div>
                <h3>Backend Services</h3>
                <ul>
                  <li>Node.js + Express.js REST API</li>
                  <li>MongoDB native driver</li>
                  <li>Twilio SDK for primary SMS</li>
                  <li>Vonage SDK for fallback SMS</li>
                  <li>bcryptjs for password hashing</li>
                  <li>Helmet + CORS for security</li>
                </ul>
              </div>
            </div>

            <h2>Authentication & Authorization</h2>
            <p>
              The system implements a two-layer authentication model:
            </p>
            <h3>1. Portal Password Protection</h3>
            <p>
              First layer using a hardcoded password with 24-hour expiration stored in localStorage.
              This provides initial access control before reaching the main application.
            </p>
            <h3>2. Database-Backed User Authentication</h3>
            <p>
              Second layer with bcrypt-hashed passwords and session storage. Four distinct roles with
              specific permissions:
            </p>
            <ul>
              <li>
                <strong>Admin:</strong> Full system access including user management and system
                configuration
              </li>
              <li>
                <strong>Dispatcher:</strong> Manage rides, assign drivers, create resources
              </li>
              <li>
                <strong>Driver:</strong> View assigned rides and update ride status
              </li>
              <li>
                <strong>Case Manager:</strong> Create rides for existing users (limited permissions)
              </li>
            </ul>

            <h2>Database Architecture</h2>
            <p>MongoDB collections with optimized text indexes for search:</p>
            <ul>
              <li>
                <strong>users</strong> - Service users (riders, caregivers) with fullName and phone
                text indexes
              </li>
              <li>
                <strong>ride-requests</strong> - Complete ride lifecycle tracking
              </li>
              <li>
                <strong>service-providers</strong> - Driver profiles with text search
              </li>
              <li>
                <strong>vehicles</strong> - Fleet management with searchable fields
              </li>
              <li>
                <strong>notifications</strong> - SMS history and delivery tracking
              </li>
              <li>
                <strong>system-users</strong> - Authentication and authorization
              </li>
              <li>
                <strong>locations</strong> - Address information with Google Place IDs
              </li>
            </ul>

            <h2>Ride Status Management</h2>
            <p>
              The system implements comprehensive status tracking throughout the ride lifecycle:
            </p>
            <h3>Normal Ride Flow:</h3>
            <ol>
              <li>REQUEST_IN_PROGRESS (0)</li>
              <li>RIDE_CONFIRMED (100)</li>
              <li>RIDE_STARTED (200)</li>
              <li>RIDER_PICKED_UP (300)</li>
              <li>RIDER_DROPPED_OFF (400)</li>
              <li>ROUNDTRIP_RETURNING (450) - Optional for round trips</li>
              <li>RIDE_COMPLETE (500)</li>
            </ol>
            <h3>Error States:</h3>
            <p>
              Comprehensive error handling with status codes for canceled rides, interruptions, no-shows,
              and incomplete rides.
            </p>

            <h2>Key Screenshots</h2>
            <div className="space-y-8">
              <div>
                <h3>Ride Request Dashboard</h3>
                <Image
                  alt="Ride Request List"
                  src="https://res.cloudinary.com/dvcywi3uf/image/upload/v1706533764/jrguse/port/placeholder-dashboard.jpg"
                  className="rounded-lg"
                  width={800}
                  height={500}
                />
                <p className="text-sm text-gray-500 mt-2">
                  Main dashboard with ride filtering, search, and status overview
                </p>
              </div>

              <div>
                <h3>Driver Assignment Interface</h3>
                <Image
                  alt="Driver Assignment"
                  src="https://res.cloudinary.com/dvcywi3uf/image/upload/v1706533764/jrguse/port/placeholder-assignment.jpg"
                  className="rounded-lg"
                  width={800}
                  height={500}
                />
                <p className="text-sm text-gray-500 mt-2">
                  Smart driver and vehicle assignment with availability checking
                </p>
              </div>

              <div>
                <h3>Ride Request Form</h3>
                <Image
                  alt="Comprehensive Ride Form"
                  src="https://res.cloudinary.com/dvcywi3uf/image/upload/v1706533764/jrguse/port/placeholder-form.jpg"
                  className="rounded-lg"
                  width={800}
                  height={500}
                />
                <p className="text-sm text-gray-500 mt-2">
                  Detailed ride request form with Google Maps autocomplete
                </p>
              </div>
            </div>

            <h2>Development Features</h2>
            <ul>
              <li>
                <strong>Database Seeding:</strong> Comprehensive seed scripts for demo data
              </li>
              <li>
                <strong>Hot Reload:</strong> Concurrent client and server development with nodemon
                and Vite
              </li>
              <li>
                <strong>API Factory Pattern:</strong> Reusable database operations
              </li>
              <li>
                <strong>Environment Configuration:</strong> Separate configs for development and
                production
              </li>
              <li>
                <strong>TypeScript Gradual Migration:</strong> Relaxed strict mode for incremental
                type safety
              </li>
            </ul>

            <h2>Compliance & Security</h2>
            <ul>
              <li>TCPA-compliant SMS consent tracking</li>
              <li>Opt-out handling with STOP keyword support</li>
              <li>bcrypt password hashing</li>
              <li>Helmet.js security headers</li>
              <li>CORS configuration for API protection</li>
              <li>Role-based middleware for endpoint protection</li>
            </ul>

            <h2>Project Timeline</h2>
            <p>
              <strong>Start Date:</strong> January 2025
              <br />
              <strong>Status:</strong> MVP Complete
              <br />
              <strong>Type:</strong> Personal Project / Hackathon MVP
              <br />
              <strong>Code:</strong> 7300+ lines of frontend TypeScript code
            </p>

            <h2>Links</h2>
            <div className="flex gap-4">
              <Link
                href="https://github.com/johanguse"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-bold"
                rel="noopener noreferrer"
                target="_blank"
              >
                View on GitHub →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
